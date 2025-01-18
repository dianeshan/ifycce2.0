import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import davidpan from "../../assets/chronicles/davidpan.png";
import passion from "../../assets/chronicles/passion.png";
import beopen from "../../assets/chronicles/beopen.png";

class StemNotNerds extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Stem Students ≠ "Nerds"</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RACHEL CHEN &middot; RAY CHANG &middot;
                HARRY SIO
              </h6>
              <h6 className="date">Oct 30, 2020 &middot; 10 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={davidpan}
                alt="David's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Professor David Pan is a professor at the University of
                    Texas at Austin in the Department of Electrical and Computer
                    Engineering, where he studies chip design, manufacturing,
                    and emerging technologies. Professor Pan has a deep
                    connection to careers in industry; he worked at the IBM T.
                    J. Watson Research Center for 3 years before he became a
                    faculty member, and his current research collaborates with
                    multiple industry partners. He enjoys seeing his work have a
                    real impact on our technologies and seeing his students grow
                    and be successful.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      What are you doing now and what is your background?
                    </strong>
                  </h2>
                  <p>
                    Hi, I am David Pan, a professor and holder of the Silicon
                    Labs Endowed Chair at the Department of Electrical and
                    Computer Engineering, University of Texas at Austin. I got
                    my PhD in Computer Science from UCLA in 2000 (wow, 20 years
                    ago!). Before joining UT Austin, I worked at IBM T. J.
                    Watson Research Center for three years, from 2000 to 2003.
                    My research is quite interdisciplinary, from algorithms and
                    software to chip design/manufacturing and emerging
                    technologies. At UT Austin, I teach digital logic design, as
                    well as VLSI (very-large-scale integration) and CAD
                    (computer aided design) courses. I also direct the UT Design
                    Automation (UTDA) Lab. You may wonder what design automation
                    is about. When you design modern integrated circuits (or
                    chips) and systems, which nowadays can have billions of
                    transistors with feature size in the nanometer (10-9 meter)
                    scale, you have to rely on all kinds of sophisticated design
                    automation or CAD tools and software. My research’s main
                    focus is to develop cutting edge algorithms and software
                    that enable these complex design and optimization processes.
                  </p>
                  <h2>
                    <strong>
                      What is the driving force behind your work and what you
                      pursue?
                    </strong>
                  </h2>
                  <p>
                    The “why” behind my work is very simple: to design better
                    chips faster with higher performance, lower power, lower
                    cost, etc. You might have heard about Moore’s Law, the
                    amazing law that has been driving the semiconductor and
                    information technology industries for more than 50 years. My
                    research is related to  how to extend and expand Moore’s Law
                    through intelligent design and technology co-optimizations.
                    I have collaborated with many industry partners, including
                    IBM, Intel, Nvidia, Xilinx, Cadence, Synopsys, Google, etc.,
                    and many of our research results have been widely used in
                    industry to develop cutting-edge chips. To see your work
                    having real impact is very satisfying.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={passion}
                      alt="Passion led us here"
                    />
                  </div>
                  <br></br>
                  <p>
                    I have worked in both academia and industry. Both have pros
                    and cons, and you just have to ask yourself where you feel
                    most “empowered”. Academia typically looks at longer-term
                    and more fundamental research problems, with no immediate
                    product pressure. On the other hand, since we are in
                    electrical and computer engineering which tie very closely
                    with various industries, we do need to talk frequently to
                    those industry colleagues to understand their needs so that
                    we can identify the most important problems to work on. In
                    academia, I generally have freedom to pursue the topics that
                    I’m interested in (well, if I manage to get funding and
                    students to work on them ☺). On the other hand, big
                    companies like IBM, Intel, Google have much more resources,
                    such as the most advanced technology nodes and data centers.
                    That’s why some professors move to industry. It’s really a
                    personal choice. But we can also send students to perform
                    collaborative research. For me, the biggest accomplishment
                    as a professor is the students. Seeing them grow and be
                    successful makes me happy and keeps me going!
                  </p>
                  <h2>
                    <strong>How did you end up doing what you do now?</strong>
                  </h2>
                  <p>
                    I took an unconventional path to become an electrical and
                    computer engineering professor. My undergraduate major at
                    Peking University was physics, or specifically geophysics. I
                    came to UCLA to pursue my graduate study in Atmospheric
                    Sciences in 1993, and my first research at UCLA was on some
                    millennium-scale climate change problem. After two years of
                    study and research, I developed some theoretical and
                    numerical models, but then the problem arrived: how can I
                    verify the correctness of my model in my lifetime?
                    Incidentally I took some Computer Science classes at that
                    time, and found my new passion in VLSI and CAD. I like
                    solving hard problems, and VLSI CAD seems to have lots of
                    very intriguing and “mission impossible” problems. And more
                    importantly, you will know how good your solutions are very
                    quickly, within hours or days! Of course, I had to make up a
                    lot of knowledge and courses in EE [Electrical Engineering]
                    and CS. On the other hand, my physics training gave me good
                    intuition in formulating and solving those problems. My UCLA
                    PhD ended nicely with an Outstanding PhD Award, and I then
                    joined IBM T. J. Watson Research Center, which at that time
                    was the top industry research lab in VLSI and CAD. I learned
                    a lot at IBM and contributed to their key EDA tool called
                    placement driven synthesis (PDS) which is still widely used
                    in IBM. After three years with IBM, UT Austin happened to
                    have a faculty opening in my research area. So here I am.
                  </p>
                  <p>
                    As I look back, life is VERY hard to predict. You just have
                    to follow your passion, become your best self, and when
                    opportunities knock, be ready.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for College Students</strong>
                  </h2>
                  <p>
                    As a college student, you may find there are so many things
                    to do, from course work to extracurricular activities, and
                    many more. I think you should explore your interests, and
                    try to find something that you feel really passionate about
                    (and hopefully you are also talented and good at). Of
                    course, our interests could change later in life. But
                    college is a great place to learn new things and perform
                    “trial and error”. Be open-minded, listen to great speakers
                    from not only your immediate major areas but other areas too
                    while your schedule allows. Make some really good friends!
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={beopen}
                      alt="Be open"
                    />
                  </div>
                  <br></br>
                  <h2 className="text-center">
                    <strong>Tips for High School Students</strong>
                  </h2>
                  <p>
                    For high school students, the curricula are more
                    streamlined. But I would still suggest them to be
                    open-minded, get involved with different clubs, sports,
                    etc., and develop/pursue their passions. As teenagers are
                    more influenced by their peers, it’s important to have great
                    friends who can positively support each other.
                  </p>
                  <h2 className="text-center">
                    <strong>Tips for People Interested in STEM</strong>
                  </h2>
                  <p>
                    For those students who are interested in a STEM career path,
                    it’s certainly important to build solid STEM foundations and
                    problem-solving skills. But it is equally important to hone
                    your communication skills including writing, presentation,
                    leadership and teamwork. Either you know how to do it, or
                    you know how to find people who know how to do it. Don’t be
                    a loner. For example in CS, there are so many open-source
                    codes you can build upon. Do not reinvent the wheel. Do not
                    be afraid to ask for help or mentoring from senior people.
                    They are often not as intimidating as you might think. STEM
                    students should not be just “nerds”. They are problem
                    solvers and future change makers. To achieve that goal, you
                    need to work with others.
                  </p>
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

export default StemNotNerds;
