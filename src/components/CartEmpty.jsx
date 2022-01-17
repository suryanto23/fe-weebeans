import React from 'react'
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function CartEmpty() {
    return (
        <Container className='text-center d-flex flex-column justify-content-center align-items-center vh-100'>
            <h3 className='text-secondary'>It's so quiet here...</h3>
            <h1>Oh, Your <span className='cst-highlight'>Cart</span> is Empty!</h1>
            <p>But no worries, let's start shopping by clicking this button</p>
            <Link className='text-decoration-none' to="/product">
                <Button className='cst-product-btn px-5'>PRODUCT</Button>
            </Link>
        </Container>
    )
}

export default CartEmpty
