import React from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col } from 'reactstrap';

//mentor pics
import paulpetrus from '../resources/images/mentors/PaulPetrus.png';
import stevexi from '../resources/images/mentors/SteveXi.png';
import timothyma from '../resources/images/mentors/TimothyMa.png';
import ninatsai from '../resources/images/mentors/NinaTsai.png';
import lindalee from '../resources/images/mentors/LindaLee.png';
import lijuhuang from '../resources/images/mentors/LijuHuang.png';
import kunzan from '../resources/images/mentors/KunZan.png';
import kedimei from '../resources/images/mentors/KediMei.png';
import johncheung from '../resources/images/mentors/JohnCheung.png';
import donaldcheng from '../resources/images/mentors/DonaldCheng.png';
import danielding from '../resources/images/mentors/DanielDing.png';
import chinjenchiang from '../resources/images/mentors/Chin-JenChiang.png';
import bindu from '../resources/images/mentors/Bindu.png';

//<h5 className="text-center">Click on mentors below to see their bios</h5>

const Team = () => {
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
                                    <h1 className="headings2">Our Team</h1>
                                    <h4>Overcome the barrier, to jump-start your career</h4>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="main-page">
                    <Container>
                        <Container>
                            <h1 className="text-center">Mentors</h1>
                        </Container>
                        <Container>
                            <Container>
                                <Row>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={timothyma} alt="Timothy's Headshot" />
                                        <h6>Timothy Ma</h6>
                                        <p>Business Development / Amazon</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={ninatsai} alt="Nina's Headshot" />
                                        <h6>Nina Tsai</h6>
                                        <p>Data Science & Product Analysis / Facebook</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={danielding} alt="Daniel's Headshot" />
                                        <h6>Dr. Daniel Ding</h6>
                                        <p>Machine Learning in Software & Hardware / Samsung</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={kedimei} alt="Kedi's Headshot" />
                                        <h6>Kedi Mei</h6>
                                        <p>Civil & Transportation Engineering / BKF Engineers</p>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={lijuhuang} alt="Liju's Headshot" />
                                        <h6>Liju Huang</h6>
                                        <p>UX & Visual Design / Enterprise Software</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={donaldcheng} alt="Donald's Headshot" />
                                        <h6>Dr. Donald Cheng</h6>
                                        <p>Electronics & Optics / Amazon</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={lindalee} alt="Linda's Headshot" />
                                        <h6>Linda Lee</h6>
                                        <p>Corporate Debt Financing / Banking</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={kunzan} alt="Kun's Headshot" />
                                        <h6>Dr. Kun Zan</h6>
                                        <p>Machine Learning & Data Science / Expedia</p>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={stevexi} alt="Steve's Headshot" />
                                        <h6>Dr. Steve Xi</h6>
                                        <p>Machine Learning & Fraud Detection / Facebook</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={johncheung} alt="John's Headshot" />
                                        <h6>John Cheung</h6>
                                        <p>Network Testing & Automation / Intel</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={chinjenchiang} alt="Chin-Jen's Headshot" />
                                        <h6>Dr. Chin-Jen Chiang</h6>
                                        <p>Semiconductor Device Physics / Lawrence Livermore National Laborator</p>
                                    </Col>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={bindu} alt="Bindu's Headshot" />
                                        <h6>Bindu Therthala</h6>
                                        <p>Embedded Software Architecture / Wireless Technology</p>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col sm="12" md="3" className="text-center">
                                        <img className="headshot" src={paulpetrus} alt="Paul's Headshot" />
                                        <h6>Dr. Paul Petrus</h6>
                                        <p>Network Infrastructure / Wireless Technology</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Team;