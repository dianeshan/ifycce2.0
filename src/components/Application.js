import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import banner from "../images/application/M_bannerImage2.jpg";
import timeline from "../images/application/TimeLine2023.png";
import soaringeaglestory from "../images/application/SoaringEagleStory.png";
import cloud from "../images/application/Cloud.png";
import web from "../images/application/Web.png";

class Application extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div class="banner-section">
            <img width="100%" src={banner} alt="banner" />
            <Button
              className="btn-orange apply-button-4"
              size="lg"
              color="warning"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdozyn5aPy2Bf8Gd_Ql8SqR5LZm54-HRB2_UI-eaNv9Kkl85A/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Button>
          </div>
          <img width="100%" src={soaringeaglestory} alt="soaringeagle" />
          <div id="grey-section">
            <Container>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <h5>
                    <strong>
                      Here at I FLY YOUNG CCE, we want to help you leave
                    </strong>
                  </h5>
                  <h5>
                    <strong>
                      the ground and learn to soar. Why do we do this?
                    </strong>
                  </h5>
                  <div>
                    <p>
                      - We know how important a career is to a person's life
                      journey, as we are all seasoned career professionals
                    </p>
                    <p>- We believe in an ecosystem of giving and receiving</p>
                    <p>
                      - We are beneficiaries of generous giving from people
                      before us
                    </p>
                    <p>
                      - We want you to be inspired and continue the culture of
                      giving to those after you
                    </p>
                  </div>
                </Col>
                <Col md="3"></Col>
              </Row>
              <div className="text-center">
                <Button
                  className="btn-orange apply-button-3"
                  size="lg"
                  color="warning"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdozyn5aPy2Bf8Gd_Ql8SqR5LZm54-HRB2_UI-eaNv9Kkl85A/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </Button>
              </div>
            </Container>
          </div>
          <div id="blue-container-focus">
            <h1 className="white-text text-center">Focus Areas</h1>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <div className="grey-text">
                    <strong className="white-text">
                      "How did you find your internships?"
                    </strong>{" "}
                    How did you overcome the catch-22 of needing prior
                    experience, even for your first job?" These are the most
                    commonly asked questions by frustrated job seekers, and we
                    design the CCE internship program to address this exact
                    problem.
                  </div>
                  <br></br>
                  <div className="grey-text">
                    <strong className="white-text">How?</strong> We value
                    "determination" more than "experience". As long as you meet
                    the requirements (see each position for details), can
                    demonstrate the eagerness to learn and commitment to quality
                    deliverables, we will give you a chance.
                  </div>
                  <br></br>
                  <div className="grey-text">
                    <strong className="white-text">Who is this for?</strong>{" "}
                    Whether you are looking for a first internship, or exploring
                    career options that better fit your talents, you are all
                    welcome to apply.
                  </div>
                  <br></br>
                  <div className="grey-text">
                    While we expect more programs in the future to cover broader
                    areas of expertise, below are the{" "}
                    <strong className="white-text">3 focus areas</strong> that
                    we are accepting applicants for CCE Internship: Soaring
                    Eagle Winter 2022.
                  </div>
                  <br></br>
                </Col>
                <Col md="2"></Col>
              </Row>
            </Container>
            <Row>
              <Col md="2"></Col>
              <Col md="4">
                <h5 className="text-center">
                  <img className="interntopics" src={cloud} alt="cloud" />
                </h5>
                <h5 className="text-center white-text">Cloud:</h5>
                <p className="text-center white-text">
                  <strong>AWS Cloud Computing Associate Intern</strong>
                </p>
                <p className="text-center white-text">
                  Launch your cloud career with AWS cloud computing associate
                  Internship to develop technical skills and domain knowledge
                  through industry-recognized certification and proven learning
                  curriculum, experiment with real-world, on-the-job experience
                  through automated hands-on projects and exposure to a wide
                  variety of cloud career paths and gain invaluable insights
                  into career planning and trajectory from experienced industry
                  leaders. This internship also help you build interview
                  readiness skills, a professional portfolio, and your personal
                  brand to stand out at every step of the hiring process with
                  cloud computing companies. AWS Cloud internship is offered by
                  CCE and is not associated with Amazon.
                </p>
              </Col>
              <Col md="4">
                <h5 className="text-center">
                  <img className="interntopics" src={web} alt="web" />
                </h5>
                <h5 className="text-center white-text">Biotech/Pharma:</h5>
                <p className="text-center white-text">
                  <strong>Oncology Drug Discovery Intern</strong>
                </p>
                <p className="text-center white-text">
                  The program is designed for who are interested in drug R&D in
                  biotech and pharmaceutical industries for their future career.
                  The ideal candidates are current graduate students at biology
                  related major. This is a good opportunity to learn the basic
                  knowledge of how to identify and discover new therapeutics via
                  in vitro and in vivo validation in a highly matrix
                  cross-functional team before moving into clinical trials.
                </p>
              </Col>
              <Col md="2"></Col>
            </Row>
          </div>
          <br></br>
          <h1 className="text-center">Why Apply?</h1>
          <br></br>
          <Row>
            <Col md="3"></Col>
            <Col md="6" className="text-center">
              <p>
                - Gain valuable working experience on projects valued by the
                industries
              </p>
              <p>- Learn from and mentored by industry professionals</p>
              <p>
                - Join CCE's healthy ecosystem of growing through giving and
                recieving
              </p>
            </Col>
            <Col md="3"></Col>
          </Row>
          <br></br>
          <div id="pink-section">
            <img width="100%" src={timeline} alt="timeline" />
            <br></br>
            <div className="text-center">
              <Button
                size="lg"
                className="btn-orange"
                color="warning"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdozyn5aPy2Bf8Gd_Ql8SqR5LZm54-HRB2_UI-eaNv9Kkl85A/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </Button>
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
