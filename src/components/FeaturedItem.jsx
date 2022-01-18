import React from 'react'
import {Link} from 'react-router-dom'

function FeaturedItem(props) {
    return (       
        <Link to={'/product/'+props.id} className='text-decoration-none text-dark'>
        <div className='cst-featured-item'>
            <div className='cst-featured-image-frame'>
                <img className='cst-featured-image' src={props.image} alt="featured"/>
            </div>
            <h6 className='text-capitalize text-center pt-3'>
                {props.title}
            </h6>
        </div>
        </Link> 
    )
}

export default FeaturedItem
