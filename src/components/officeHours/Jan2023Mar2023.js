import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
            <h1 className="inner">About</h1>
            <div className="inner">
              美西時間週一晚上Monday 8:30--9:30PM <br />
              北京/台灣時間週二中午Tuesday <br />
              11:30--12:00 等候神 <br />
              12:00--12:30 職場問題回應 <br />
              Zoom Meeting ID: 841 <br />
              0068 2160 Passcode: 042263
            </div>
            <AudioPlayer />
            {tracks3.map((track, idx) => (
              <div key={idx}>
                <Player currentTrack={track} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfficeHours3;
