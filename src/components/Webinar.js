import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col } from 'reactstrap';

import primewebinar from '../resources/images/webinars/06052021.png';

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
                            <h1 class="center">CCE Prime 202101 Webinar : Good Skills To Succession</h1>
                            <h2>6/5 Sat. 11-11:45 AM PT</h2>
                            <img className="webinar-pics" src={primewebinar} alt="0605 webinar" />
                            <p></p>
                            <p>CCE Webinar designed and organized by CCE Prime Class Students (9-10th graders).</p>

                            <p>If you would like to join us celebrating and encouraging these high school students, please contact cce.info@iflyyoung.com for meeting information.</p>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Webinar;