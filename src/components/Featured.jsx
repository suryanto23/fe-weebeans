import React from 'react'
import Slider from "react-slick";
import {Row} from 'react-bootstrap';
import FeaturedItem from './FeaturedItem'
import data from '../data/productItems.json'

function Featured() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };

    const display = data.filter((item, index) => index < 6) || []
    
    return (
        <div className='py-5'>
            <div className='text-center mb-5 cst-featured-title'>
                <h1 className='fw-bold text-uppercase'>featured items</h1>
            </div>
            <Row className='mx-0 flex justify-content-center'>  
                <Slider className='' {...settings}>
                    {display.map((item, index)=>{
                        return <FeaturedItem 
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.name}
                        />
                    })}
                </Slider>          
            </Row>
        </div>
    )
}

export default Featured
