import React from 'react'
import {Card, Button, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function ProductItem(props) {

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted = reverse.match(/\d{1,3}/g);
        converted = converted.join('.').split('').reverse().join('');
        return converted
    }

    return (
        <Col className='my-4' xs={6} md={3}>
            <Link to={props.id} className='cst-product-item d-flex flex-column align-items-center'>
            <div className='cst-product-image-frame'>
                <img className='cst-product-image' src={props.image}   />
            </div>
            <Col xs={12}>
                <h5 className='text-center text-capitalize fw-bold my-3'>
                    {props.name}
                </h5>
            <p className='text-center fw-light my-2'>IDR {convertIDR(props.price)}</p>
            </Col>
            <Col className='text-center bg-primary' xs={10}>
                <Button className='w-100 py-1 cst-product-btn'>Details</Button>
            </Col>
            </Link>
        </Col>
    )
}

export default ProductItem
