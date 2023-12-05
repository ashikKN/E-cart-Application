import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
       <div className='d-flex flex-column justify-content-center align-items-center ' style={{width:'100%',height:'300px'}}>

<div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">

  <div style={{width:"400px"}} className="website">
      <h4><i className="fa-solid fa-truck-fast me-2"></i>Cart Connect</h4>
      <h6>Designed and build with all love in the world by the Luminar team with the help pf our contributors</h6>
      <h6>Code licensed Luminar,docs CC BY 3.0.</h6>
      <p>Currently v1.0.0</p>
  </div>

  <div className="links d-flex flex-column">
      <h4>Links</h4>
      <Link to={'/'} style={{textDecoration:'none',color:'grey'}}>Home</Link>
      <Link to={'/cart'}  style={{textDecoration:'none',color:'grey'}}>Cart</Link>
      <Link to={'/wishlist'}  style={{textDecoration:'none',color:'grey'}}>Wish List</Link>

  </div>

  <div className="guides d-flex flex-column" >
      <h4>Guides</h4>
      <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'grey'}}>React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'}  style={{textDecoration:'none',color:'grey'}}>React Bootstrap</Link>
      <Link to={'https://www.npmjs.com/package/react-router-dom'}  style={{textDecoration:'none',color:'grey'}}>Routing</Link>

  </div>
  <div className="guides d-flex flex-column" >

      <h4>Contact Us</h4>
      <div className="d-flex mt-1">
        <input className='form-control' placeholder='Enter your email' />
        <button className="btn btn-primary ms-3 w-50">Subscribe</button>
      </div>

      <div className="icons mt-5 d-flex justify-content-evenly fs-3">
        <Link to={'https://in.linkedin.com/'}><i class="fa-brands fa-linkedin"></i></Link>
        <Link to={'https://twitter.com'}><i class="fa-brands fa-x-twitter"></i></Link>
        <Link to={'https://www.facebook.com/'}><i class="fa-brands fa-facebook-f"></i></Link>
        <Link to={'https://www.instagram.com/'}><i class="fa-brands fa-instagram"></i></Link>
      
      </div>

  </div>

 

</div>

<p>Copyright © 2023 Cart Connect. Built with React.</p>
</div>
    </>
  )
}

export default Footer
