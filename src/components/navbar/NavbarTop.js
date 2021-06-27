import React from 'react';
import logo from '../../logo.svg'
import whatsAppImage from '../../images/whatsapp.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import {Navbar,Image, Container, Row, Col,Nav, Button} from 'react-bootstrap'
import {faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {themeColor} from '../shared/Shared'
import ReactWhatsapp from 'react-whatsapp';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return(
        <>
            <div className="backGrey">
                <Container  fluid>
                    <Row >
                        <Col md={6}>
                            <div className="d-flex align-items-center">
                                <h6 className="p-2 mt-2 topText openSansSemiBold"><FontAwesomeIcon id="verified" icon={faEnvelope} color={themeColor.brown} size={'sm'}/>  kalpacoconuts@gmail.com   |  <FontAwesomeIcon id="verified" icon={faPhoneAlt} color={themeColor.brown} size={'sm'}/> +91 9449151151</h6>
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className="d-flex justify-content-xl-end align-items-center">
                                <Button variant="outline-dark" onClick={props.scrollToContact}  className="m-2 openSansSemiBold btnIcons">
                                <FontAwesomeIcon id="verified" icon={faPhoneAlt} size={'1x'} className="mr-1 "/>Message</Button>
                                <Button variant="outline-dark" onClick={props.scrollToContact}  className="m-2 openSansSemiBold btnIcons">
                                <FontAwesomeIcon id="verified" icon={faEnvelope}  size={'1x'} className="mr-1 "/>Mail</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar collapseOnSelect bg="white" expand="md" variant="light">
                <Navbar.Brand className="text-center" ><NavLink to={'/'} className="tdNone"><Image src={logo} alt="Logo" width="50px;" /><span className="logoFont brownColor m-2" style={{color:'#603913',fontWeight:'bold'}}>Kalpa Coconuts</span></NavLink> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav.Link className="black hoverred openSansSemiBold"><NavLink className="black hoverred" to={'/products'}>PRODUCTS</NavLink></Nav.Link>
                    <Nav.Link className="black hoverred openSansSemiBold"><NavLink className="black hoverred" to={'/about'}>ABOUT</NavLink></Nav.Link>
                    <Nav.Link className="black hoverred openSansSemiBold" onClick={props.scrollToContact}>CONTACT US</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className="whatsApp m-3">
            <ReactWhatsapp className="whatsAppReactBtn" number="+91 9449151151" message="Hello, I am intrested in your products and need to enquire now ."><Image src={whatsAppImage} width="50px;"/> </ReactWhatsapp>

            </div>
        </>
    )
}
export default NavBar;
