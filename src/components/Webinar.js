import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col, Button } from 'reactstrap';

import internlaunch from '../resources/images/webinars/11202021.png';
import title from '../resources/images/webinarpage/Title.png';
import programs from '../resources/images/webinarpage/Programs.png';
import plane from '../resources/images/webinarpage/airplane_Icon.png';
import interntracks from '../resources/images/webinarpage/Tracks_title.png';
import cloud from '../resources/images/application/Cloud.png';
import web from '../resources/images/application/Web.png';
import UX from '../resources/images/application/UX.png';
import bios from '../resources/images/webinarpage/SpeakerBio_title_Blue.png';

class Webinar extends Component {
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
                                        <h1 className="headings2">Webinar Series</h1>
                                        <h4>Feeling lost? Gain some knowledge with no cost!</h4>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <div className="larger-margin"></div>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <img className="sei-title" src={title} alt="title" />
                                <div className="button-margin text-center">
                                    <Button size="lg" className="btn-orange" color="warning" href="https://bit.ly/ifycce11202021webinar" target="_blank" rel="noreferrer">Register for the Webinar</Button>
                                </div>
                                <Row className="button-margin">
                                    <Col sm={2}></Col>
                                    <Col sm={1}>
                                        <img src={plane} className="plane-logo" />
                                    </Col>
                                    <Col sm={8} className="blue-text">
                                        Learn more about how to <br></br>
                                        apply to the Intern Program
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={5}>
                                <img className="webinar-pics" src={internlaunch} alt="1120webinar" />
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                        <Row className="larger-margin">
                            <Container>
                                <Container>
                                    <img width="100%" src={programs} />
                                </Container>
                            </Container>
                        </Row>

                    </Container>
                    <div className="blue-container text-center">
                        <img className="tracks-title larger-margin" src={interntracks} />
                        <Row>
                            <Col md="1"></Col>
                            <Col md="3">
                                <h5 className="text-center">
                                    <img className="interntopics" src={UX} alt="UX" />
                                </h5>
                                <h5 className="text-center white-text">UX Design: Front End</h5>
                                <p className="text-center white-text"><strong>UX Design Intern</strong></p>
                                <p className="text-center white-text">
                                    This project is ideal for those who are early in their UI/UX career, those who are new
                                    to the field and are trying to break in, or any UX designer who wants to understand how to create
                                    a good portfolio, and how to use story telling to showcase their work in a portfolio review.
                                </p>
                            </Col>
                            <Col md="4">
                                <h5 className="text-center">
                                    <img className="interntopics" src={cloud} alt="cloud" />
                                </h5>
                                <h5 className="text-center white-text">Cloud:</h5>
                                <p className="text-center white-text"><strong>AWS Cloud Computing Associate Intern</strong></p>
                                <p className="text-center white-text">
                                    Launch your cloud career with AWS cloud computing associate Internship to develop technical skills and domain knowledge through industry-recognized certification and proven learning curriculum, experiment with real-world, on-the-job experience through automated hands-on projects and exposure to a wide variety of  cloud career paths and gain invaluable insights into career planning and trajectory from experienced industry leaders. This internship also help you build interview readiness skills, a professional portfolio, and your personal brand to stand out at every step of the hiring process with cloud computing companies.
                                </p>
                            </Col>
                            <Col md="3">
                                <h5 className="text-center">
                                    <img className="interntopics" src={web} alt="web" />
                                </h5>
                                <h5 className="text-center white-text">Biotech/Pharma:</h5>
                                <p className="text-center white-text"><strong>Oncology Drug Discovery Intern</strong></p>
                                <p className="text-center white-text">
                                    The program is designed for who are interested in drug R&D in biotech and pharmaceutical industries for their future career. The ideal candidates are current graduate students at biology related major. This is a good opportunity to learn the basic knowledge of how to identify and discover new therapeutics via in vitro and in vivo validation in a highly matrix cross-functional team before moving into clinical trials.
                                </p>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </div>
                    <div id="orange-section" className="dark-blue-text">
                        <Container>
                            <div className="text-center medium-margin" >
                                <img className="tracks-title" src={bios} />
                            </div>
                            <h3>Speakers: </h3>
                            <p><strong>Host:</strong> Mr. John Cheung - CCE College Council Lead Mentor</p>
                            <p><strong>Liju Huang:</strong> UX Design</p>
                            <p><strong>Timothy Ma (MBA):</strong> AWS Cloud Computing</p>
                            <p><strong>Dr. Jack Chen:</strong> Bio/Pharma</p>
                            <p><strong>Woojin Kim:</strong> Job Interview Training Program</p>
                            <h3>Bios:</h3>
                            <h4>Liju Huang, UX &amp; Visual Design / Enterprise Software</h4>

                            <p>Liju Huang has 25+ years of experience in visual, media and UX/UI design in the software service industry.  Liju was previously a lead designer in an enterprise learning organization. She led many developments in the area of user interface and interaction design, micro-learning templates, websites, apps, and learning management systems. Liju’s expertise is to combine user experience, brand, and business requirements with concise visual design to different products, services, and platforms.
                            </p>

                            <h4>Timothy Ma, Business Development / Amazon Web Services</h4>
                            <p>Timothy has 10+ years of industry experience in technical sales, business development, and product
                                management focus on machine learning and cloud computing. He led multiple product developments,
                                executions, and launches ranging from $10M to $100M run rates. Timothy is passionate about learning
                                and building new products and a believer in giving back to the community. On a personal note, Timothy
                                is a happy father and a family man who still tries to be better in both. He is also a big fan of college
                                football and loves skiing and scuba diving.</p>
                            <h4>Jack Chen, Oncology Research &amp; Development, Pfizer Inc</h4>
                            <p>Jack is a R&amp;D Scientist with 15+ years of cancer research and oncology drug discovery experience. He is
                                currently a research group leader mentoring PhD and non-PhD scientists for developing breakthrough
                                cancer immunotherapies that may change patient life. Prior to Pfizer, he received his PhD degree at
                                Johns Hopkins University and worked at Eli Lilly and OncoMed pharmaceuticals. His expertise includes
                                R&amp;D pipeline leadership, targeted &amp; immunotherapy discovery, and precision medicine for patient-
                                tailoring strategy.</p>

                            <h4>Woojin Kim, Entrepreneur / E-Commerce</h4>
                            <p>3x DTC Serial Entrepreneur</p>
                            <p>Ex-CEO Caseology (Exited) - CPG Brand bootstrapped from $0 to $144M GMV (5 Years)</p>
                            <p>Top 10 Amazon Seller - 9 Figures Sold on Amazon</p>
                            <p>Consulted 2 DTC Brands from $10M to $30M (1 Exited)</p>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Webinar;