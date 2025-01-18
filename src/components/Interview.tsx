import { Component } from "react";
import { Button } from "reactstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import whyapply from "../assets/interview/whyapp.png";
import pagetitle from "../assets/interview/PageTitleImage.png";
import whoweare from "../assets/interview/WhoWeAre.png";
import whyCCE from "../assets/interview/WhyCCE.png";
import foot from "../assets/interview/Footer.png";

class Interview extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <img width="100%" src={pagetitle} alt="page title" />
          <div className="why-apply-section">
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
