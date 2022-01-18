import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'
import Emblem from '../assets/logo/weebeans-title.png'

function Navigation() {

    const cart = localStorage.getItem("weebeans-cart")
    const counter = cart ? JSON.parse(cart).length : 0

    return (
      <Navbar variant='dark' className='cst-navigation' expand="lg">
        <Container>
          <Navbar.Brand className='cst-emblem-frame me-5'>
            <Link to="/">
              <img src={Emblem} className='cst-emblem' alt="emblem" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
          <Navbar.Collapse id="basic-navbar-nav" className='pt-3 cst-navigation-collapse'>
            <Nav className="me-auto">
                  <Nav.Item className='py-2'>
                    <Link to="/" className='text-decoration-none cst-link'>
                        home
                    </Link>
                  </Nav.Item>
                  <Nav.Item className='py-2'>
                    <Link to="/product" className='text-decoration-none cst-link'>
                        product
                    </Link>
                  </Nav.Item>
                  <Nav.Item className='py-2'>
                    <Link to="/about" className='text-decoration-none cst-link'>
                        about
                    </Link>
                  </Nav.Item>
                  <Nav.Item className='py-2'>
                    <Link to="/cart" className='position-relative text-decoration-none cst-link'>
                      cart
                      {counter > 0 && 
                        <span className='rounded-circle cst-cart-counter fw-bold'>{counter}</span>
                      }
                    </Link>
                  </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
