import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import logo from '../resources/images/CCELogo_square.png';
import { Container, Row, Col, Button } from 'reactstrap';

import collegewebinar from '../resources/images/webinars/06262021.png';

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
                            <h1>College Education Exploration Journey – How we walk together as a family</h1>
                            <Button color="info" href="https://bit.ly/ifycce06262021webinar" target="_blank" rel="noreferrer">Register</Button>
                            <h2>6/26 Sat. 11-12:00 PM PT</h2>
                            <img className="webinar-pics" src={collegewebinar} alt="0626webinar" />
                            <p></p>
                            <p>I Fly Young School is hosting an exclusive webinar for families interested in learning about why and
                            how to help children to prepare for college education and pursue career. We’ve invited 4 families with
                            recent graduating high schoolers to share their precious family journey. These families have made very
                            diverse choices in their selection of primary, secondary and post-secondary education paths. We trust
                            this diverse presentation will help identify a path that’s best for your precious child. This webinar is
                            sponsored by I FLY YOUNG CCE. Attendance is free of charge. Families and Educators and parents are
                            welcome.</p>

                            <h3>Speakers</h3>
                            <p><strong>Moderator:</strong> Mr. Shengming Shan (Founder, I FLY YOUNG CCE)</p>
                            <p><strong>Chen Family:</strong> Mr. Biyong Chen, Ms. Hongwen Gao, Mr. Jamin Chen, Jesse Chen (USC), Public (9-12th
                            grade) + Private (1-8 th grade)</p>
                            <p><strong>Yang Family:</strong> Mr. Simon Yang, Ms. Nina Tsai, Selina Yang (UC Berkeley), Public (1-12 th grade)</p>
                            <p><strong>Charan Family:</strong> Mr. Charan Kumar, Ms. Sharadha Eswar, Ram Charan(Rhode Island School of Design),
                            Private (1-12 th grade)</p>
                            <p><strong>Bodine Family:</strong> Mr. Franklin Bodine, Mrs Mingi Bodine, Rachel Bodine (University of Minnesoda), Home
                            schooling(1-12 th grade)</p>

                            <h3>Ask me about:</h3>
                            <p>- Why do you decide to go to private/public/in-state/out of state colleges?</p>
                            <p>- What are the challenges and solutions on this journey? How do you find the solutions?</p>
                            <p>- How do I know what’s best for my child?</p>
                            <p>- How to help my child see what’s best for him/her?</p>
                            <p>- Recommendations for high schoolers and parents</p>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Webinar;