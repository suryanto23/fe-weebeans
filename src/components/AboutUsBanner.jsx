import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Clip from '../assets/logo/clipart.png'
import Logo from '../assets/logo/weebeans.png'

function AboutUsBanner() {
    return (
        <div className='cst-aboutus-banner d-flex flex-md-row'>
            <img className='cst-aboutus-clip' src={Clip} sec="clip" />
            <div className='d-flex flex-column-reverse  flex-md-row justify-content-around'>
                <div className='d-flex flex-column justify-content-center'>
                    <Row className='text-center text-md-start d-flex flex-column mx-2 mb-5'>
                        <Col>
                            <h1 className='text-white'>OUR DEDICATION</h1>
                        </Col>
                        <Col>
                            <p className='my-5 text-white'>Established since 2022, WeeBeans aims to promote best quality coffee beans from world-wide origins. We are hightly enthusiastic to work with passion for giving the best customer-oriented service. We are also honored and humbled to be the favorite choice for home brewers and various coffee shop all over the country.</p>
                        </Col>
                        <Col>
                        <Link to="/about" className='text-decoration-none'>
                            <Button className='px-5 cst-aboutus-btn' >
                                    READ MORE
                            </Button>
                        </Link>
                        </Col>
                    </Row>
                </div>
                <img className='cst-aboutus-logo' src={Logo} alt="weebeans" />
            </div>
        </div>
    )
}

export default AboutUsBanner
