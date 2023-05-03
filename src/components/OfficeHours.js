import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import logo from "../resources/images/CCELogo_square.png";
import AudioPlayer from "./AudioPlayer";

class OfficeHours extends Component {
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
                    <h1 className="headings2">Office Hours</h1>
                    <h4>Tune in to wisdom from CCE Mentors</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <AudioPlayer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfficeHours;
