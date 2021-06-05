import React, { useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import one from '../../images/one.jpg'
// import two from '../../images/two.jpg'
// import three from '../../images/three.jpg'

function Corousel({scrollToContact}) { 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Container fluid >
                        <Row>
                            <Col md={6} className="d-flex justify-content-center">
                                <img
                                className="bannerImageWidth"
                                src={one}
                                alt="First slide"
                                />
                            </Col>
                            <Col md={6} className="text-center">
                                <h1 className="brownColor mt-2 openSansSemiBold">Dry Coconuts</h1>
                                <h5 className="pt-3 openSansRegular ">We are one of the leading exporters of dry coconuts</h5>
                                <h6 className="pt-2 openSansRegular content">We are offering fine quality Coconut Copra. We process these coconuts under hygienic conditions using advanced processing methods. With a group of gifted specialists, we are giving a decent quality collection of Natural Copra, The quality group utilizes the best testing ways to deal with check the boundaries of the item's quality.</h6>
                                <Button variant="outline-dark" onClick={scrollToContact} className="m-1 openSansSemiBold">Get a Quote Now</Button>
                            </Col>
                        </Row>
                    </Container>

                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={two}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="openSansSemiBold">Second slide label</h3>
                    <p className="openSansSemiBold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={three}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="openSansSemiBold">Third slide label</h3>
                    <p className="openSansSemiBold">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    )
}
export default Corousel;