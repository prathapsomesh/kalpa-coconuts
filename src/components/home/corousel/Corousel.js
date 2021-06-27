import React, { useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import one from '../../../images/one.jpg'
import two from '../../../images/two.png'

function Corousel({scrollToContact}) { 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
                    <Container fluid >
                        <Row>
                            <Col md={6} >
                                <Carousel activeIndex={index} onSelect={handleSelect} className="d-flex align-items-center">
                                    <Carousel.Item>
                                        <img
                                            className="bannerImageWidth mx-auto d-block p-2"
                                            src={one}
                                            alt="First slide"
                                            style={{width:'60%'}}
                                            />
                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <img
                                            className="bannerImageWidth mx-auto d-block w-50 p-2"
                                            src={two}
                                            alt="Second slide"
                                            />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col md={6} className="text-center">
                                <h1 className="brownColor mt-2 openSansSemiBold">Dry Coconuts</h1>
                                <h5 className="pt-3 openSansRegular ">We are one of the leading exporters of dry coconuts</h5>
                                <h6 className="pt-2 openSansRegular content">We are offering fine quality Coconut Copra. We process these coconuts under hygienic conditions using advanced processing methods. With a group of gifted specialists, we are giving a decent quality collection of Natural Copra, The quality group utilizes the best testing ways to deal with check the boundaries of the item's quality. We have a pricing solutions that deals with key requirement challenges . We know It is a crucial time to ensure our pricing captures the value being delivered contact us today to discuss solutions . </h6>
                                <Button variant="outline-dark" onClick={scrollToContact} className="m-1 openSansSemiBold">Get a Quote Now</Button>
                            </Col>
                        </Row>
                    </Container>
        </>
    )
}
export default Corousel;