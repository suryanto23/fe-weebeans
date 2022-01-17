import React from 'react'
import {Link} from 'react-router-dom'

function FeaturedItem({id, image, title}) {
    return (       
        <Link to={'/product/'+id} className='text-decoration-none text-dark'>
        <div className='cst-featured-item'>
            <div className='cst-featured-image-frame bg-danger'>
                <img className='cst-featured-image' src={image} />
            </div>
            <h6 className='text-capitalize text-center pt-3'>
                {title}
            </h6>
        </div>
        </Link> 
    )
}

export default FeaturedItem
