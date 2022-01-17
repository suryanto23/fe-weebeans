import React from 'react'
import {Carousel} from 'react-bootstrap'
import data from '../data/carouselItems.json'

function MainCarousel() {
    return (
        <Carousel controls={false} pause={false}>
            {data.map((item, index) => {
                return  <Carousel.Item key={index} >
                    <div className='cst-carousel-item-frame'>
                        <img
                            className="d-block cst-carousel-item"
                            src={item.image}
                            alt={item.alt}
                        />
                    </div>
                </Carousel.Item>
            })}
      </Carousel>
    )
}

export default MainCarousel
