import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import kunzan from "../../assets/chronicles/KZan2.jpg";
import steps from "../../assets/chronicles/steps.png";
import hike from "../../assets/chronicles/hike.png";

class ExploreRealWorld extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Explore the Real World</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RACHEL CHEN &middot; RAY CHANG &middot;
                HARRY SIO
              </h6>
              <h6 className="date">Jan 15, 2021 &middot; 5 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={kunzan}
                alt="Kun's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. Kun Zan is the Senior Manager of data science at Expedia
                    Group and leads the Marketplace Optimization Team to
                    research, develop, and deploy pricing and monetization
                    products and other algorithmic decision-making tools for the
                    travel platform. Dr. Zan has a Ph.D. in operations research
                    from the University of Texas at Austin, and he enjoys the
                    combination of travel and technology. He is also excited
                    about the marketplace and platform-type businesses and
                    problems.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>What are you doing now?</strong>
                  </h2>
                  <p>
                    I am a Senior Manager of data science at Expedia Group [an
                    online travel agency] leading the Marketplace Optimization
                    Team to research, develop, and deploy pricing and
                    monetization products and other algorithmic decision-making
                    tools for the travel platform. [My job] covers the full
                    spectrum of data science, starting from understanding the
                    business/product and data analysis for insight, to
                    researching, developing, deploying to production, and
                    conducting experiments to measure effectiveness.
                  </p>
                  <h2>
                    <strong>
                      Why did you pursue a STEM career path, with AI and data
                      science in particular?
                    </strong>
                  </h2>
                  <p>
                    It was a natural progression for me. I studied mechanical
                    engineering in college, but I was not sure what was next
                    after graduation. Fortunately, I happened to attend several
                    talks in my junior year given by world-class scholars and
                    leading industry practitioners, which enlightened me to
                    study the manufacturing system, which was a subfield of
                    Industrial Engineering. That eventually inspired me to
                    pursue my PhD degree in Operations Research, which is one of
                    the core theoretical pillars of Industrial Engineering. My
                    research was about how to make optimal decisions when facing
                    uncertainties, where I got intensive training in statistics,
                    probability, and optimization, which are the fundamentals of
                    today’s AI and data science.
                  </p>
                  <h2>
                    <strong>
                      What motivates you to do what you are doing now?
                    </strong>
                  </h2>
                  <p>
                    I love the combination of travel and technology. Travel
                    creates great lifelong memories with family and friends,
                    which are much needed in the current era when we are
                    spending too much time on small screens. I am also
                    passionate about the marketplace and platform type business
                    and problems, so my current job is a great mix!
                  </p>
                  <div className="text-center">
                    <img className="chronicle-pics" src={steps} alt="Steps" />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      What are some challenges with emerging technologies?
                    </strong>
                  </h2>
                  <p>
                    AI ethics is a great challenge. We all have experience using
                    Youtube, TikTok, Facebook, Twitter, and other applications,
                    and have witnessed their influence on lots of critical
                    societal issues. [As to the recommended approach to facing
                    this challenge,] this is still an open question. We must
                    admit that technology is evolving, but it has limitations
                    during certain time periods. We need to be mindful that what
                    we see from the screens may not reflect what the real world
                    is like. Travel is one way to explore the real world. ☺
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for College Students</strong>
                  </h2>
                  <p>
                    1) Find out what your passion is, or at least what you
                    dislike.<br></br>
                    2) Explore and learn the possibilities around your passion
                    through an internship, talking with people with experiences,
                    [taking on a] personal project by learning online, etc.
                    <br></br>
                    3) Study hard to build a solid foundation of knowledge and
                    good habits of learning.<br></br>
                    4) Exercise regularly.
                  </p>
                  <br></br>
                  <h2 className="text-center">
                    <strong>Tips for High School Students</strong>
                  </h2>
                  <p>
                    1) Solid math foundations.<br></br>
                    2) Implement theory into code.<br></br>
                    3) [Have] good understanding of business and your product.
                    <br></br>
                  </p>
                  <div className="text-center">
                    <img className="chronicle-pics" src={hike} alt="Hike" />
                  </div>
                  <br></br>
                </Col>
                <Col md="2"></Col>
              </Row>
            </Container>
            <Container className="main-page text-center">
              <Button href="/chronicles" variant="info">
                All Chronicles
              </Button>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ExploreRealWorld;
