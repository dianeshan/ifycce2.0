import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import best from "../../images/chronicles/best.png";
import decision from "../../images/chronicles/decision.png";
import jensen from "../../images/chronicles/jensen3x.png";

class FailEarly extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>If You Want to Fail, Fail Early</h1>
              <h6 className="authors">
                BY JUSTIN CHOW &middot; RAY CHANG &middot; SELINA YANG &middot;
                NATHAN YANG &middot; YUCONG YANG &middot; HARRY SIO
              </h6>
              <h6 className="date">April 8, 2022 &middot; 15 min read</h6>
            </Container>
            <a href="#" id="introduction"></a>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={jensen}
                alt="Jensen's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Jensen Tjeng is the director of engineering for an SoC
                    (System-on-Chip) design team at Nvidia. Jensen has a master
                    degree in electrical engineering from Stanford University,
                    and a masters diploma in strategy and innovation from
                    University of Oxford. He has extensive experiences in
                    different aspects of hardware engineering, from CPU (Central
                    Processing Unit) design to system level design, and he is
                    always passionate about empowering his team and building the
                    next leaders in the company. Jensen is also a devoted
                    Christian and a father of three kids.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe your profession in your own words?
                    </strong>
                  </h2>
                  <p>
                    I'm a director of engineering for an SoC design team at
                    Nvidia. My team is responsible for IP (Intellectual
                    Property) assembly and the SoC creation, which includes the
                    methodology for optimal efficiency, agility, and
                    productivity. Our work also involves coming up with an IP
                    build and release methodology. So there's a lot of cross
                    functional collaboration and coordination. In our team, we
                    always need to maintain a delicate balance between project
                    execution and methodology improvement. But personally, I
                    also spend a lot of my time on people management, which is
                    something I'm very passionate about, to build the next
                    leaders in the company.
                  </p>
                  <h2>
                    <strong>
                      How has your work evolved over time for Nvidia? Has there
                      been any changes to your position and responsibilities?
                    </strong>
                  </h2>
                  <p>
                    Definitely! I was already a director of engineering in my
                    first company. I was focusing on ARM CPU design, but I
                    needed to take a break from it. I spent about eleven years
                    in ARM CPU design, right out of college. I really enjoyed
                    it, but after a while I wanted to do something different.
                    I've been focusing a lot on the CPU piece, and now I want to
                    see a bigger picture. So I consciously decided to move on to
                    the system level, and I decided to go into SoC design.
                  </p>
                  <p>
                    Before I got to Nvidia, I actually moved to AMD first,
                    spending about one year at AMD and then left there for
                    Nvidia. When I first joined the company, I made it very
                    clear that I didn't want to do people management because I
                    just changed to a different field, and I wanted to learn the
                    technology. I also wanted to know more about the company. I
                    wanted to spend more time learning more about the technical
                    stuff and things like that because naturally I like
                    learning, so I wanted to make sure I spend enough time
                    understanding and learning new technology before I start
                    managing people again. In fact, my manager knew about my
                    background and every year he asked me if I wanted to go back
                    to management. I kept saying no until one day when he
                    decided to leave the company, and I was asked by his manager
                    to step into this role. After taking some time to consult
                    with my family and also my spiritual mentor, I decided to
                    take that responsibility. Since then, I have reignited the
                    passion once again, even though people management can be
                    very frustrating at times. In my first company, I didn’t
                    think I was a good manager, because I was new at people
                    management and I was focusing too much on my technical work.
                  </p>
                  <h2>
                    <strong>
                      You talked a little about how as you develop experience,
                      the way you manage has evolved over time. Today, how do
                      you manage your team of hardware engineers?
                    </strong>
                  </h2>
                  <p>
                    I'll say my style is more of a servant-leadership.
                    Basically, I like to enable and empower my engineers, so I
                    spend a lot of time behind the scenes working with them,
                    coaching them and things like that. But once I think they
                    are ready and assign them to lead a certain project, I try
                    to make sure I allow them to shine and be the face of that
                    particular task. So for most of the time in the meeting,
                    I'll just be quiet and let them do their own thing, unless
                    they need some help or they don't have some details. Because
                    sometimes as an individual contributor, you may be limited
                    to a certain kind of project, while as a manager, you get to
                    see all different projects. So I will only interject when I
                    need to. But for the most part, I allow them to speak for
                    themselves, and also let them learn from their mistakes. I
                    always encourage people to take risks. But at the same time,
                    you can only take risks after you have done your due
                    diligence in terms of understanding the problem and thinking
                    about all the different considerations. But I like people to
                    understand that it's okay to fail. In fact, this is also our
                    Nvidia culture – If you want to fail, fail early. If we need
                    to pivot to a different solution, then so be it. If you're
                    not taking risks, you're also not going to innovate. You're
                    not going to make huge breakthroughs or major advancements
                    without this.
                  </p>
                  <p>
                    Also nowadays, I consciously make the decision to always
                    prioritize people over the project. In the past, when things
                    become tough in the project, the focus would just become
                    trying to get work done at all costs. But now I'm more
                    conscious about focusing on people first. Sometimes people
                    may not perform well because of the situation in their
                    family or other stuff in their personal life. So it's
                    actually good to identify that and to be able to work with
                    them or to help them. When their personal situation is under
                    better control, typically their work will also improve. Of
                    course at the end of the day, we still have to deliver our
                    project and do our work excellently, but at the same time we
                    should focus a lot more attention to the people. I think
                    this is a big shift from when I first became a manager.
                  </p>
                  <h2>
                    <strong>
                      Can you share one or two examples of how you managed some
                      difficult situations when you are a manager?
                    </strong>
                  </h2>
                  <p>
                    I can start by sharing a bad example. As I mentioned
                    earlier, [in the past] as soon as there's some complex
                    situation or issues with the project, I would immediately
                    step in like, okay, get out of the way, and let me do my
                    thing and fix the problem. That is because in my first
                    company, the way to promote a top engineer who does well is
                    to promote them into a manager role, so I was promoted to
                    the manager role not necessarily because they saw me as a
                    good manager although I did show some initiative. Actually
                    that is a wrong concept. Being a manager doesn't necessarily
                    mean being high in position. That is something at Nvidia
                    that we always make very clear. There's a track for
                    individual contributors to focus on technical work, and
                    there's also the management track, which emphasizes on
                    people management, but that wasn't the case in my first
                    company. So, once you become a top engineer, naturally you
                    just become a manager. But they still expect you to continue
                    working on the technical aspect, and that becomes a lot of
                    pressure. So my style would be just let everyone else get
                    out of the way while I go in and fix the problem, and then
                    move on.
                  </p>
                  <p>
                    But at Nvidia it’s a little bit different, because I think
                    it's about people empowerment, and I've seen different
                    cases. So there'll be cases where maybe somebody just
                    doesn't have the technical details or the knowledge. Then
                    this is just something that I can work with the person to
                    come up with the resources, for example, to find the subject
                    expert, or to have a group of people just to learn together
                    and do brainstorming together. I've also seen cases when my
                    team members have personal situations, whether it's in their
                    marriage or there's some illness in the family that they
                    need to take care of. In these cases, we need to make sure
                    these people have the time that they need to deal with their
                    personal situation, while at the same time for me to be able
                    to find somebody to take over the job, and for them to be
                    able to not worry about losing their job. Because that is
                    the last thing you want to give to somebody who is already
                    dealing with a situation at home. So this is something that
                    has happened before, and recently we just had another
                    similar case, because his personal situation required him to
                    relocate to another country temporarily, and we helped him
                    through that process as well.
                  </p>
                  <p>
                    The benefit of focusing on people actually goes both ways.
                    As we show our support and our trust to our engineers, they
                    actually also return the favor. They also understand that,
                    okay, we're treating them really nicely as a human being. We
                    actually care about them and things like that. So now as I
                    compare my current team to how it was before, I think these
                    people are more willing to give their personal effort. That
                    becomes a mutual trust in the working relationship, so it's
                    not necessarily just one way or the other.
                  </p>
                  <p>
                    I think that is also tied to my Christian faith. As my
                    spiritual condition and faith matured, it helped me as a
                    person and therefore as a manager. Having a good culture at
                    Nvidia also helps make things easier. In my previous
                    company, the CEO is almost like the hardest working person
                    in the company. So when you have that kind of leadership
                    example, it makes it very difficult [to foster a culture
                    that values everyone’s life quality and a culture of
                    stability]. Versus in Nvidia, where most of the managers
                    that I know, from a low level manager all the way to our
                    CEO, we can see a lot of emphasis on family and taking time
                    off to spend time with the family. In fact, all our managers
                    are very aware of that. As we are a global company where
                    people are from many different time zones, we always
                    emphasize avoiding meetings during dinner time, when you're
                    supposed to be spending time with your family. So we try our
                    best to avoid meeting time between 6 p.m. and 8 p.m. Of
                    course there are cases when we have no choice, like when
                    there are too many time zones that you need to work with, or
                    maybe you have urgent issues, and we may have to do [our
                    meetings on an unfavorable time], but otherwise, by default,
                    we try to avoid that time. So it's really nice to have that
                    culture to begin with.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      That's great to hear about Nvidia's culture and sort of
                      how you've been inspired by it. Thank you for going into
                      detail about that. I want to take a step back and ask, how
                      did you end up pursuing your career?{" "}
                    </strong>
                  </h2>
                  <p>
                    My journey is kind of by accident, so that's why I really
                    believe it's tied to my Christian faith. I did my
                    undergraduate in electrical and computer engineering at Ohio
                    State University, and then I did my master's in electrical
                    engineering at Stanford, and then I did a master's diploma
                    in strategy and innovation from Oxford University. Let's
                    start from my undergraduate. To be honest, I came from
                    Indonesia, so unlike today's age, where there's so much
                    information with the Internet everywhere, I didn't have any
                    of that. So I didn't really know what I was going to do in
                    high school. I just knew that I loved science since I was
                    young, but I really didn't know what to expect. I didn't
                    even know what kind of majors were available. All I knew was
                    I wanted to work on something that has a lot of math or
                    maybe physics or chemistry, so any of those would do. Then I
                    decided that I wanted to come to the US, but I didn't really
                    know what to expect either. As I said, I didn't have a lot
                    of information, and I always thought that after graduating,
                    I'd go back to Indonesia. So my first thought would be like,
                    OK, what can I do with my degree when I come back to
                    Indonesia? In Indonesia, if I wanted to use my engineering
                    degree, it’d probably be in manufacturing. So because of
                    that, the original major I chose when I applied for college
                    was industrial system engineering.
                  </p>
                  <p>
                    After I came to the US, obviously I got more exposed to
                    information and started talking to people. But the reason
                    why I changed my major to electrical engineering was
                    actually out of my ego. It was just because one day my
                    friend made a joke. A simple comment like, oh, industrial
                    engineering is not really engineering. Not that I agree with
                    him, but at that time I was offended. I was like, what do
                    you mean? He said it's not really engineering because
                    there's not a lot of math or a lot of science involved, so
                    it's no wonder for you to get a 4.0 GPA. So I was offended.
                    I mean, he was joking and wasn't being serious, but I took
                    it very seriously. Then I was like “Okay, what major do you
                    consider to be the most difficult for engineering?” So he
                    then mentioned chemical engineering and electrical
                    engineering. So I was like, okay, between the two, I like
                    chemistry, so let me go to the Chemical Engineering
                    Department, and then I asked for advice for transfer. The
                    department said I could transfer, but I needed to take more
                    chemistry classes. Yet I didn't want to take more classes,
                    so I went to the electrical engineering major, and I asked
                    the same questions. “Oh, yeah, you can transfer all your
                    credit.” So I switched to an electrical engineering major,
                    and that's how I switched my majors because of my ego. I
                    didn't really know what to do with that major afterwards.
                    But thankfully, it turned out to be the right decision.
                    Because at the time of my graduation, it was actually very
                    difficult to find a job in the US if you majored in
                    industrial engineering. Even for chemistry or other popular
                    majors, it was also very difficult, especially for
                    international students. Interestingly, I graduated at the
                    end of 1999, and that was when the dot-com boom and things
                    like that, so computer science and electrical and computer
                    engineering were the hot majors.
                  </p>
                  <p>
                    I actually also changed my field within electrical
                    engineering because I was originally specialized in control
                    systems – I did my internship for that and that was also my
                    topic of my undergraduate honor thesis. But the quarter
                    before I was about to graduate, I was like, “oh, my
                    goodness, I hated this. I didn't want to do this anymore.”
                    Even though I got a lot of interview opportunities for my
                    work in control systems, I didn't want to. I wanted to do
                    something different, but I also didn't know what to do. So I
                    basically just randomly interviewed with companies. And
                    again, I made my decision out of my ego. You start to see a
                    trend here. I was like, okay, I got my degree in
                    engineering, and I was one of the top students, so I would
                    only do design work. I didn't want to do verification work
                    or any other work. Again, this is the wrong mindset now that
                    I'm in the industry, but back then designer jobs were being
                    thought of more highly. So there were some jobs which I just
                    declined the interviews, and it took me five months from
                    graduation to get my first job, and it was in CPU design.
                    Again, I didn't know what I was going to do with it. I just
                    wanted to be a designer anyway, so as long as someone was
                    willing to hire me as a design engineer, I would just do it.
                    So that's how I joined a startup company in CPU design, and
                    I fell in love with it very quickly. I ended up spending
                    eleven years of my life doing that. Until one day I was
                    like, okay, what else can I do with it? When the boredom
                    started to come in, things became just routines, and you
                    just didn't get the time to think and learn new things, I
                    started to ask myself again about my next step. That's when
                    I decided that I wanted something higher level than CPU
                    design. Because of my role as a director, I was able to see
                    different aspects and a lot of cases, in both the technical
                    side and the marketing side. I noticed that sometimes you
                    could have a really wonderful CPU design, but if the system
                    doesn't fully utilize the capability of the CPU, your
                    product still suffers. Another reason why I wanted to move
                    to the system level was because I felt that working on the
                    system level got me closer to the final product, so you can
                    actually think about how it contributes to the actual
                    performance in terms of the value that it can add to the
                    application and to the user. So those two were the main
                    reasons why I decided to move to system design, and that's
                    how I eventually came into the SoC design role at Nvidia.
                  </p>
                  <a href="#" id="collegetips"></a>
                  <h2>
                    <strong>
                      If you were able to talk to yourself from that time when
                      you were struggling making the decisions, what would you
                      tell yourself or change?
                    </strong>
                  </h2>
                  <p>
                    Actually I would not want to change a thing because I'm
                    happy where I am now. So if it took all this journey for me
                    to get to where I am today, I'm not sure if I want to change
                    it. But I would love to have more information to make a more
                    informed decision rather than this kind of quick decision.
                    But at the same time, I think it is part of life. That's the
                    nice thing about life. There's a chance for do-over, and you
                    never know. So I think it does not really matter that much
                    when you make a mistake. What is more important is that,
                    when you make a mistake, do you know when it's the time to
                    move on or to pivot to something else? Also, when wonderful
                    things happen to you, do you know if it's not your credit?
                    Like in my case, it's not my credit. Do you learn to be
                    thankful about that? And how to take advantage of this
                    fortunate opportunity and hopefully it can help benefit
                    other people as well. So I'm not sure if there's anything
                    specifically that I would like to change, but I think maybe
                    having a more informed decision is always better.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={decision}
                      alt="decision"
                    />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      Can you talk a little bit about why you got your master's
                      diploma in Oxford after working for a couple years?{" "}
                    </strong>
                  </h2>
                  <p>
                    Yeah. I mentioned the culture of my previous company, not
                    AMD, but the previous one. There was definitely a lot of
                    emphasis on your work and not so much on having a good
                    balance and integration with your personal life. And I've
                    seen cases where engineers don't get to speak up for
                    themselves and things like that. So one of the main reasons
                    why I wanted to do this was because I thought I could just
                    go to school and learn about management, and then come back.
                    Maybe I'm going to get into some executive role and then
                    change the culture from the top down. So that was kind of my
                    idealistic thinking. But in reality, that's not how the
                    company works, yet I didn't know that.
                  </p>
                  <p>
                    After graduation, I was excited with all these different
                    possibilities that I could go into, but this is where my
                    Christian faith came in. Each time when I started seeking a
                    new opportunity, there were just a lot of roadblocks and a
                    lot of situations that happened in my personal life that
                    stopped me from pursuing the opportunity. During that time I
                    actually did volunteer work in South Africa to learn how to
                    utilize my business skills, and how to build a Kingdom
                    business. That took me into a different journey where I
                    spent a few months training with other people and then ended
                    up with a two week journey in South Africa to work with the
                    local businesses. So I got distracted with something else.
                    And soon afterwards, something happened with my father in
                    Indonesia that caused me to spend four months in Singapore
                    and Indonesia with my family during that year as well. And
                    when I came back, when this opportunity came, I didn't
                    really feel at peace about going into that direction at all.
                    So there were a lot of situations that required me to really
                    quiet down and really try to listen to what my next move
                    would be. And then one day during my quiet time with God, it
                    was very clear God directed me that He wanted me not to
                    touch this for the time being. Would you be willing to obey?
                    So this was actually the year when I was going to be asked
                    to become a manager. This happened a few months before that.
                    When that message became clear to me, I was like, okay, I'm
                    willing to wait and see what happened. Even though at that
                    time I did not really understand, my commitment to Nvidia
                    was not 100%, and I was still planning to pursue something
                    else with my degree, I chose to obey and wait without
                    knowing what's going to happen. And then I started to
                    dedicate myself to my work and then see what's going on. A
                    few months later, that's when I was asked to take the
                    management role, and it became a decision point for me
                    because I needed to be fully committed if I were going to
                    manage the team. So again, after spending some time on it, I
                    decided to say yes and dedicate my time to it. I committed
                    to the team, and since that point on I've been very happy
                    and also learned the lesson. You may be able to force the
                    culture from the top, but unless you're working with the
                    people, you may not know what their real needs are. So I
                    feel very good about where I am today because I'm with the
                    people. I'm able to influence those on my team through my
                    position. In the end, it didn't turn out exactly the way I
                    thought it was going to be when I first decided to pursue
                    that degree. But at the same time, I think it brought me to
                    a good place today.
                  </p>
                  <a href="#" id="hstips"></a>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for Pursuing Similar Career Path</strong>
                  </h2>
                  <p>
                    Well, to me, life is a journey, so I think it's okay to not
                    know what you want to do or where your career is headed.
                    Very few people know exactly the one thing they're going to
                    do for the rest of their life. For many of us, I think you
                    venture to one thing and then you learn and grow. Maybe you
                    [will also discover that you] want to do something else [in
                    that process]. I think it's important to have passion and
                    commitment. In everything that you do, you need to have
                    passion. Without the passion, it's very difficult for you to
                    give the commitment and to give your best. Try to find the
                    intersection between your passion and your talent. You're
                    passionate about something, but if you don't have the talent
                    or the skill, it's going to be more difficult. There's a
                    place where you can find a good balance between them, and
                    that would be a good start.{" "}
                  </p>
                  <div className="text-center">
                    <img className="chronicle-pics" src={best} alt="best" />
                  </div>
                  <br></br>
                  <p>
                    Also, even if you originally think you want to stick to one
                    thing, you are still probably going to end up doing multiple
                    things, so think about how to have a strong foundation that
                    will allow you to move around. Sometimes it's harder to move
                    from one field to the other, so if you start with the most
                    difficult first, in my case, CPU design is arguably one of
                    the more difficult fields. So by starting my career from CPU
                    design, it's actually easier for me to move into other areas
                    within hardware development versus the other way around. So
                    allow that kind of flexibility and definitely take risks.
                    Experiment with different things, and don't be afraid of
                    that. Do give it time before you call it quits. Sometimes
                    people quit too early and not give it enough time, while
                    others spend too much time doing something that will not go
                    anywhere.
                  </p>
                  <p>
                    College, and school in general, is very good at teaching the
                    framework and the discipline for learning. But afterwards,
                    it's all you in terms of how you build upon that foundation.
                    From a career perspective, though, I think having knowledge
                    in specific areas is very useful. It's going to set you
                    apart from other applicants when you look for a job. So if
                    you can take specific classes, training, or certification
                    into the field or the area you want to go into, that's going
                    to help set you apart from other candidates. I also think
                    that collaboration and communication skills are very
                    important, because one person cannot solve everything. No
                    matter how good you are, even if you can, it's not going to
                    be scalable. You need to be able to work with other people,
                    be able to express your opinion, your view, and treat each
                    other respectfully.
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

export default FailEarly;
