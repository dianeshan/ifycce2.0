import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";
import AudioPlayer from "./AudioPlayer";
import Player from "./Player";
import { tracks3 } from "../../data/tracksJan23Mar23";

import logo from "../../images/CCELogo_square.png";

class OfficeHours3 extends Component {
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
                    <h1 className="headings">
                      Mandarin Office Hours <br />
                      溝通與職涯探索 職場問答時間
                    </h1>
                    <h4>Tune in to wisdom from CCE Mentors</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <div className="inner">
              <Button color="primary" href="/officehours2">
                Previous
              </Button>{" "}
              <Button color="primary" href="/officehours4">
                Next
              </Button>
            </div>
            <h1 className="inner">Jan 2023 - Mar 2023</h1>
            <AudioPlayer />
            {tracks3.map((track, idx) => (
              <div key={idx}>
                <Player currentTrack={track} />
              </div>
            ))}
            <div className="inner">
              <Button color="primary" href="/officehours2">
                Previous
              </Button>{" "}
              <Button color="primary" href="/officehours4">
                Next
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfficeHours3;
