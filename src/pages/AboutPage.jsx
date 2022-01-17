import React from 'react'
import {Container} from 'react-bootstrap';
import Logo from '../assets/logo/weebeans-fill.png';

function AboutPage() {
    return (
        <Container className='text-center d-flex flex-column align-items-center'>
            <div className='cst-about-image-frame'>
                <img
                    className='cst-about-image'
                    src={Logo}
                    alt="logo"
                />
            </div>
            <h1 className='text-uppercase my-5'>we work with <span className='cst-highlight'>passion</span></h1>
            <p className='text-start  px-5'>Established since 2022, WeeBeans aims to promote best quality coffee beans from world-wide origins. We are hightly enthusiastic to work with passion for giving the best customer-oriented service. We are also honored and humbled to be the favorite choice for home brewers and various coffee shop all over the country.</p>
        </Container>
    )
}

export default AboutPage
