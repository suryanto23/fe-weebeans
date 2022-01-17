import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function PageNotFound() {
    return (
        <div className='vh-100 text-center d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-1'>4<span className='cst-highlight'>O</span>4</h1>
            <h2>Page Not Found</h2>
            <Link to="/" className='text-decoration-none'>
                <Button className='cst-product-btn px-5 py-1'>BACK TO HOME</Button>
            </Link>

        </div>
    )
}

export default PageNotFound
