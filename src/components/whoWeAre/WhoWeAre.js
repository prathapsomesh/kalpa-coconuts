import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../logo.svg'

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
                        <h3 className="brownBackgroundColor p-2 whiteColor openSansSemiBold" style={{borderRadius:'3px'}}>Lorem Ipsum dcdc</h3>
                        <p className="p-2 openSansRegular">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
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
