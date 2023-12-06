import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addTowishlist } from '../redux/slices/wishlistSlice'

function Home() {
  // api call using usefect custom hook return a result
  const data = useFetch('https://dummyjson.com/products')
  // for dispatching action
  const dispatch = useDispatch()
  console.log(data);   
  return (
      <Row className='ms-5'  style={{ marginTop: '150px'}}>
       { 
       data?.length>0?data?.map((product,index)=>(
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
              <Button onClick={()=>dispatch(addTowishlist(product))} className='btn btn-light'><i className='fa-solid fa-heart text-danger fs-4'></i></Button>
              <Button className='btn btn-light'><i className='fa-solid fa-cart-plus text-success fs-4'></i></Button>
           </div>
          </Card.Body>
        </Card>
        </Col>
       )):<p className='text-danger fw-bold'>Nothing to Display</p>
       }
      </Row>
  )
}

export default Home
