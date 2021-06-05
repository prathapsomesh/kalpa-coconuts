import React,{useState} from 'react'
import { Col, Container, Row,Carousel } from 'react-bootstrap'

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="my-3 backgroundImage">
            <div className=" text-center ">
                <h2 className="openSansSemiBold pt-4 brownColor ">TESTIMONIALS</h2>
                <div className="d-flex justify-content-center">
                    <div className="brownBorder"></div>
                </div>
            </div>
            <Container fluid className="p-4 mt-3 brownBackgroundColor" >
                <Row>
                    <Col md={12}>
                        <Carousel indicators={false} interval={3000} className="text-center" activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <div className="mt-1">   
                                    <blockquote>
                                        <p className="whiteColor font-italic" >Lrenjdf kmkfi nfejn jnjfvnjfvn k niernoeor mcd</p>
                                    <footer className="whiteColor">-W.H. Auden</footer>
                                    </blockquote>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="mt-1">   
                                    <blockquote>
                                        <p className="whiteColor font-italic coroselp openSansSemiBold" >Some quick example text to build on the card title and make up</p>
                                        <footer className="whiteColor openSansRegular">-Slovakian Proverb</footer>
                                    </blockquote>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="mt-1">   
                                    <blockquote>
                                        <p className="whiteColor font-italic coroselp openSansSemiBold" >Some quick example text to build on the card title and make up</p>
                                    <footer className="whiteColor openSansRegular">-Slovakian Proverb</footer>
                                    </blockquote>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="mt-1">   
                                    <blockquote>
                                        <p className="whiteColor font-italic openSansSemiBold" >Some quick example text to build on the card title and make up</p>
                                    <footer className="whiteColor openSansRegular">-Lao Tzu</footer>
                                    </blockquote>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials
