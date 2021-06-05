import React from 'react'
import {Card, Col, Container,Row } from 'react-bootstrap'
import prdImage from '../../images/download.svg'
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
                            <Card.Img variant="top" src={prdImage} />
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">Card Title</Card.Title>
                                <Card.Text className="openSansRegular">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={prdImage} />
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">Card Title</Card.Title>
                                <Card.Text className="openSansRegular">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={prdImage} />
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">Card Title</Card.Title>
                                <Card.Text className="openSansRegular">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-2">
                        <Card >
                            <Card.Img variant="top" src={prdImage} />
                            <Card.Body>
                                <Card.Title className="openSansSemiBold">Card Title</Card.Title>
                                <Card.Text className="openSansRegular">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
})

export default Products
