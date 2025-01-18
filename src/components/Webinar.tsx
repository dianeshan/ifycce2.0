import { Container, Row, Col } from "reactstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import Event from "./Event";

import logo from "../assets/CCELogo_square.png";
import flyer from "../assets/webinars/03312024.png";


const Webinar = () => {
  const webinarContent = (
    <>
      <div>
        Ask us about: <br></br> 1. CCE Prime + College Fun classes <br></br> 2.
        Application of 12 capabilities <br></br> 3. Career Exploration
      </div>
      <br></br>
      <div>
        Panelists: <br></br> 1. Bethany Lane (11th grade) <br></br> 2. Chris
        Chen (10th grade) <br></br> 3. Emmanuel Chiang (9th grade)
      </div>
    </>
  );
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
            time={"Sun. Mar 31 • 5 pm - 6 pm California Time"}
            secondTime={"Mon. Apr 1 • 8 am - 9 am Taipei/Beijing Time"}
            title={"12 Capabilities for Life"}
            content={webinarContent}
            link={
              "https://us02web.zoom.us/j/84100682160?pwd=b0Y5YklTSms3S1hXN0NvRDF5Z2hNUT09"
            }
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
