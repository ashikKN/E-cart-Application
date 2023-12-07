import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  // to get state from store
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  // console.log(cartArray);
  const navigate = useNavigate()

  const [total,setTotal] = useState(0)
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
      getCartTotal()
  },[cartArray])
  
  const handleCart = ()=>{
    dispatch(emptyCart())
    toast.success("Order Placed Succesfully!! Thanks For Purchasing With Us!!!")
  } 

  return (
    <div className='container mb-5' style={{ marginTop: '100px' }} >
      {
        cartArray?.length > 0 ?
        <div className='row mt-5'>
          <div className='col-lg-8'>
                    <Table  className='shadow border table' >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Image</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                        cartArray?.map((product, index) => (
                        <tr>
                          <td>{index+1}</td>
                          <td>{product.title}</td>
                          <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                          <td>${product.price}</td>
                          <td><button onClick={()=>dispatch(removeFromCart(product.id))} className="btn"><i className="fa-solid fa-trash fa-1x text-danger"></i></button></td>
                        </tr>
                        ))
                        }
                      </tbody>
                      
                    </Table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-3'>
            <h2 className='text-success'>Cart Summary</h2>
            <div className="border mt-3  p-3 rounded shadow">
                  <h4>Total Products : <span>{cartArray.length}</span></h4>
                  <h4 className='mt-3'>Total : <span className='text-danger fw-bolder'>$ {total}</span></h4>
                  <div className="d-grid">
                    <button onClick={handleCart} className='btn btn-success mt-3 rounded'>Check Out</button>
                  </div>
            </div>
          </div>
          
        </div>
            
          : <div style={{ height: '80vh' }} className='d-flex align-items-center justify-content-center flex-column'>
            <img height={'300'} width={'300'} src="https://media0.giphy.com/media/L2kr3y97uJauF6T6Lh/giphy.gif?cid=6c09b95277ae7ahzcmuoocy3yukihhgje80xcwszqkvm99yr&ep=v1_gifs_search&rid=giphy.gif&ct=s" alt="" />
            <h3>Your Cart is Empty!!!</h3>
            <Link to={'/'} style={{textDecoration:'none'}} className='mt-3 btn btn-success rounded '>Back to Home</Link>
          </div>
  //  https://cdn.dribbble.com/users/436607/screenshots/8516786/cart___wheel_centrado_800x600px_2.gif
      }
      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={1500}
      />
    </div>
  )
}

export default Cart
