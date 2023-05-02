import React, { Component } from "react";
import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { Button } from "reactstrap";

import whyapply from "../resources/images/interview/whyapp.png";
// import timeline from '../resources/images/application/TimeLine2022.png';
import pagetitle from "../resources/images/interview/PageTitleImage.png";
import whoweare from "../resources/images/interview/WhoWeAre.png";
import whyCCE from "../resources/images/interview/WhyCCE.png";
import foot from "../resources/images/interview/Footer.png";

class Interview extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <img width="100%" src={pagetitle} alt="page title" />
          <div class="why-apply-section">
            <Button
              className="btn-orange apply-button-1"
              size="lg"
              color="warning"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Button>
            <img width="100%" src={whyapply} alt="why apply" />
          </div>
          <div id="light-grey-section" className="text-center">
            <Button
              className="btn-orange apply-button-3"
              size="lg"
              color="warning"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Button>
          </div>
          <img width="100%" src={whoweare} alt="who we are" />
          <img width="100%" src={whyCCE} alt="why CCE" />
          {/* <img width="100%" src={timeline} alt="timeline" /> */}
          <div className="foot-section text-center">
            <img width="100%" src={foot} alt="foot" />
            <Button
              size="lg"
              color="warning"
              className="btn-orange apply-button-2"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Interview;
