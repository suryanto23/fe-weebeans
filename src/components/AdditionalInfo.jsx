import React from 'react'
import {Row, Col} from 'react-bootstrap'

function AdditionalInfo(props) {
    return (
        <Row className='cst-product-detail-additional mx-0 my-4'>
            <Col>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Origin</span>
                    <span className='fw-light text-capitalize'>{props.origin}</span>
                </div>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Roast Level</span>
                    <span className='fw-light text-capitalize'>{props.roast}</span>
                </div>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Altitude</span>
                    <span className='fw-light text-capitalize'>{props.altitude} Mdpi</span>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Process</span>
                    <span className='fw-light text-capitalize'>{props.process}</span>
                </div>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Variant</span>
                    <span className='fw-light text-capitalize'>{props.variant}</span>
                </div>
                <div className='d-flex flex-column my-3'>
                    <span className='fw-bold'>Weight</span>
                    <span className='fw-light text-capitalize'>{props.weight}G</span>
                </div>
            </Col>
        </Row>
    )
}

export default AdditionalInfo
