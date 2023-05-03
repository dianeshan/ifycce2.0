import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import grade from "../../images/chronicles/grade.png";
import openMind from "../../images/chronicles/openMind.png";
import yuChen from "../../images/chronicles/yuChenPic.png";

class EveryoneIsDifferent extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Everyone Is Different</h1>
              <h6 className="authors">
                BY JUSTIN CHOW &middot; RAY CHANG &middot; SELINA YANG &middot;
                NATHAN YANG &middot; YUCONG YANG &middot; HARRY SIO
              </h6>
              <h6 className="date">August 29, 2022 &middot; 15 min read</h6>
            </Container>
            <a href="#" id="introduction"></a>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={yuChen}
                alt="yuChen's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. Yu Chen is an Associate Professor of Electrical and
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
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      As a professor of research at Smart Cities in security,
                      privacy, and cloud, how would you describe your profession
                      in your own words?
                    </strong>
                  </h2>
                  <p>
                    One aspect is as a teacher. I prefer to call myself an
                    educator instead of a professor because one of my major
                    duties is to guide my students in picking up the skills
                    needed to be successful in their intended careers. Another
                    aspect is my background handling traditional computer
                    networks. In these past decades, we have witnessed the
                    growth of smart devices, particularly the Internet of Things
                    (IoT) technology like our modern smart mobile devices. The
                    concept called Smart Cities, or Smart Communities, has
                    become realistic because now we can embed so many smart
                    computing, communication and storage devices in our living
                    environment. These devices extend our human senses whether
                    it's thinking or decision-making procedures. Human society
                    is moving into a new era where computers are just like smart
                    tele-devices in your hand. You have all kinds of IoT
                    technology embedded into physical environments, and human
                    beings will have better sensing and control of their
                    environment. Overall, my research at Smart Cities is
                    exciting as IoT technology continues to evolve
                    significantly.
                  </p>
                  <h2>
                    <strong>
                      Do you believe your research has been fully realized? What
                      are some of the challenges in the field that you are
                      facing?
                    </strong>
                  </h2>
                  <p>
                    Some of the challenges that I must face are similar to what
                    many people in this area face. When you ask people about
                    these challenges, they mostly talk about technical issues.
                    For example, comparing the information generated from
                    different environments using smart devices that are
                    constantly computing, communicating, storing, consuming
                    energy, and more. There will be gaps in my knowledge, but
                    those challenges do not bother me. I think a real major
                    concern people should worry about is not the lack of more
                    powerful technologies, but we are not making the environment
                    better. In fact, we are destroying it and have already
                    ruined a lot of ecosystems. When God gave believers free
                    will, humans made decisions better for us because materials
                    did not seem to control the environment. Honestly, I believe
                    that the solution is beyond the scope of technology.
                  </p>
                  <h2>
                    <strong>
                      In today’s society, there is a big concern about device
                      security and the privacy of individual users. Could you
                      share more about this area of your research?
                    </strong>
                  </h2>
                  <p>
                    The main area that my research group focuses on is privacy
                    protection. We collaborate with the campus police department
                    and the Air Force Research Lab. Both need to have access to
                    a surveillance system to read their footage of any
                    environment. The problem is as human beings, as a citizen,
                    and as a community, we do not want our activities to always
                    be overseen behind us. For instance, in today’s society,
                    elders suffering from health issues result in news reports
                    of unfortunate accidents. Some elders fall in their homes,
                    but nobody knows and a couple of days later it’s already too
                    late. Now, families use smart sensors to monitor the
                    movement of their elders. I talked to some of those people,
                    and they say, “[o]kay, that sounds good, but I don’t want
                    someone to look at me when I stay home.” You do not want to
                    be embarrassed when someone can virtually observe you.
                    Because of this dilemma, our team has some duties to manage
                    people’s activities like generating some metadata: trying to
                    describe the status of monitors by outsourcing an image or
                    voice to other people, which identifies what he or she is
                    doing. However, our team simply just does not do that, but
                    we keep reporting whether he or she is good in terms of
                    heartbeat rate or temperature. We can report on those
                    statistics, but there is no longer any room to grow as it
                    becomes an ethical dilemma. You want to get a service out of
                    these smart devices, but you do not want to reveal too much
                    personal information.
                  </p>
                  <h2>
                    <strong>
                      It seems your team deals with how consumers react to
                      modern technology, tracking, and surveillance. Could you
                      talk about your challenges when managing a team?
                    </strong>
                  </h2>
                  <p>
                    A major challenge for our team is how I motivate my group
                    members to move forward and work effectively with each
                    other. How you frame what you say is difficult because some
                    are very sensitive to certain deliverables. Maybe somebody
                    just wants you to say how they should improve their
                    efficiency, work harder, or other forms of constructive
                    feedback, but it ends up sounding derogatory. Often, many
                    interpret it as being criticized. As a manager, it is the
                    most challenging part of my role because different people
                    have different personalities. One method may be okay for
                    some people like pushing them to reach a higher bar.
                    However, some will be slow to shift in a new direction. By
                    extending the base of how they learn and encouraging them to
                    move forward, our team effectively innovates. However, for
                    the different types of workers, switching to the wrong
                    methods will lead to disaster. For years actually, I did not
                    worry too much about knowledge or skills of my students.
                    When deciding to pursue a graduate program, they often know
                    what their long-term career is, which motivates them to
                    fully understand each concept. However, how they achieve
                    that with different methods is the true challenge. Everyone
                    I work with all has different approaches, personalities,
                    concerns, and worries. Half of the time, I’m a human
                    resource manager disguised as a researcher.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How did you find out that you're interested in being an
                      educator?
                    </strong>
                  </h2>
                  <p>
                    When I was in middle school, one of my teachers taught
                    physics class, presented a lot of wonderful devices, and
                    encouraged us to explore different ones. They inspired and
                    kept reminding me how I should work with my group members in
                    the classroom. One story that stands out to me was with one
                    student I taught in my computer architecture course. He was
                    a bit older than the rest of the class so he was very
                    serious. Sometimes, early in the morning, I would arrive at
                    my office around 8:30 AM and he was always standing by the
                    door. After a couple of times, I just asked him, “[w]hy do
                    you have a tailored schedule to get up so early?” As it
                    turned out, he used to be a soldier in the US Army after he
                    graduated from high school, and was deployed to different
                    places. He received a scholarship to pursue an undergraduate
                    degree after he left the army. With this background in mind,
                    I realized that his eagerness to learn these concepts was
                    what drove him to succeed. I think back to how my teachers
                    treated me, and then start to think about my student
                    individual needs. I recognized that there are students that
                    need extra attention outside of the classroom, and valuable
                    lessons like that one is why I continue my teaching career.
                  </p>
                  <h2>
                    <strong>
                      What drove you to study electrical engineering, get a
                      Ph.D., and then focus specifically on smart devices?
                    </strong>
                  </h2>
                  <p>
                    I was driven by the need to expand my knowledge base on how
                    devices run the world. For instance, we often observe all
                    the data contained in smart devices and choose to embed
                    them. By embedding them, our team can use smart blocks to
                    build new houses and functional units. When installing a
                    thermostat in a given house, it helps to warn us when the
                    temperature is going higher or lower, or raining, or
                    snowing. You question how each of these functions maintains
                    a normal room temperature. This is exactly how my team
                    obtains a better understanding and provides guidance for the
                    future on how to build a better device. Another key
                    motivation that stuck with me was that I always considered
                    human beings with the potential to function as computing
                    devices do. If we can build some device where we can
                    understand and investigate the world, I consider that we, as
                    human beings, could try to figure out how to design the
                    world in God’s image.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      While you chose to be a professor, have you ever
                      considered pursuing a career in industry rather than in
                      academia?
                    </strong>
                  </h2>
                  <p>
                    Yes, I considered it many years ago. I intended and have
                    worked for entire summers experiencing company work life.
                    However, there are two reasons why I didn’t stay working in
                    that industry. One reason was because of my personality. I
                    do not appreciate my schedules being created by the
                    administration or by others. Instead, I want to make my own
                    agenda. In academia, professors often create their own
                    schedules like establishing course times. The second reason
                    is that any industry makes it clear what tasks you’re going
                    to do each day. However, as a scholar in life, we are mostly
                    driven by our own interests. Despite these benefits, many of
                    my peers from our industry research group left to work for
                    industry, and I was the only one left in academia. Though my
                    decision was quite uncommon for those that graduated in my
                    field of study, I believe working in academia is more
                    fulfilling to me.
                  </p>
                  <a href="#" id="collegetips"></a>
                  <h2 className="text-center">
                    <strong>
                      What are some qualities they think are necessary for being
                      a good researcher or educator?
                    </strong>
                  </h2>
                  <p>
                    For researchers, two of the most crucial traits are, having
                    an open mind to quickly take in new concepts. At the same
                    time, you need a solid foundation like the knowledge and
                    skills we need on evolving engineering concepts. Otherwise,
                    we will be given some new terms, you will not know what they
                    really mean, and it won’t be very useful to you. Second,
                    your patience will be tested, and opening your mind to
                    solutions different from what you expect will reveal more to
                    you. Put yourself in their shoes to see what really is the
                    reason why others see it that way.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={openMind}
                      alt="openMind"
                    />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      In industry, a lot of the work is market driven so there
                      is a clear end goal. In research, there is not necessarily
                      a clear goal in mind, so how do you deal with the
                      challenge of not having a clear result?
                    </strong>
                  </h2>
                  <p>
                    For academic research, we often say our work is open-ended,
                    right? So that means the reason is not too clear. As a
                    result, you must say we’re on an ascent while still having
                    an end-goal. The goal is to push the frontier of this area
                    forward. That is what the goal is: we increase the knowledge
                    base of the entire community. So not necessarily everything
                    we propose can be transferred into a product that you see on
                    the market, but what we generate probably will be a product
                    in the future. That is the goal. If you consider the
                    environment of a university, one goal is graduating. That’s
                    another goal we strive for as professors. With some graduate
                    students, I have seen them go from their first year where
                    they can barely write something to real scholars. When they
                    get into the last few years, they do not need much help.
                    Reading the paper of my graduates, whatever they wrote, I
                    can tell most are satisfied. That means my work has really
                    paid off.
                  </p>
                  <a href="#" id="hstips"></a>
                  <h2>
                    <strong>
                      If you had the chance to talk to your college self as a
                      freshman, what is some advice that you would say to him?
                    </strong>
                  </h2>
                  <p>
                    Well, I think that my college life was filled with a lot of
                    missed opportunities. Even though I did extracurricular
                    activities, I joined a lot of the wrong ones. And I would
                    tell myself how badly I was during that time. I would also
                    tell myself not to pay too much attention to my GPA. Your
                    chosen major is what recruiters pay attention to from your
                    college education. You will always be doing something right
                    when you are shaping the future you have always wanted.
                    Network and make good friends as they will help you get the
                    farthest in your career.
                  </p>
                  <br></br>
                  <div className="text-center">
                    <img className="chronicle-pics" src={grade} alt="grade" />
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

export default EveryoneIsDifferent;
