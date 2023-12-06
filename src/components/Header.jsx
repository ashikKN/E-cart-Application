import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
   const wishlist = useSelector((state)=>state.wishlistReducer)
   
   return (
    <>
      <Navbar style={{position:'fixed',width:'100%',zIndex:'1'}} expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', fontSize: '30px' }}><i className="fa-solid fa-truck-fast me-2" />Shopify</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn btn-primary me-2 '>
                <Link to={'/wishlist'} className='d-flex justify-content-center align-items-center' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                  <i className='fa-solid fa-heart text-danger me-2'></i> Wishlist
                  <Badge className='ms-2' bg="light">{wishlist.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='btn btn-primary'>
                <Link to={'/cart'} className='d-flex justify-content-center align-items-center' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                  <i className='fa-solid fa-cart-plus me-2'></i>Cart
                  <Badge className='ms-2' bg="light">10</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
