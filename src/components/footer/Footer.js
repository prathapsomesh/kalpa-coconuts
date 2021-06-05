import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <Container fluid className="backgroundImage">
                <Row>
                    <Col md={12} className="text-center">
                        <h4>
                            India
                        </h4>
                        <h5 className="brownColor p-2">
                        APMC MARKET YARD K.B.CROSS, TIPTUR 572114.
                        </h5>
                    </Col>
                    
                </Row>
                <Row className="mb-2">
                    <Col md={12} className="text-center">
                        <a href="https://www.facebook.com/kalpacoconuts/" className="hoverred darkGrey" target="blank"><FontAwesomeIcon id="verified" icon={faFacebook} size={'2x'} className="m-2"/></a>
                        <a href="https://www.instagram.com/kalpacoconuts/" className="hoverred darkGrey" target="blank"><FontAwesomeIcon id="verified" icon={faInstagram} size={'2x'} className="m-2"/></a>
                        <a href="https://www.facebook.com/kalpacoconuts/" className="hoverred darkGrey" target="blank"><FontAwesomeIcon id="verified" icon={faLinkedinIn} size={'2x'} className="m-2" /></a>
                    </Col>
                </Row>
                <Row className="backGrey p-2">
                    <Col md={12} className="text-center mt-1">
                        <h6>
                            Copyright @2021 Kalpa Coconuts
                        </h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
