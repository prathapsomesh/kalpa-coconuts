import React from 'react'
import {Button, Card, Col, Container,Row } from 'react-bootstrap'
import Lavish from '../../../images/lavish.jpg'
import Sumo from '../../../images/sumo.jpg'
import Glory from '../../../images/glory.jpg'
import Mill from '../../../images/mill.jpg'
import Ultachota from '../../../images/ultachota.jpg'
import Kagold from '../../../images/ka44gold.jpg'
import { Link } from 'react-router-dom'

const Products =  React.forwardRef((props,ref) => {
    return (
        <div className="my-3 backgroundImage" ref={ref}>
            <div className=" text-center ">
                <h2 className="openSansSemiBold pt-4 brownColor ">OUR PRODUCTS</h2>
                <div className="d-flex justify-content-center">
                    <div className="brownBorder"></div>
                </div>
            </div>
            <Container fluid className="mt-4">
                <Row >
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Kagold} className="p-3 "/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KA 44 GOLD</Card.Title>
                                <Card.Text className="openSansRegular">
                                Extreme quality of dry coconuts naturally cultured with the shelf life of 3 months .
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Lavish} className="p-3 "/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KALPA LAVISH</Card.Title>
                                <Card.Text className="openSansRegular">
                                    Superior quality of half cut organic and natural copra with the shelf life of 1 Month . 
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Sumo} className="p-3"/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KALPA SUMO</Card.Title>
                                <Card.Text className="openSansRegular">
                                    Round shaped with good size of naturally cultivated , soft textured Copra .
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Glory} className="p-3"/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KALPA GLORY</Card.Title>
                                <Card.Text className="openSansRegular">
                                Un-even sized, Free From Impurities copra with the shelf life of 2 months.
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <Row>
                <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Ultachota}  className="p-3"/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KALPA ULTACHOTA</Card.Title>
                                <Card.Text className="openSansRegular">
                                Round shaped, Good Taste,naturally cultivated copra with the shelf life of 4 months. 
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={Mill}  className="p-3"/>
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">KALPA MILL</Card.Title>
                                <Card.Text className="openSansRegular">
                                Un-even sized, No Gaurantee of purity copra and with the shelf life of 6 months .
                                </Card.Text>
                                <Link to={'/products'} variant="outline-dark"><Button variant="outline-dark">More info</Button></Link>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
})

export default Products
