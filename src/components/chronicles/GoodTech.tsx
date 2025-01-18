import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import williamhsu from "../../assets/chronicles/williamhsu.png";
import groupofpeople from "../../assets/chronicles/groupofpeople.png";
import timer from "../../assets/chronicles/timer.png";

class GoodTech extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Good Technology is for Helping People</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RACHEL CHEN &middot; RAY CHANG &middot;
                HARRY SIO
              </h6>
              <h6 className="date">Dec 25, 2020 &middot; 10 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={williamhsu}
                alt="William's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. William Hsu is the director of application engineering
                    at Voltraware Semiconductor Co. with expertise in
                    inductive/wireless power transfer systems and projects that
                    span the field of consumer electronics, industrial
                    instrument, and customization required applications. Dr. Hsu
                    has a Ph.D. in electrical and electronics engineering at the
                    University of Auckland with years of experience in R&D team
                    managing and practical wireless power circuit/system design.
                    He believes that difficult and underexplored problems are
                    great ways to explore new possibilities and enjoys creating
                    real impact with his work.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe what you are doing right now?
                    </strong>
                  </h2>
                  <p>
                    I am currently the director of application engineering at
                    Voltraware Semiconductor Co. We establish design housing
                    that specializes in wireless power-related IC (integrated
                    circuit) design. The application for IC is based on magnetic
                    resonance (MR) technology. This technology is different from
                    the magnetic induction wireless charging that we see in our
                    smartphones and smartwatches. The main difference between
                    these two is that the MR system that we are now developing
                    offers wireless charging that can produce and maintain power
                    delivery to multiple devices with different power
                    requirements. Most importantly, MR systems have a longer
                    charging distance. These features provide a user experience
                    that is closer to the expectations that people have for true
                    wireless charging. Internally, my job involves advising the
                    development of wireless power, protocol planning,
                    specification development, architectural level design, and
                    functional verification and application testing for IC. I
                    also do a lot of external work such as technology and
                    product promotion, research on the needs of potential
                    clients and markets, and networking with our strategic
                    partners. I need to not only understand the technology, but
                    also how this technology is useful for our potential
                    clients. There's a saying that “good technology is only
                    helpful when you really are helping people''. My role is
                    trying to get our technology out into the market and to
                    receive critical feedback from everyone we have been in
                    contact with.
                  </p>
                  <h2>
                    <strong>
                      How do you deal with negative responses from the market to
                      your product?
                    </strong>
                  </h2>
                  <p>
                    I think critical feedback is a good thing. The reason
                    customers are not giving you positive feedback is because
                    they are not getting what they expect out of your product.
                    The good thing for us is that we can consider people’s needs
                    and expectations when thinking about whether we have missed
                    anything that we should be considering to perfect our
                    product.
                  </p>
                  <h2>
                    <strong>
                      What is the driving force behind your work and what you’re
                      pursuing?
                    </strong>
                  </h2>
                  <p>
                    In my final year of university, I worked on a project to
                    develop a wireless charging race car. This project was
                    really interesting as every student had to contribute to the
                    project to create the best design that would produce a
                    really fast and stable car. I didn't know that power
                    transfer could be done wirelessly because it was something I
                    had never seen before in my life. It got me thinking about
                    wireless charging as the future of conventional power
                    delivery, which could be something worth looking into. When
                    I graduated from university, I found out that our university
                    was really focused on wireless power research and it was one
                    of the few pioneers in the world working in this field. One
                    of the most important things in choosing a post-graduate
                    institution is to find a school that is focused on a certain
                    field that you are really interested in because you can get
                    more resources, mentors, and experience. In addition, if
                    your lab is focused on a specific research area, they can
                    get more laboratory instruments that are definitely helpful
                    for your research. After I found out that I was interested
                    in wireless power research, I began to dig into the field
                    and discovered that there are quite a few things about this
                    area that keep me passionate about this work. I know that
                    this technology brings many conveniences to people's daily
                    life and it's going to change how people behave now, so my
                    work will definitely have some impact on the future. 15
                    years ago, wireless power technology was not being explored
                    enough. In 2007, the first demonstrations of power
                    transferring systems to transfer power from two meters away
                    didn't get much attention because the demand and practical
                    implications were not really there. But now for almost
                    everything that you see, like cars, motorcycles, and bikes,
                    everyone is talking about wireless charging because they
                    realized how convenient this technology is. I think the
                    reason why I wanted to pursue wireless power technology is
                    because I know that it's going to have a huge impact on our
                    daily life. I also see a lot of potential in this technology
                    in its different applications, for example, as a necessary
                    method for charging medical implants.
                  </p>
                  <div className="text-center">
                    <img className="chronicle-pics" src={timer} alt="timer" />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      Can you talk about your educational path and the process
                      you took to get to where you are today?
                    </strong>
                  </h2>
                  <p>
                    When I was in Taiwan for junior high school, I remember I
                    was really bad at memorizing historical dates, names of
                    historical figures, and geographical locations. At the time,
                    I thought that I wasn’t as smart as the other kids in my
                    class. I later found out that the subjects I was bad at were
                    not difficult, but rather I didn't find them interesting. I
                    didn't bother to remember all the dates and names. After I
                    moved to New Zealand at 13 years old, I discovered that I
                    was really interested in biology, math, and physics and
                    found that I could be really good at them. When you are in
                    school, I think it is beneficial to focus on the things that
                    you are interested in because you are more likely to pay
                    attention and dig deeper into those courses, which can help
                    you in discovering your interests.
                  </p>
                  <p>
                    After graduating from high school, I got into electrical
                    engineering because that was the only major that I was
                    interested in. Because I only focused on the things I’m good
                    at and interested in, it was easy for me to choose one path
                    and to eliminate all the other options. I focused on
                    wireless power systems because I realized that finding
                    practical applications for wireless power was a critical
                    problem for this technology. If we want to make a
                    cost-effective solution that can be easily adopted by
                    consumers, we have to come up with wireless power
                    applications and ways to implement them. Normally, a
                    solution to an engineering problem depends on how you look
                    at the problem, so there can be several solutions depending
                    on the situation or environment that you are dealing with.
                    You can then choose one of the proposed solutions that is
                    the best fit for that kind of environment.
                  </p>
                  <p>
                    After I graduated from college, I started to think about how
                    there were not many people who are working with wireless
                    charging, despite it being an interesting and critical field
                    in the market. I decided to move back to Taiwan and started
                    a business with a partner to focus our work solely on the
                    solution for the lack of applications for wireless power.
                    Because I was in charge, I realized that there are not many
                    people who are focused on wireless power technology in
                    Taiwan, which made it very difficult to recruit people with
                    a lot of background knowledge on wireless power. However,
                    difficult problems can be an opportunity to explore
                    different possibilities and ways of doing things. I needed
                    to share my knowledge on wireless power with all my
                    colleagues to bring everyone up to the same level so we
                    could all think about how to work together to solve the
                    problems we faced. You can't be fighting and figuring out a
                    problem by yourself. Working in a team with people who have
                    different specialties allows room to provide different
                    opinions and perspectives on the same problem, which can
                    actually solve the problem in a more comprehensive, faster,
                    and creative way.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      When you said that there are not many people working on
                      wireless charging, how did you recognize that as an
                      opportunity? How do you deal with the uncertainties and
                      challenges of an underdeveloped field?
                    </strong>
                  </h2>
                  <p>
                    Usually when people are approaching an underdeveloped field,
                    the first thing that comes to mind is the issue of finances.
                    However, I didn't think too much about the financial side of
                    starting a company. I was more focused on technology
                    development. I do believe that there are a lot of risks that
                    we have to take into consideration, especially when there
                    are not many people working in the same field. Sometimes I
                    feel like the whole market looks like a jungle, and I don't
                    know what I will get if I walk into it. To be frank, for the
                    first six to seven years, we barely made a profit from the
                    technology that we developed. We were too focused on
                    technology promotion and trying to come up with a design
                    that fit our imagination of the clients' needs, which is
                    definitely not a realistic approach. If you don't interact
                    with your client enough, get to know the market well, or
                    understand the clients’ demands, the only thing that you're
                    going to develop is a product that only fits your
                    expectations and imaginations, but not your clients’. That
                    was a big failure for us. We had developed something that
                    looked pretty nice, and we thought that was a perfect
                    solution for certain applications. We produced a “perfect”
                    product for our clients, but they didn't give us positive
                    feedback on it. Afterwards, we realized that we needed to
                    rethink and redo the design processes to address their
                    requirements.
                  </p>
                  <p>
                    One of the risks of working in a field where there are not
                    many people working in the same field is that no one can
                    tell you if you are doing the wrong thing. But on the other
                    hand, if you are doing something that other people are also
                    doing, you are going to look at a market that will be
                    saturated by people in a few years, or even in a few months
                    because they are doing something that already has a demand
                    and is something people already know. If you put your head
                    into something that people don't really know, it's just at
                    that moment in time, they didn't know that they needed it.
                    But if you can see the need for your product, you can see
                    its potential. If you can see what the technology can
                    actually bring to people, you should be confident enough to
                    actually put your hands into that area. When Apple announced
                    its first smartphone, people were confused about what they
                    are going to do with this phone. It didn’t even have
                    buttons, and they had no idea how to use it. When people
                    realized that the smartphone brought the cell phone user
                    experience to the next level, people started to follow in
                    Apple’s steps.
                  </p>
                  <h2>
                    <strong>
                      What do you think wireless power is moving towards in the
                      future? Is wireless power currently in a primitive stage,
                      just like smartphones were when Apple first introduced
                      them?
                    </strong>
                  </h2>
                  <p>
                    Yes. I believe that the wireless power that we see now in
                    smartphones or smartwatches is not at its final stage. The
                    reason why I say this is because the wireless charging we
                    see now in the smartphone is just a fundamental,
                    cost-effective solution that can bring wireless power into
                    our daily life, but it is not the perfect solution. If you
                    ask anyone who is working on wireless power, you would
                    probably get a very similar answer. The reason why we are
                    adopting wireless power is because we want a fairly good
                    charging distance and good spatial freedom, which is our
                    ultimate expectation for wireless charging. So far, I don’t
                    believe there is anything like this on the market. The
                    solution we see on the market nowadays is just something
                    that companies are trying to get a profit out of, and
                    unfortunately it has become an industry standard. They
                    developed a product and released it even though they knew
                    that the product is not perfect. We should dedicate time to
                    bringing this technology into the best shape it can be. It
                    should have features like further transferring distance,
                    high efficiency, simultaneous one-to-multiple charging, and
                    most importantly, spatial freedom, which means that as long
                    as you put your receiver on the charging pad you should be
                    able to continuously charge without any interference.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for College Students</strong>
                  </h2>
                  <p>
                    I remember when I was in university or high school, many
                    courses weren't mandatory. Some friends of mine decided to
                    choose easier courses because they wanted to get good grades
                    on their reports. I also remember that some other friends
                    and I decided to take the courses that we thought were more
                    useful. Those courses may involve many engineering
                    mathematics, or a high workload every week. I think it was
                    worth it because I still use a lot of the engineering
                    mathematics and skills that I had accumulated back then in
                    my work today. I think my advice is don't take the shortcut,
                    or stated in a positive way, use your time wisely on the
                    things that you think are worth investing in. If you know
                    that you're going to an administrative job, of course you
                    need to know how to use Excel, spreadsheets, or something
                    like that. But if you know that you are going to be a
                    power-system engineer, then you need to be familiar with
                    simulation tools. If you are going to be an electronic
                    design engineer, you need to know how the operational
                    amplifier works. If you know that you are going in a certain
                    direction, then you have to reflect on the skill sets that
                    you need to have to make your life easier in the future. I
                    remember that when I knew that I was going to focus on
                    electronics design, I took several courses that were
                    directly related to that, and I still use a lot of skills
                    and the knowledge I learned from that time period.
                  </p>
                  <p>
                    I think interacting more with people is another important
                    thing. Most of my peers back in the day were just trying to
                    pass their courses, so they spent a lot of time purely on
                    studying. However, I’ve realized that once you start
                    working, you come to know that you can only achieve so much
                    by yourself, and those achievements cannot be greater than a
                    group of people who share the same vision. If you can
                    cultivate really good relationship and communication skills,
                    a lot of problems can be communicated to and easily solved
                    by a group of people, not just by yourself. I think
                    interactions with people are another important aspect that
                    we need to cultivate when we are still in school.
                  </p>
                  <p>
                    Another important piece of advice is to focus on the things
                    that you are going to do. Focus on the courses that you
                    believe are going to help you in the future. We need to have
                    a core belief, a passion, or a certain path that we want to
                    take. After we have decided this path, then we have to take
                    a step back and think about what would allow us to achieve
                    or go to that path. We need to set up goals for ourselves,
                    and then we need to set a direction. For example, once you
                    realize you want to be an electrical engineer, you need to
                    know what you need to do to get yourself prepared to go onto
                    that path. If you know that you need to get into the
                    electrical engineering major, you need to figure out what
                    you need to do in high school or college to prepare for that
                    major. I think that is a logical way of pursuing things.
                  </p>
                  <br></br>
                  <h2 className="text-center">
                    <strong>Tips for High School Students</strong>
                  </h2>
                  <p>
                    I believe some people already have a vision, so they know
                    how to pursue something that they want. For the group of
                    people who are still unsure about what they're going to do,
                    I think the best way is to listen to other people, and ask
                    yourself questions. A good starting point is to explore as
                    many things as possible. For example, math, physics,
                    chemistry, or anything. Nowadays you can get a lot of
                    information from the internet. You can also talk to your
                    friends in school or actually go to a few classes on
                    different topics to see how you like them, so you will have
                    more of an idea of what's your interests and passions. Talk
                    to people. Talk to your friends, seniors, or even people who
                    are already working. How did they figure out what they
                    wanted? All those interactions can give you a lot of ideas
                    about how you can choose your path, how you can choose your
                    major, or choose the things that you want to do. I
                    understand that a lot of people have trouble knowing what
                    they want to do, but after you talk to a lot of people, you
                    will start to realize that it is not difficult to choose.
                    The reason why people are having trouble choosing is because
                    they don’t have enough information. Once you have enough
                    information, you will know what you are good at and what you
                    are passionate about.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={groupofpeople}
                      alt="Group of people sitting in a circle"
                    />
                  </div>
                  <br></br>
                  <h2 className="text-center">
                    <strong>
                      Tips for People Interested in STEM Career Path
                    </strong>
                  </h2>
                  <p>
                    I think my advice is more of a general one. For people who
                    are pursuing a STEM career path, we need to realize that we
                    need to have a fundamental understanding of various
                    concepts, rather than just memorizing them. You need to know
                    that, when I use this equation, when I talk about this
                    concept, when I am trying to develop this product, I know
                    exactly what I am doing. You cannot just follow people’s
                    footsteps, or try to mimic something that you don't really
                    know that well. I say this because when I came back to
                    Taiwan, I realized that a lot of research and development
                    work is done by copying reference designs that are provided
                    by other companies, so engineers tend to use other people’s
                    design, and maybe modify them into a product. That is not
                    research and development, but rather production engineering.
                    I think something that we need to think about is that we
                    chose this career path because we like to understand the
                    fundamental concepts of each idea, even if it is just an
                    equation or a formula. When we are taking a test, we should
                    quote an equation because we understand it, not just because
                    we memorized it. If you can really do that, you can have
                    that equation to go with you for the entire life, rather
                    than continuously memorizing and forgetting it. It will
                    really help if we really understand these concepts instead
                    of memorizing them.
                  </p>
                  <p>
                    I remember once I was talking to a client who gave me some
                    negative feedback. While the colleague who went with me did
                    not ask too many questions about what was wrong with the
                    product, I felt the urge to understand why he was
                    unsatisfied with our product. I asked a lot of questions
                    like, “why do you have this kind of feeling? Why does this
                    not meet your demand? What's the main reason you can't sell
                    this to your customers? What do you think about the
                    application value of this product to other products? What do
                    you think is a reasonable price for this product?”. The
                    questions we ask determine what kind of person we are. If
                    you are not a person who wants to know the details you will
                    only ask superficial questions, but if you want to get to
                    the bottom of everything that you have your hands on, you
                    will ask critical questions to get the information that you
                    want. I believe that also echoes what I said before, that we
                    need to get to the fundamental stuff, because everything we
                    do shows what kind of person we are. Especially for someone
                    who is pursuing a STEM career path, that is a quality that
                    we need to succeed.
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

export default GoodTech;
