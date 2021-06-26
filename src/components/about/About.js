import React, { useState } from 'react'
import { Carousel, Col, Container, Row, Table } from 'react-bootstrap'
import gal1 from '../../images/gal1.jpg'
import gal2 from '../../images/gal2.jpg'
import gal3 from '../../images/gal3.jpg'
import gal4 from '../../images/gal4.jpg'
import gal5 from '../../images/gal5.jpg'
import NavBarShared from '../shared/NavBarShared'
const About = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const galArr = [gal1,gal2,gal3,gal4,gal5];
    return (
        <>
        <NavBarShared />
        <Container fluid>
            <div className="my-4">
                <h3>ABOUT US</h3>
                <div className="brownBorder"></div>
            </div>
            <Row>
                <Col md={6}  className="my-3">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {galArr.map((value)=>(
                            <Carousel.Item>
                                <img
                                className="d-block w-100 text-center"
                                src={value}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Col>
                <Col md={6}  className="my-3">
                    <h4><strong>SRI GURU SIDDARAMESHWARA TRADERS</strong></h4>
                    <div className="brownBorder"></div>
                    <div className="mt-2">
                        <h6>With the brand name of <strong>KALPA COCONUTS</strong>, SRI GURU SIDDARAMESHWARA TRADERS Established in the year 2017 with aim to provide good quality of edible copra with the best price in the market.</h6>
                        <h6>With our best inventory management system and quality industrial professionalists we are now one of the leading exporters of wide variety of Dry coconuts or copra.</h6>
                        <h6>We supply wide variety of Copra products like Ball Copra, Half cut copra, Milling Copra etc to the best price in the market . </h6>
                        <h6>We will be always thankfull to our vendor's for being associated with us and providing quality products .</h6>
                    </div>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td><strong>Name of Proprietor</strong></td>
                            <td>G S VINAY</td>
                        </tr>
                        <tr>
                            <td><strong>Established</strong></td>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <td><strong>GST No</strong></td>
                            <td>29BBZPV1076N1ZD</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About
