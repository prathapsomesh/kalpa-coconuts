import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../logo.svg'

const WhoWeAre = () => {
    return (
        <>
        <div className="my-3 backgroundImage">
            <div className=" text-center ">
                <h2 className="openSansSemiBold pt-4 brownColor ">WHO WE ARE</h2>
                <div className="d-flex justify-content-center">
                    <div className="brownBorder"></div>
                </div>
            </div>
            <Container fluid className="pt-4">
                <Row >
                    <Col md={8}>
                        <h3 className="brownBackgroundColor p-2 whiteColor openSansSemiBold" style={{borderRadius:'3px'}}>SRI GURU SIDDARAMESHWARA TRADERS</h3>
                        <p className="p-2 openSansRegular">With the brand name of KALPA COCONUTS, SRI GURU SIDDARAMESHWARA TRADERS Established in the year 2017 at KB Cross, Tiptur, with aim to provide good quality of edible copra with the best price in the market. With our best inventory management system and quality industrial system and quality industrial professionalists we are now one of the leading exporters <Link to="/about">Know More...</Link></p>
                    </Col>
                    <Col md={4}  className="text-center d-flex justify-content-center">
                        <div className="align-self-center">
                            <div className="text-center ">
                                <Image src={logo} alt="Logo" width="100px;" />
                            </div>
                            <div className="text-center ">
                                <h4 className="logoFont brownColor " style={{color:'#603913',fontWeight:'bold'}}>Kalpa Coconuts</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default WhoWeAre
