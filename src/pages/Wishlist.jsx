import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slices/wishlistSlice';

function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  // console.log(wishlistArray);
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{width:'18rem',height:'27rem'}}>
            <Card.Img style={{height:'200px'}}  variant="top" src={product?.thumbnail}/>
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>
               <p>{product?.description.slice(0,55)}...</p>
               <h5>${product?.price}</h5>
              </Card.Text>
             <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishList(product.id))} className='btn btn-light'><i className='fa-solid fa-trash text-danger fs-4'></i></Button>
                <Button className='btn btn-light'><i className='fa-solid fa-cart-plus text-success fs-4'></i></Button>
             </div>
            </Card.Body>
          </Card>
          </Col>
        )):<div style={{height:'50vh'}} className='d-flex align-items-center justify-content-center flex-column'>
          <img style={{height:'200px'}} src="https://cdn.dribbble.com/users/1514097/screenshots/3550111/wishlist-icon.gif" alt="" />
          <h3 >Your Wishlist is Empty !!!!</h3>
          <Link to={'/'} style={{textDecoration:'none'}} className='btn btn-success rounded '>Back to Home</Link>
        </div>
      }
    </Row>
  )
}

export default Wishlist
