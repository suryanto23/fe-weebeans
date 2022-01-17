import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ProductItem from '../components/ProductItem';
import data from '../data/productItems.json'

function ProductPage() {
    return (
        <Container fluid className='p-0'>
            <Row className='d-flex justify-content-center mx-2 my-5'>
                <Col className='text-center text-md-start' md={9}>
                    <h1 className='fw-light text-secondary px-3'>Coffee</h1>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center my-2 mb-5'> 
                 <Row className='d-flex justify-content-center w-75 cst-product-second-row'>
                     {data.map((item, index) => {
                         return  <ProductItem
                            key={index}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                         />
                    })}
                  </Row>
            </Row>
        </Container>
    )
}

export default ProductPage
