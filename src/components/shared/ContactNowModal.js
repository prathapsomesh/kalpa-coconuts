import React,{useState} from 'react'
import { Alert, Button, Col, Container, Form, Row,Spinner,Modal } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import ErrorOrSuccessModal from '../shared/ErrorOrSuccessModal';

const ContactNowModal = ({show,handleClose}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    // const [regex, setRegex] = useState(/^[0-9\b]+$/);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('');

    const [errorModal, setErrorModal] = useState({toShow:false,message:''})

    const contactNow = (e)=>{
        e.preventDefault();
        switch(true){
            case !userName:
                setErrorModal({
                    toShow:true,
                    message:'Enter your Name Please'
                })
                break;

            case !email:
                setErrorModal({
                    toShow:true,
                    message:'Enter your Email Please'
                })
                break;
            
            case !phoneNumber:
                setErrorModal({
                    toShow:true,
                    message:'Enter your Phone Number'
                })
                break;

            case !country:
                setErrorModal({
                    toShow:true,
                    message:'Select your country'
                })
                break;

            case !message:
                setErrorModal({
                    toShow:true,
                    message:'Please enter any message'
                })
                break;
            default:
                setLoading(true);
                emailjs.sendForm('service_la7k8gm', 'template_4msmojn', e.target, 'user_aTZCG3aoZX7c4ELMHrsbJ')
                .then((result) => {
                    setLoading(false);
                    setError(null);
                    setSuccess('Request received successfully we will get back to you with in 24 hours, Thank you for your interest with us .')
                    e.target.reset();
                }, (error) => {
                    setLoading(false);
                    setSuccess(null)
                    setError('Something went wrong please try again later !!')
                });
            break;
        }

    } 
    const closeErrorModal = () =>{
        setErrorModal({
            toShow:false,
            message:''
        });
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Contact us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={contactNow}>
                            <Container fluid>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter Name" name="from_name" onChange={e=>setUserName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" name="user_email" onChange={e=>setEmail(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formPhoneNumber">
                                            <Form.Control type="number" placeholder="Enter Phone number" name="contact_number" length={10} onChange={e=>setPhoneNumber(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} >
                                        <Form.Group controlId="formGridState">
                                        <Form.Control as="select" defaultValue="Choose..." name="country" onChange={e=>setCountry(e.target.value)}>
                                            <option>Choose Country...</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="UAE">UAE</option>
                                            <option value="Others">Others</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Message" name="message" rows={2} onChange={e=>setMessage(e.target.value)}/>
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="outline-dark" type="submit" disabled={loading}>
                                    Submit
                                    {loading ?
                                        <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="ml-1 mr-1 "
                                        />:null}
                                </Button>
                                {error ? 
                                <Alert variant={'danger'} className="my-3">{error}</Alert>
                                :success ? 
                                <Alert variant={'success'} className="my-3">{success}</Alert>
                                :null}
                            </Container>
                            {errorModal.toShow ? 
                            <ErrorOrSuccessModal handleClose={closeErrorModal} open={errorModal.toShow} type={'error'} heading="Required" body={errorModal.message}/>:null}
                        </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ContactNowModal