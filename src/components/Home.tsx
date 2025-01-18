import { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faAtom,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import AppNavbar from './AppNavbar';
import Footer from './Footer';

import logo from "../assets/CCELogo_square.png";

class Home extends Component {
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
                      Communication and Career Exploration
                    </h1>
                    <h4>Jump-start your career and get over your fear</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <Container>
              <Row>
                <Col md="12" lg="4">
                  <h2 className="text-center">
                    <FontAwesomeIcon icon={faFireAlt} style={{ color: '#ff9700' }}/>
                  </h2>
                  <h5 className="center-title">I FLY YOUNG CCE Webinar</h5>
                  <p className="webinar-date">
                    Sun. Mar 31 • 5 pm - 6 pm California Time<br></br>
                    Mon. Apr 1 • 8 am - 9 am Taipei/Beijing Time
                  </p>
                  <p className="light">
                    <h6>12 Capabilities for Life</h6>
                    <div>
                      Ask us about: <br></br> 1. CCE Prime + College Fun classes{" "}
                      <br></br> 2. Application of 12 capabilities <br></br> 3.
                      Career Exploration
                    </div>
                    <br></br>
                    <div>
                      Panelists: <br></br> 1. Bethany Lane (11th grade){" "}
                      <br></br> 2. Chris Chen (10th grade) <br></br> 3. Emmanuel
                      Chiang (9th grade)
                    </div>
                  </p>
                  {/* <p>
                    你對工作的定義及態度是什麼？是義務？還是熱情？是懐才不遇？還是實現夢想？你想了解如何在工作中如何活出自己的命定，在家庭裏如何創造傳家的價值嗎？
                  </p>
                  <p>
                    The official sign up for 2023 CCE Focus Group has closed.
                    You can still leave your information, and we will notify you
                    if seats become available.
                  </p> */}
                  <div className="text-center">
                    <Button className="home-button1" color="info" href="/webinar">
                      Learn More
                    </Button>
                  </div>
                </Col>
                {/* <Col lg="2"></Col> */}
                <Col md="12" lg="4">
                  <h2 className="text-center">
                    <FontAwesomeIcon icon={faAtom} style={{ color: '#ff9700' }}/>
                  </h2>
                  <h5 className="center-title">Office Hour Recordings</h5>
                  {/* <p className="webinar-date text-center">
                    Sat. Dec 17 • 11 am -12 pm PT
                  </p> */}
                  <p className="light">
                    I Fly Young CCE office hours are now officially posted on
                    the website! Head over to the office hours page by clicking
                    on the button below or navigating to "Office Hours" at the
                    top of the page.
                  </p>
                  <p className="light">
                    Learn about some of our CCE Mentors' journies to discovering
                    their talents, how to succeed in the workplace, how to
                    become a blessing, and much much more. Whether you are a
                    high school student, college student, young professional, or
                    a seasoned professional, everything shared will definitely
                    be of help, so go on and take a listen today!
                  </p>
                  <div className="text-center">
                    <Button className="home-button1" color="info" href="/officehoursabout">
                      Learn More
                    </Button>
                  </div>
                </Col>
                <Col md="12" lg="4">
                  <h2 className="text-center">
                    <FontAwesomeIcon icon={faBookOpen} style={{ color: '#ff9700' }} />
                  </h2>
                  <h5 className="center-title">
                    CCE Chronicles: Everyone Is Different
                  </h5>
                  <p className="light">
                    In our sixteenth issue of the CCE Chronicles, we interviewed
                    Dr. Yu Chen who is an Associate Professor of Electrical and
                    Computer Engineering at the State University of New York
                    Binghamton. He received a Ph. D. in Electrical Engineering
                    from the University of Southern California (USC) in 2006
                    under the supervision of Professor Kai Hwang. Before joining
                    Professor Hwang’s group, he was working as a research
                    assistant in the Advanced Interconnection and Network
                    Technology Lab led by Professor Anthony F.J. Levi. He has
                    authored or co-authored more than 200 scientific papers in
                    refereed journals, conferences, and book chapters. In his
                    interview, he shares personal experiences on his academia
                    career, answer tough ethical dilemmas, and share advice for
                    future students.
                  </p>
                </Col>
                {/* <Col lg="2"></Col> */}
              </Row>
            </Container>
          </div>
          <div className="main-page">
            <Container>
              <div className="row">
                <div className="col sm12">
                  <h3 className="home-heading2">
                    <strong>About us</strong>
                  </h3>
                  <p>
                    We are a 501(c)(3) non-profit organization providing a
                    complete support system to enable one to grow healthily
                    through different stages of career development.
                  </p>

                  <p>
                    For college/graduate students and young professionals, we
                    offer a platform where they can share experiences, grow
                    their network and receive mentorship. For high school
                    students, they will learn the 12 life changing capabilities
                    through CCE classes.
                  </p>
                </div>
              </div>
            </Container>
          </div>

          <div className="main-page">
            <Container>
              <h3 className="home-heading2">
                <strong>CCE Class:</strong>
              </h3>
              <p>
                <strong>About CCE Class</strong>: Through these classes, high
                school students will learn the 12 life changing capabilities,
                how to receive and provide constructive feedback, various
                academic disciplines they can pursue in college and how to
                explore their careers.
              </p>
              <p>
                Below are a list of resources that are recommended for
                prospective CCE Class Families:
              </p>
              <p>
                [English]{" "}
                <a
                  href="https://youtu.be/yG-WoryjAzk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  High School Freshmen Talk About Communication and Career
                  Exploration Class
                </a>
                <br></br>
                [Bilingual]{" "}
                <a
                  href="https://youtu.be/970qyUCZ71c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parents Talk About CCE Class
                </a>
                <br></br>
                [English]{" "}
                <a
                  href="https://www.youtube.com/watch?v=34bvk7hW_Ds"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A high school sophomore sharing on CCE Prime program
                </a>
                <br></br>
                [Chinese]{" "}
                <a
                  href="https://youtu.be/gpf6QMnXbj8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why CCE
                </a>
                <br></br>
                [Chinese]{" "}
                <a
                  href="https://youtu.be/AEGILKCOZyM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCE Class Overview
                </a>
              </p>
              <p className="card-text style=">
                <strong>Coach:</strong> Mr. Shengming Shan, who has more than 25
                years of management experience in world renowned semiconductor
                companies. He is also a passionate leader who wants to challenge
                and release the full potential of the next generation. Before
                founding the CCE class for high school students in 2016, he has
                been mentoring career professionals for many years.
              </p>
              <p>
                <a
                  className="btn btn-info btn-lg home-button"
                  href="https://bit.ly/cceifyreg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCE Class Registration
                </a>
                  
              </p>
              <h3 className="home-heading2">
                <strong>CCE Community:</strong>
              </h3>
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <p>
                    <strong>About CCE PRO Platform</strong>: A community built
                    for college/graduate students and young professionals, where
                    everyone can get education, networking, mentorship, and grow
                    healthily through giving and receiving.
                  </p>
                  <p>
                    <strong>For Young Professionals</strong>: Did you know that
                    a mentor can help set your career trajectory? Do you know
                    how to find the right one(s)? Did you know that you can grow
                    by being mentors to college and high school students? Do you
                    know how valuable your experiences are for them?
                  </p>
                  <p>
                    <strong>For College Students</strong>: Did you know that the
                    wisest person of all learns from other‘s successes? Do you
                    know how much you can grow by learning from the young
                    professionals, and at the same time helping out high school
                    students?
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <p>
                      <em>Made up your minds?</em>{" "}
                      <a
                        className="btn btn-info btn-lg home-button"
                        href="https://www.linkedin.com/groups/13879424/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join as a Member
                      </a>
                    </p>
                    <p>
                      <em>Still undecided?</em> Check out our{" "}
                      <a
                        href="https://www.youtube.com/channel/UCRI6gez9dVg1ohbKKMzoEAQ?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube channel
                      </a>
                      , Follow us on 
                      <a
                        href="https://www.linkedin.com/company/i-fly-young-cce/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      , Like us on 
                      <a
                        href="https://www.facebook.com/IFLYYOUNGCCE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                      , and 
                      <a
                        href="mailto:ccepro+subscribe@iflyyoung.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        subscribe
                      </a>{" "}
                      to our email list. 
                    </p>
                    <p>
                      If you would like to be part of the process in producing
                      webinars or helping to grow CCE, fill out the form linked
                      below!
                    </p>
                    <p>
                      <a
                        className="btn btn-info btn-lg home-button"
                        href="https://bit.ly/ifyccesupport"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ready to Contribute
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;