import React from 'react'
import {Row, Col} from 'react-bootstrap';

function CartItem(props) {

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join('.').split('').reverse().join('');
        return converted
    }

    return (
        <Row className='d-flex justify-content-center my-5 pb-3 cst-cart-row'>
            <Col className='d-flex justify-content-center' xs={4} md={4}>
                <div className='cst-cart-image-frame'>
                    <img 
                        className='cst-cart-image'
                        src={props.image}
                        alt="name"
                        />
                </div>
            </Col>
            <Col className='d-flex flex-column justify-content-around' xs={6} md={7}>
                <div>
                    <h4 className='text-capitalize'>{props.name}</h4>
                    <p className='text-secondary'>{props.weight}G</p>
                </div>
                <h4 className='fw-light'>IDR {convertIDR(props.price)}</h4>
            </Col>
            <Col className='pe-3 d-flex flex-column justify-content-center' xs={2} md={1}>
                <div className='cst-cart-delete-btn' onClick={()=>{props.deleteItem(props.index)}} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
            </Col>
        </Row>
    )
}

export default CartItem
