import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faAtom, faBookOpen } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
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
                                        <h1 className="headings">Communication and Career Exploration</h1>
                                        <h4>Jump-start your career and get over your fear</h4>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <div className="main-page">
                        <Container>
                            <Row>
                                <Col md="12" lg="4">
                                    <h2 className="text-center">
                                        <FontAwesomeIcon icon={faFireAlt} />
                                    </h2>
                                    <h5 className="text-center">CCE Internship: Soaring Eagle</h5>
                                    <p className="light">
                                        If you are interested in internships, checkout our internship page where
                                        you can find out all about it.
                                    </p>
                                </Col>
                                {/* <Col lg="2"></Col> */}
                                <Col md="12" lg="4">
                                    <h2 className="text-center">
                                        <FontAwesomeIcon icon={faAtom} />
                                    </h2>
                                    <h5 className="text-center">College Education Exploration Journey</h5>
                                    <p className="light">
                                        Webinar for families interested in learning about why and how to help children to prepare for college education and pursue career. We trust the diverse
                                        presentation we have prepared will help identify a path that's best for your precious child.
                                        </p><p>6/26 (Sat.) 11-12:00 PM PT
                                    </p>
                                    <div className="text-center">
                                        <Button color="info" href="/webinar">Learn More</Button>{' '}
                                        <Button color="info" href="https://bit.ly/ifycce06262021webinar" target="_blank" rel="noreferrer">Register</Button>
                                    </div>
                                </Col>
                                <Col md="12" lg="4">
                                    <h2 className="text-center">
                                        <FontAwesomeIcon icon={faBookOpen} />
                                    </h2>
                                    <h5 className="text-center">CCE Chronicles: The Biggest Happiness</h5>
                                    <p className="light">
                                        In our ninth issue of the CCE Chronicles, we interviewed Woojin Kim who is an entrepreneur, specializing in eCommerce business. He is the ex-founder of Caseology, a
                                        CPG brand bootstrapped from Zero to $144M in total revenue. He has served more than 6 million
                                        customers, and was the top 10 Global Amazon Seller in 2017. Mr Kim believes that we are more than enough to make a difference in
                                        this world, and we should always give back by serving others.
                                    </p>
                                </Col>
                                {/* <Col lg="2"></Col> */}
                            </Row>
                        </Container>
                    </div>
                    {/* <Button color="link"><Link to="/customers">Manage Customer List</Link></Button> */}
                    <div className="main-page">
                        <Container>
                            <div className="row">
                                <div className="col sm12">
                                    <h2><strong>About us</strong></h2>
                                    <p>We are a 501(c)(3) non-profit organization providing a complete support system to enable one to grow
                                    healthily through
                                different stages of career development.</p>

                                    <p>For college/graduate students and young professionals, we offer a platform where they can share
                                    experiences, grow their
                                    network and receive mentorship. For high school students, they will learn the 12 life changing capabilities
                                    through CCE
                                classes.</p>
                                </div>
                            </div>
                        </Container>
                    </div>

                    <div className="main-page">
                        <Container>
                            <h1><strong>CCE Class:</strong></h1>
                            <p><strong>About CCE Class</strong>: Through these classes, high school students will
                        learn the 12 life changing capabilities, how to receive and provide constructive feedback, various academic
                        disciplines they can pursue in college and how to explore their careers.</p>
                            <p>Still don't know what CCE class is? Click the button below to learn all about CCE
                        class in less than 10 minutes!</p>
                            <p><a className="btn btn-info btn-lg"
                                href="https://www.youtube.com/watch?v=yG-WoryjAzk&amp;list=PLQTND4OzgUVTQmR_XCSEREjy9fy4Lpxo-" target="_blank"
                                rel="noopener noreferrer">Learn More </a>  </p>
                            <p className="card-text style="><strong>Coach:</strong> Mr. Shengming Shan, who has more
                        than 25 years of management experience in world renowned semiconductor companies. He is also a passionate leader
                        who wants to challenge and release the full potential of the next generation. Before founding the CCE class for
                        high school students in 2016, he has been mentoring career professionals for many years.</p>
                            <p><a className="btn btn-info btn-lg" href="https://bit.ly/cceifyreg" target="_blank" rel="noopener noreferrer">CCE Class Registration</a>  </p>
                            <h1><strong>CCE Community:</strong></h1>
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <p><strong>About CCE PRO Platform</strong>: A community built for college/graduate students and young
                                professionals, where everyone can get education, networking, mentorship, and grow healthily through giving and receiving.
                            </p>
                                    <p><strong>For Young Professionals</strong>: Did you know that a mentor can help set your career trajectory?
                                Do you know how to find the right one(s)? Did you know that you can grow by being mentors to college and high
                                school students? Do you know how valuable your experiences are for them?</p>
                                    <p><strong>For College Students</strong>: Did you know that the wisest person of all learns from other‘s successes?
                                Do you know how much you can grow by learning from the young professionals, and at the same time helping out high school students?</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body">
                                        <p><em>Made up your minds?</em> <a className="btn btn-info btn-lg"
                                            href="https://www.linkedin.com/groups/13879424/" target="_blank" rel="noopener noreferrer">Join as a Member</a></p>
                                        <p><em>Still undecided?</em> Check out our <a
                                            href="https://www.youtube.com/channel/UCRI6gez9dVg1ohbKKMzoEAQ?sub_confirmation=1" target="_blank"
                                            rel="noopener noreferrer">Youtube channel</a>, Follow us on <a
                                                href="https://www.linkedin.com/company/i-fly-young-cce/" target="_blank"
                                                rel="noopener noreferrer">LinkedIn</a>, Like us on <a href="https://www.facebook.com/IFLYYOUNGCCE"
                                                    target="_blank" rel="noopener noreferrer">Facebook</a>, and <a
                                                        href="mailto:ccepro+subscribe@iflyyoung.com" target="_blank" rel="noopener noreferrer">subscribe</a> to our email list. </p>
                                        <p>If you would like to be part of the process in producing webinars or helping to grow CCE, fill out the form linked below!</p>
                                        <p><a className="btn btn-info btn-lg" href="https://bit.ly/ifyccesupport" target="_blank"
                                            rel="noopener noreferrer">Ready to Contribute</a></p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;