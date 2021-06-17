import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Container, Row, Col, Button } from 'reactstrap';

import banner from '../resources/images/application/M_bannerImage2.jpg';
import timeline from '../resources/images/application/TimeLine.png';
import soaringeaglestory from '../resources/images/application/SoaringEagleStory.png';
import AI from '../resources/images/application/AI.png';
import cloud from '../resources/images/application/Cloud.png';
import web from '../resources/images/application/Web.png';
import UX from '../resources/images/application/UX.png';
import ads from '../resources/images/application/Ads1.png';

class Application extends Component {
    render() {
        return (
            <div className="all-content">
                <div className="content-wrap">
                    <AppNavbar />
                    <img width="100%" src={banner} alt="banner" />
                    <img width="100%" src={soaringeaglestory} alt="soaringeagle" />
                    <div id="grey-section">
                        <Container>
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <h5><strong>Here at I FLY YOUNG CCE, we want to help you leave</strong></h5>
                                    <h5><strong>the ground and learn to soar. Why do we do this?</strong></h5>
                                    <div>
                                        <p>- We know how important a career is to a person's life journey, as we are all seasoned career professionals</p>
                                        <p>- We believe in an ecosystem of giving and receiving</p>
                                        <p>- We are beneficiaries of generous giving from people before us</p>
                                        <p>- We want you to be inspired and continue the culture of giving to those after you</p>
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container>
                    </div>

                    <div id="blue-container-focus">
                        <h1 className="white-text text-center">Focus Areas</h1>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                                <div className="grey-text"><strong className="white-text">"How did you find your internships?"</strong>{' '}
                            How did you overcome the catch-22
                            of needing prior experience, even for your first job?" These are the most commonly
                            asked questions by frustrated job seekers, and we design the CCE internship program to
                            address this exact problem.</div>
                                <br></br>
                                <div className="grey-text"><strong className="white-text">How?</strong>{' '}
                            We value "determination" more than "experience".
                            As long as you meet the requirements (see each position for details), can demonstrate
                            the eagerness to learn and commitment to quality deliverables, we will give you a chance.</div>
                                <br></br>
                                <div className="grey-text"><strong className="white-text">Who is this for?</strong>{' '}
                            Whether you are looking for a first internship, or exploring career options that better fit your talents, you are all welcome to apply.</div>
                                <br></br>
                                <div className="grey-text">While we expect more programs in the future to cover broader areas of expertise, below are the {' '}<strong className="white-text">5 focus areas</strong>{' '}
                            that we are accepting applicants for CCE Internship: Soaring Eagle Winter 2021.</div>
                                <br></br>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="3">
                                <h5 className="text-center">
                                    <img className="interntopics" src={AI} alt="AI" />
                                </h5>
                                <h5 className="text-center white-text">AI:</h5>
                                <p className="text-center white-text"><strong>Data Science & Machine Learning Intern</strong></p>
                                <p className="text-center white-text">
                                    Gain hands on data analysis and machine learning experience through guided step by step
                                    practices, from the introductory to the advanced.
                                </p>
                            </Col>
                            <Col md="4">
                                <h5 className="text-center">
                                    <img className="interntopics" src={cloud} alt="cloud" />
                                </h5>
                                <h5 className="text-center white-text">Cloud:</h5>
                                <p className="text-center white-text"><strong>Sales Associate Intern</strong></p>
                                <p className="text-center white-text">
                                    Launch your tech sales career with Sales Associate Internship Program to develop job-ready
                                    skill sets, expand horizons to the cutting edge innovations in cloud computing, and gain invaluable
                                    insights to career paths from industry leaders.
                                </p>
                            </Col>
                            <Col md="3">
                                <h5 className="text-center">
                                    <img className="interntopics" src={web} alt="web" />
                                </h5>
                                <h5 className="text-center white-text">Web Development:</h5>
                                <p className="text-center white-text"><strong>Full Stack SWE Intern</strong></p>
                                <p className="text-center white-text">
                                    Eager to launch your own cloud-ready web application but at a loss for where to start? Beginner
                                    or sophisticated, this internship is tailored for you to advance and collaborate from the front-end to the back-end.
                                </p>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                        <Row>
                            <Col md="3"></Col>
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
                            <Col md="3">
                                <h5 className="text-center">
                                    <img className="interntopics" src={ads} alt="Ads" />
                                </h5>
                                <h5 className="text-center white-text">Business Analytics: Ads</h5>
                                <p className="text-center white-text"><strong>Facebook Ads Management Intern</strong></p>
                                <p className="text-center white-text">
                                    If you are interested in Digital Marketing and Web Analytics, this is a great opportunity to
                                    learn how to manage advertisements and perform analytics on social media platforms. You will gain
                                    valuable industry experience and career guidance by working with leaders from Facebook.
                                </p>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </div>
                    <br></br>
                    <h1 className="text-center">Why Apply?</h1>
                    <br></br>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <p>- Gain valuable working experience on projects valued by the industries</p>
                            <p>- Learn from and mentored by industry professionals</p>
                            <p>- Join CCE's healthy ecosystem of growing through giving and recieving</p>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    <br></br>
                    <div id="pink-section">
                        <img width="100%" src={timeline} alt="timeline" />
                        <br></br>
                        <div className="text-center">
                            <Button size="lg" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfEBdA-4XQf5Od-JdzWkbVQH8_pdIWd9_a_sLrswNVQoimmVQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Apply Now</Button>
                        </div>
                        <br></br>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Application;