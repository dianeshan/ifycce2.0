import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import Event from "./Event";

import logo from "../images/CCELogo_square.png";
import flyer from "../images/webinars/2023SoaringEagleWebinar.png";

const Webinar = () => {
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
        <div className="webinar-content">
          <Event
            time={"Sat. Dec 17 • 11 am - 12 pm PT"}
            title={"Internship and Interview \r Program Launch 2023"}
            content={
              "I Fly Young CCE is hosting an exclusive webinar for college students seeking internship opportunities and job interview training. You can jumpstart your career alongside high-profile mentors in the industry. We will launch two programs - 1. Internship program with Cloud Computing and Bio/Pharma tracks. 2. Interview training program. Please attend the webinar and visit our Intern and Interview program pages for more details. Attendance is free of charge. Young professionals, college/high school students, parents and educators are welcome."
            }
            link={"https://bit.ly/ifycce2023internlaunch"}
            img={flyer}
          />

          <div className="content-margin"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webinar;
