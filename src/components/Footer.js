import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
    render() {
        return <div className="custom-footer"><Container>
            <Row className="main-page">
                <Col sm="3"></Col>
                <Col sm="2">
                    <h6 className="text-center white-text">
                        Webinars
                    </h6>
                </Col>
                <Col sm="2">
                    <h6 className="text-center white-text">
                        Chronicles
                    </h6>
                </Col>
                <Col sm="2">
                    <h6 className="text-center white-text">
                        Contact
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <a className="socials" href="https://www.facebook.com/IFLYYOUNGCCE" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a className="socials" href="mailto:ccepro+subscribe@iflyyoung.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a className="socials" href="https://www.linkedin.com/company/i-fly-young-cce/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="socials" href="https://www.youtube.com/channel/UCRI6gez9dVg1ohbKKMzoEAQ?sub_confirmation=1"><FontAwesomeIcon icon={faYoutube} /></a>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p className="white-text copyright">I FLY YOUNG CCE © 2020</p>
                </Col>
            </Row>
            <Row>
                <Col sm="2"></Col>
                <Col sm="8" className="text-center">
                    <p className="white-text copyright">
                        If you have any questions, woudld like to get involved, or want to learn more, don't hesitate to contact us!
                        We would love to get to know each and every one of you better and can't wait for you to join the community.
                        You will get the chance to both give and recieve help and as we like to say, "Giving is receiving"!
                        You can reach us at cce.info@iflyyoung.com!
                    </p>
                </Col>
            </Row>
        </Container>
        </div>;
    }
}