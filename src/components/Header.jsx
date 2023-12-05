import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',fontSize:'30px'}}>Cart Connect</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none',fontWeight:'bold'}}><i className='fa-solid fa-heart text-danger me-2'></i>Wishlist</Link> </Nav.Link>
            <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',fontWeight:'bold'}}><i className=''>Cart</i></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
