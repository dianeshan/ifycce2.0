import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button } from 'react-bootstrap';

//webinar flyers
import medical from '../resources/images/webinars/07182020.jpg';
import investmentbanking from '../resources/images/webinars/08012020.jpg';
import financetech from '../resources/images/webinars/08222020.jpg';
import architecture from '../resources/images/webinars/09052020.jpg';
import venturecapital from '../resources/images/webinars/09192020.png';
import guideforlife from '../resources/images/webinars/09272020.jpg';
import preparingforfuture from '../resources/images/webinars/10172020.jpg';
import passioninhighschool from '../resources/images/webinars/10312020.jpg';
import tradingswe from '../resources/images/webinars/12052020.jpg';
import soaringeagle from '../resources/images/webinars/12192020.jpg';
import techstartups from '../resources/images/webinars/01162021.png';
import careerandyou from '../resources/images/webinars/01302021.png';

class PastWebinar extends Component {
    render() {
        return (
            <div className="all-content">
                <div className="content-wrap">
                    <AppNavbar />
                    <div className="blue-container">
                        <Container>
                            <div className="white-text">
                                <Row>
                                    <Col md="4">
                                        <img className="headings" src={logo} alt="cce logo" />
                                    </Col>
                                    <Col className="headings3" md="8">
                                        <h1 className="headings2">Past Webinars</h1>
                                        <h4>You don't have to go far, if you missed a webinar</h4>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <div className="main-page">
                        <Container>
                            <Row>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={medical} />
                                        <Card.Body>
                                            <Card.Title>Medical Career</Card.Title>
                                            <Card.Text>
                                                Judy Shan talks about her life and path towards medical school.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={investmentbanking} />
                                        <Card.Body>
                                            <Card.Title>Investment Banking Career</Card.Title>
                                            <Card.Text>
                                                Gloria Su talks about her path to becoming an investment banker.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={financetech} />
                                        <Card.Body>
                                            <Card.Title>Finance-Technology Career</Card.Title>
                                            <Card.Text>
                                                David Liu speaks about his life and having a finance-technology career.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={architecture} />
                                        <Card.Body>
                                            <Card.Title>Architectural Career</Card.Title>
                                            <Card.Text>
                                                Jocelyn Chiou talks about her life and how she went about exploring architecture.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={venturecapital} />
                                        <Card.Body>
                                            <Card.Title>Venture Capital Careers</Card.Title>
                                            <Card.Text>
                                                Timothy Chen speaks about software engineering and the venture capital career.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={guideforlife} />
                                        <Card.Body>
                                            <Card.Title>Guide for Life</Card.Title>
                                            <Card.Text>
                                                Panel of CCE students talk about the 12 life-changing capabilities.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={preparingforfuture} />
                                        <Card.Body>
                                            <Card.Title>Preparing for Your Future</Card.Title>
                                            <Card.Text>
                                                Daniel Chen talks about how he prepared for his future and how you can too.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={passioninhighschool} />
                                        <Card.Body>
                                            <Card.Title>Passion in High School</Card.Title>
                                            <Card.Text>
                                                Rachel Chen shares how she found her passion in high school.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={tradingswe} />
                                        <Card.Body>
                                            <Card.Title>Trading Industry as SWE</Card.Title>
                                            <Card.Text>
                                                Howard Shan shares his experiences and journey into the trading industry.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={soaringeagle} />
                                        <Card.Body>
                                            <Card.Title>Soaring Eagle Internship</Card.Title>
                                            <Card.Text>
                                                Panelist of mentors @ CCE talk about internship opportunities.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={techstartups} />
                                        <Card.Body>
                                            <Card.Title>Journey Through Tech</Card.Title>
                                            <Card.Text>
                                                Bindu Therthala talks about her journey through tech startups.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="card-spacing">
                                    <Card className="card-spacing">
                                        <Card.Img variant="top" src={careerandyou} />
                                        <Card.Body>
                                            <Card.Title>Your Career and You</Card.Title>
                                            <Card.Text>
                                                David Su talks about his experience in the wireless semiconductor industry.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PastWebinar;