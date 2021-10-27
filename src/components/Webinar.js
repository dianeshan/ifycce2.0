import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col, Button } from 'reactstrap';

import internlaunch from '../resources/images/webinars/11202021.png';

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
                    <div className="main-page">
                        <Container>
                            <h1>2022 Soaring Eagle Internship Program Launch</h1>
                            <Button color="info" href="https://bit.ly/ifycce11202021webinar" target="_blank" rel="noreferrer">Register</Button>
                            <h2>11/20 Sat. 11:00 AM - Noon PT</h2>
                            <img className="webinar-pics" src={internlaunch} alt="1120webinar" />
                            <p></p>
                            <p>Have you been eager to jumpstart your career alongside high-profile mentors in the industry? You are in
                                for a special treat! I Fly Young CCE is proud to launch our 2022 internship program on 11/20 via live-
                                stream. Come meet our industry veterans from top-brand companies and apply for technical
                                specializations in UX design, AWS Cloud Computing, and Bio/Pharma. We will also launch our new job interview training program - a great opportunity to gain real world job interview experience from industry
                                leaders.</p>

                            <h3>Speakers</h3>
                            <p><strong>Host:</strong> Mr. John Cheung - CCE College Council Lead Mentor</p>
                            <p><strong>Liju Huang:</strong> UX Design</p>
                            <p><strong>Timothy Ma (MBA):</strong> AWS Cloud Computing</p>
                            <p><strong>Dr. Jack Chen:</strong> Bio/Pharma</p>
                            <p><strong>Woojin Kim:</strong> Job Interview Training Program</p>

                            <h3>Ask me about:</h3>
                            <p>- Internship opportunities, what to expect &amp; how to apply online</p>
                            <p>- Industry trends and career development advice for students and young professionals</p>
                            <p>- Job interview training through mock interview with industry professionals</p>

                            <h3>Speaker and Panelist Bio</h3>
                            <h4>Liju Huang, UX &amp; Visual Design / Enterprise Software</h4>

                            <p>Liju Huang was a Sr. Visual Media Designer on an Enterprise Learning Organization of a human resources
                                management software and services industry for 25+ years. Liju has been the lead designer in the areas
                                of user interface and interaction design for many micro-learning templates, websites, menus, and
                                learning management systems. Liju’s expertise is to combine user experience, brand, business and
                                functional requirements with concise visual design to different products, services and platforms.
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