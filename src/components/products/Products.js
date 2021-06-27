import React, { useState} from 'react'
import { Button, Card, Carousel, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Goldprd from '../../images/goldprd.jpg'
import LavishPrd from '../../images/lavishprd.jpg'
import SumoPrd from '../../images/sumoprd.jpg'
import GloryPrd from '../../images/gloryprd.jpg'
import UltaChotaPrd from '../../images/ultachotaprd.jpg'
import NavBarShared from '../shared/NavBarShared'

import Lavish from '../../images/lavish.jpg'
import Sumo from '../../images/sumo.jpg'
import Glory from '../../images/glory.jpg'
import Mill from '../../images/mill.jpg'
import Ultachota from '../../images/ultachota.jpg'
import Kagold from '../../images/ka44gold.jpg'

const Products = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
        <NavBarShared />
        <Container fluid>
            <div className="my-4">
                <h3>PRODUCTS</h3>
                <div className="brownBorder"></div>
            </div>
            <div>
                <h1 style={{fontSize:'24px',lineHeight:'1.5em'}}>Every product from Kalpa coconuts are cultivated naturally and organic, Copra products are used in medicines, pooja, oil extraction, cooking etc, In kalpa coconuts we ensure that every product is Free From Impurities, Freshness, Good Taste and Healthy .</h1>
            </div>
            <Card className="my-4">
                <Card.Header><strong>KA 44 GOLD</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} className="d-flex align-items-center justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={Goldprd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Kagold}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KA 44 GOLD</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>5 to 6 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Round</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>
                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Header><strong>KALPA LAVISH</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4}  className="d-flex align-items-center justify-content-center">
                        <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={LavishPrd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Lavish}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KALPA LAVISH</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>1 Month</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>5 to 6 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Un-Even</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>

                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Header><strong>KALPA SUMO</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} className="d-flex align-items-center justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={SumoPrd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Sumo}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KALPA SUMO</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>3 to 4 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Round</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>

                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Header><strong>KALPA GLORY</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4}  className="d-flex align-items-center justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={GloryPrd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Glory}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KALPA GLORY</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>2 Months</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>6 to 7 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Un-Even</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>

                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Header><strong>KALPA ULTACHOTA</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4}  className="d-flex align-items-center justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={UltaChotaPrd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Ultachota}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KALPA ULTACHOTA</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>4 Months</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>8 to 9 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Round</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>

                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
            <Card className="my-4">
                <Card.Header><strong>KALPA MILL</strong></Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4}  className="d-flex align-items-center justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} >
                                <Carousel.Item>
                                    <img
                                        className="w-100 mx-auto d-block rounded"
                                        src={SumoPrd}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                        className="w-100  mx-auto d-block rounded"
                                        src={Mill}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Card.Title>Specifications</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td><strong>Brand Name :</strong>	KALPA MILL</td>                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Shelf Life : </strong>6 Months</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Texture : </strong>Soft</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight : </strong>10 to 11 pcs per kg</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shape : </strong>Un-Even</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to={'/contactus'}><Button variant="outline-dark">Enquire now</Button></Link>

                        </Col>
                      
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}

export default Products
