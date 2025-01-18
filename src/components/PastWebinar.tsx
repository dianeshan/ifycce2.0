import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, Button } from "react-bootstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import logo from "../assets/CCELogo_square.png";

//webinar flyers
import medical from "../assets/webinars/07182020.jpg";
import investmentbanking from "../assets/webinars/08012020.jpg";
import financetech from "../assets/webinars/08222020.jpg";
import architecture from "../assets/webinars/09052020.jpg";
import venturecapital from "../assets/webinars/09192020.png";
import guideforlife from "../assets/webinars/09272020.jpg";
import preparingforfuture from "../assets/webinars/10172020.jpg";
import passioninhighschool from "../assets/webinars/10312020.jpg";
import successfulinterview from "../assets/webinars/11212020.jpg";
import tradingswe from "../assets/webinars/12052020.jpg";
import soaringeagle from "../assets/webinars/12192020.jpg";
import techstartups from "../assets/webinars/01162021.png";
import careerandyou from "../assets/webinars/01302021.png";
import walkwithothers from "../assets/webinars/02202021.png";
import goodskills from "../assets/webinars/06052021.png";
import collegewebinar from "../assets/webinars/06262021.png";
import interngrad from "../assets/webinars/07312021.png";
import internlaunch from "../assets/webinars/11202021.png";

class PastWebinar extends Component {
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
                    <h1 className="headings2">Past Webinars</h1>
                    <h4>You don't have to go far, if you missed a webinar</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <Container>
              <Row>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={medical} />
                    <Card.Body>
                      <Card.Title>Medical Career</Card.Title>
                      <Card.Text>
                        Judy Shan talks about her life and path towards medical
                        school.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=uJDAUQW2EiY&list=PLQTND4OzgUVTZ3WaMNCu9ncUEuM4-TNVF"
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={investmentbanking} />
                    <Card.Body>
                      <Card.Title>Investment Banking Career</Card.Title>
                      <Card.Text>
                        Gloria Su talks about her path to becoming an investment
                        banker.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=gxRx2d6uKHg&list=PLQTND4OzgUVQTMC503XJzL1LNFc8b8Rt5"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={financetech} />
                    <Card.Body>
                      <Card.Title>Finance-Technology Career</Card.Title>
                      <Card.Text>
                        David Liu speaks about his life and having a
                        finance-technology career.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={architecture} />
                    <Card.Body>
                      <Card.Title>Architectural Career</Card.Title>
                      <Card.Text>
                        Jocelyn Chiou talks about her life and how she went
                        about exploring architecture.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=MI1CzfXg4xU&list=PLQTND4OzgUVSpUb4yHwKYQX8cEA2XteRi"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={venturecapital} />
                    <Card.Body>
                      <Card.Title>Venture Capital Careers</Card.Title>
                      <Card.Text>
                        Timothy Chen speaks about software engineering and the
                        venture capital career.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=-kB2zxsj5Zo&list=PLQTND4OzgUVRgM2YQWtSRlftF3QDBTHTk"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={guideforlife} />
                    <Card.Body>
                      <Card.Title>Guide for Life</Card.Title>
                      <Card.Text>
                        Panel of CCE students talk about the 12 life-changing
                        capabilities.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={preparingforfuture} />
                    <Card.Body>
                      <Card.Title>Preparing for Your Future</Card.Title>
                      <Card.Text>
                        Daniel Chen talks about how he prepared for his future
                        and how you can too.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=bzDvBVACCBE&list=PLQTND4OzgUVTsct1Z8ZdMbYetiS1wH9FJ"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={passioninhighschool} />
                    <Card.Body>
                      <Card.Title>Passion in High School</Card.Title>
                      <Card.Text>
                        Rachel Chen shares how she found her passion in high
                        school.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=s9eTus06NDY&list=PLQTND4OzgUVTcv10Rc9SZtBhB-iaJeU8n"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={successfulinterview} />
                    <Card.Body>
                      <Card.Title>Successful Interview & Onboarding</Card.Title>
                      <Card.Text>
                        Dr. Chen Chen talks about how to be successful in
                        interviews and onboarding process.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=y5lN9vMWwRs&list=PLQTND4OzgUVQc9yZ1vwJXdRK3VManDkOa"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={tradingswe} />
                    <Card.Body>
                      <Card.Title>Trading Industry as SWE</Card.Title>
                      <Card.Text>
                        Howard Shan shares his experiences and journey into the
                        trading industry.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=lbnMNX-gDoA&list=PLQTND4OzgUVSkVZu4hnLF3nkCjViezqzD"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={soaringeagle} />
                    <Card.Body>
                      <Card.Title>Soaring Eagle Internship</Card.Title>
                      <Card.Text>
                        Panelist of mentors @ CCE talk about internship
                        opportunities.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=9cRmugn6KzI&list=PLQTND4OzgUVTstlw8R1CpBm8TRT63Qnh5"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={techstartups} />
                    <Card.Body>
                      <Card.Title>Journey Through Tech</Card.Title>
                      <Card.Text>
                        Bindu Therthala talks about her journey through tech
                        startups.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={careerandyou} />
                    <Card.Body>
                      <Card.Title>Your Career and You</Card.Title>
                      <Card.Text>
                        David Su talks about his experience in the wireless
                        semiconductor industry.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={walkwithothers} />
                    <Card.Body>
                      <Card.Title>Walk with Others</Card.Title>
                      <Card.Text>
                        Dr. Paul Petrus talks about the transition from college
                        to professional life.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={goodskills} />
                    <Card.Body>
                      <Card.Title>Good Skills to Succession</Card.Title>
                      <Card.Text>
                        Panelists from IFY CCE Prime talk about skills that lead
                        to success.
                      </Card.Text>
                      <Button disabled variant="primary">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={collegewebinar} />
                    <Card.Body>
                      <Card.Title>College Education Exploration</Card.Title>
                      <Card.Text>
                        Listen to four families talk about each of their
                        different education journeys.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/watch?v=nld2OCYk6LQ&list=PLQTND4OzgUVTl_oSkP66cGQMq8sBmIxH1"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={interngrad} />
                    <Card.Body>
                      <Card.Title>Intern Graduation Showcase</Card.Title>
                      <Card.Text>
                        Learn what some of our interns have accomplished.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/playlist?list=PLQTND4OzgUVT_i3KuWUDJkynFB6mZGVc3"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={internlaunch} />
                    <Card.Body>
                      <Card.Title>2022 Soaring Eagle Internship</Card.Title>
                      <Card.Text>
                        Mentors @ CCE talk about internship and mock interview
                        opportunities.
                      </Card.Text>
                      <Button
                        href="https://www.youtube.com/playlist?list=PLQTND4OzgUVT1LufIwCpH19SNskQbMaFq"
                        variant="primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PastWebinar;
