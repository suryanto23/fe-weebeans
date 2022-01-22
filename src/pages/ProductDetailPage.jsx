import React from 'react'
import {useParams , Navigate} from 'react-router-dom'
import data from '../data/productItems.json'
import {Container, Row, Col, Button} from 'react-bootstrap'
import AccordionComponent from '../components/AccordionComponent'

function ProductDetailPage(props) {

    const location = useParams()
    const display = data.find((item)=>item.id===location.id)

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join('.').split('').reverse().join('');
        return converted
    }
    function addToCart(){
        let oldCart = localStorage.getItem("weebeans-cart")
        if (oldCart){
            let cartData = JSON.parse(oldCart)
            cartData.push(display)
            const cartJSON = JSON.stringify(cartData)
            localStorage.setItem("weebeans-cart" , cartJSON)
            props.setCount(props.count+1)
        } else {  
            let cart = []
            cart.push(display)
            const cartJSON = JSON.stringify(cart)
            localStorage.setItem("weebeans-cart" , cartJSON)
            props.setCount(props.count+1)
        }
    }

    if(!display) return <Navigate to="/404"/>
  
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col className=' d-flex justify-content-center' xs={12} md={6}>
                        <div className='cst-product-detail-image-frame'>
                            <img
                                className='w-100'
                                src={display.image}
                                alt={display.name}
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className='text-capitalize text-center text-md-start my-4 my-md-0'>{display.name}</h1>
                        <h4 className='cst-product-detail-price fw-light my-3 text-center text-md-start'>IDR {convertIDR(display.price)}</h4>
                        <p className='fw-fw-normal text-secondary my-3 px-2 px-md-0'>{display.text}</p>
                        <AccordionComponent
                             origin={display.origin}
                             roast={display.roast}
                             altitude={display.altitude}
                             process={display.process}
                             variant={display.variant}
                             weight={display.weight}
                        />
                        <div className='text-center text-md-start'>
                            <Button className='cst-product-btn px-5' onClick={()=>addToCart()} >ADD TO CART</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetailPage
