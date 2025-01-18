import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Card, Button } from "react-bootstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import ChroniclesHeader from "./ChroniclesHeader";

//pics for chronicles
import expose from "../assets/chronicles/expose.png";
import psychology from "../assets/chronicles/psychology.png";
import steps from "../assets/chronicles/steps.png";
import timer from "../assets/chronicles/timer.png";
import lapanddesk from "../assets/chronicles/laptopanddesk.png";
import passion from "../assets/chronicles/passion.png";
import network from "../assets/chronicles/network.png";
import certification from "../assets/chronicles/certification.png";
import confidence from "../assets/chronicles/confidence.png";
import resource from "../assets/chronicles/resource.png";
import passionate from "../assets/chronicles/passionateAbout.png";
import reflection from "../assets/chronicles/selfReflection.png";
import alumni from "../assets/chronicles/alumni.png";
import best from "../assets/chronicles/best.png";
import mission from "../assets/chronicles/mission.png";
import openMind from "../assets/chronicles/openMind.png";

class Chronicles extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="blue-container">
            <ChroniclesHeader />
          </div>
          <div className="main-page">
            <Container>
              <Row>
                {/* <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={mission} />
                    <Card.Body>
                      <Card.Title>Go Ahead And Ask</Card.Title>
                      <Card.Text>
                        You'll be surprised at what you get if you just ask.
                      </Card.Text>
                      <Button href="/goaheadandask" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={best} />
                    <Card.Body>
                      <Card.Title>If You Want to Fail, Fail Early</Card.Title>
                      <Card.Text>
                        If we need to pivot to a different solution then so be
                        it. If you're not taking risks, you're also not going to
                        innovate.
                      </Card.Text>
                      <Button href="/failearly" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col> */}
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={openMind} />
                    <Card.Body>
                      <Card.Title>Everyone Is Different</Card.Title>
                      <Card.Text>
                        Everyone has different approaches, personalities,
                        concerns, and worries.
                      </Card.Text>
                      <Button href="/everyoneisdifferent" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={mission} />
                    <Card.Body>
                      <Card.Title>Go Ahead And Ask</Card.Title>
                      <Card.Text>
                        You'll be surprised at what you get if you just ask.
                      </Card.Text>
                      <Button href="/goaheadandask" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={best} />
                    <Card.Body>
                      <Card.Title>If You Want to Fail, Fail Early</Card.Title>
                      <Card.Text>
                        If we need to pivot to a different solution then so be
                        it. If you're not taking risks, you're also not going to
                        innovate.
                      </Card.Text>
                      <Button href="/failearly" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={alumni} />
                    <Card.Body>
                      <Card.Title>Remind Yourself Your Motivation!</Card.Title>
                      <Card.Text>
                        Regardless of how many kinds of challenges happen down
                        the road, you can remind yourself - your initial
                        motivation.
                      </Card.Text>
                      <Button
                        href="/remindyourselfmotivation"
                        className="btn-color"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={reflection} />
                    <Card.Body>
                      <Card.Title>Become the Strongest Person</Card.Title>
                      <Card.Text>
                        When you empower other people and allow them to empower
                        you, you become the strongest person.
                      </Card.Text>
                      <Button
                        href="/becomestrongestperson"
                        className="btn-color"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={passionate} />
                    <Card.Body>
                      <Card.Title>Communication Is Key</Card.Title>
                      <Card.Text>
                        Education is necessary to learn the technical points,
                        but soft skills are vital to your success.
                      </Card.Text>
                      <Button href="/communicationiskey" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={resource} />
                    <Card.Body>
                      <Card.Title>Certification Helps!</Card.Title>
                      <Card.Text>
                        Certification helps for concrete skills, and also helps
                        for landing your first or second job.
                      </Card.Text>
                      <Button href="/certificationhelps" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={confidence} />
                    <Card.Body>
                      <Card.Title>The Biggest Happiness</Card.Title>
                      <Card.Text>
                        It is when you get to help others in a way where you
                        would have never thought you could help.
                      </Card.Text>
                      <Button href="/thebiggesthappiness" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={certification} />
                    <Card.Body>
                      <Card.Title>Do Something You Like</Card.Title>
                      <Card.Text>
                        As your career extends, the pay isn't going to be the
                        major motivation, but really the fulfillment.
                      </Card.Text>
                      <Button href="/dosomethingyoulike" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={network} />
                    <Card.Body>
                      <Card.Title>You Can Do This</Card.Title>
                      <Card.Text>
                        Sometimes we have to have that person in our life that
                        says you can do this and encourages us.
                      </Card.Text>
                      <Button href="/youcandothis" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={psychology} />
                    <Card.Body>
                      <Card.Title>Psychology is my Calling</Card.Title>
                      <Card.Text>
                        Psychology remains a popular program and can help
                        students to discover more about themselves and how to be
                        happier.
                      </Card.Text>
                      <Button href="/psychiscalling" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={expose} />
                    <Card.Body>
                      <Card.Title>Internships are Opportunities</Card.Title>
                      <Card.Text>
                        Expose yourself to actual classes and do hands-on
                        learning before you can decide whether that's something
                        that you want to go for.
                      </Card.Text>
                      <Button
                        href="/internshipsareopportunities"
                        className="btn-color"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={steps} />
                    <Card.Body>
                      <Card.Title>Explore the Real World</Card.Title>
                      <Card.Text>
                        Study hard to build a solid foundation of knowledge and
                        good habits of learning. Exercising regularly is also
                        important.
                      </Card.Text>
                      <Button href="/explorerealworld" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={timer} />
                    <Card.Body>
                      <Card.Title>Good Technology</Card.Title>
                      <Card.Text>
                        Not only do we need to understand the technology, but
                        also how this technology is useful for our potential
                        clients.
                      </Card.Text>
                      <Button href="/goodtech" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={lapanddesk} />
                    <Card.Body>
                      <Card.Title>Constant Exposure</Card.Title>
                      <Card.Text>
                        "I am glad that constant exposure to the inspiration of
                        research helped to overcome my doubt and pointed me in
                        the direction I should go."
                      </Card.Text>
                      <Button href="/constexposure" className="btn-color">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="card-spacing">
                  <Card className="card-spacing">
                    <Card.Img variant="top" src={passion} />
                    <Card.Body>
                      <Card.Title>Stem Students ≠ "Nerds"</Card.Title>
                      <Card.Text>
                        Life is VERY hard to predict. You just have to follow
                        your passion, become your best self, and when
                        opportunities knock, be ready.
                      </Card.Text>
                      <Button href="/stemnotnerds" className="btn-color">
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

export default Chronicles;
