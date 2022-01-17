import React from 'react'
import {Container} from 'react-bootstrap';
import AboutUsBanner from '../components/AboutUsBanner';
import Featured from '../components/Featured';
import MainCarousel from '../components/MainCarousel'


function HomePage() {
    return (
        <Container fluid className='p-0'>
            <MainCarousel/>
            <Featured/>      
            <AboutUsBanner/>        
        </Container>

    )
}

export default HomePage
