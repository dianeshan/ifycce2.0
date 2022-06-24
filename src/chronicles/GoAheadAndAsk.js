import React, { Component } from "react";
import "../App.css";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";
// import ChroniclesHeader from '../components/ChroniclesHeader';
import path from "../resources/images/chronicles/Path.png";
import mission from "../resources/images/chronicles/mission.png";
import daniel from "../resources/images/chronicles/daniel.png";
import { Button } from "react-bootstrap";

class GoAheadAndAsk extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          {/* <div className="blue-container">
                        <ChroniclesHeader />
                    </div> */}
          <div className="main-page">
            <Container className="text-center">
              <h1>Go Ahead And Ask</h1>
              <h6 className="authors">
                BY JUSTIN CHOW &middot; RAY CHANG &middot; SELINA YANG &middot;
                NATHAN YANG &middot; YUCONG YANG &middot; HARRY SIO
              </h6>
              <h6 className="date">June 24, 2022 &middot; 15 min read</h6>
            </Container>
            <a href="#" id="introduction"></a>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={daniel}
                alt="Daniel's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. Daniel Ding is currently a software engineer in computer
                    aided design at Samsung Austin Research Center. Dr. Ding has
                    a PhD in electrical and computer engineering at the
                    University of Texas at Austin. Before joining Samsung, he
                    had six years of experience at Oracle as a hardware
                    engineer. In this interview, he provides insights on his
                    career, advice for future college students, and
                    philosophies.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe what you are doing right now, and
                      is there anything else you are currently pursuing?
                    </strong>
                  </h2>
                  <p>
                    For work, I&#39;m currently a software engineer, tech lead
                    in computer aided design at Samsung Austin Research Center.
                    We call the CAD. It&#39;s a software position in hardware
                    design, or an optimization research guy who is embedded in a
                    massive complex problem that may require software and
                    hardware knowledge at the same time. We develop, integrate,
                    and maintain CAD software platforms that optimize and
                    automate the design process in semiconductor products. In
                    this case, we are responsible for memories and custom
                    circuits like analog circuits, and RFICs (radiofrequency
                    integrated circuits), that are designed from circuit to
                    layout, manufacturing, validation, bring up and then the
                    cycle of new features or new validations that are received
                    through Silicon and the products. Right now, we&#39;re
                    focused on graphics processing units, GPUs that go into
                    Samsung&#39;s current and next generation phones, including
                    the folding phone. So you&#39;re going to see it coming in
                    even bigger batches this coming spring. What I love about
                    this position. As you can guess, it&#39;s a software
                    engineering position, but you need to understand the problem
                    enough to fix it. So as an analogy from the Fast and Furious
                    series, if you want a nice engine modification, you must be
                    the guy who&#39;s been at the wheels, who knows the engines
                    and who knows who your opponents are, live your life a
                    quarter mile at a time. So that requires you to learn a lot
                    of different things, and work with different people. And
                    that&#39;s really what I enjoy. I had a PhD from the same
                    field, but it wasn&#39;t my first subject matter. I popped
                    through several fields from undergraduate to master, halfway
                    PhD and then restarted on this current PhD. What I found out
                    is the versatility of learning new things, and how my
                    current field fits my character quite well. So that&#39;s
                    where my source of joy comes from. They train my
                    adaptability, and it is a field where they say a PhD is
                    training. If you have that training you could use it
                    anywhere, and I think research and development is naturally
                    a good field to do.
                  </p>
                  <h2>
                    <strong>
                      Can you talk a little bit about your journey to where
                      you&#39;re currently pursuing. How did you end up doing
                      what you do now?
                    </strong>
                  </h2>
                  <p>
                    From an overall perspective, there is the realization that
                    life is like a massive time bound optimization. If you look
                    at it from the beginning, you might gain some new
                    perspectives from every step. Now we will start from the
                    beginning, given the 2020 vision of hindsight, it was
                    influenced plus the choices you make as always, right? I was
                    born to a family of postdocs and PhDs, and my uncles and my
                    dad are all in engineering fields, some in chemistry, some
                    in petroleum engineering, very well educated. But I also see
                    the geekiness along the way and how that&#39;s become a
                    stumbling block when it comes to interacting with people or
                    being a funny or a humorous person. Eventually, the
                    education system pushed me towards an engineering path and
                    then within that path, I started off as a signal and systems
                    engineer. This is my undergraduate training thing – radar
                    imaging, satellite imaging, noise reduction, and high
                    advanced communication circuits and stuff. But it&#39;s
                    obviously something that just didn&#39;t work out with my
                    interest. Because those systems essentially go into missiles
                    that take lives. It&#39;s a military application. So I
                    transferred to image processing, which is just like facial
                    recognition these days. But at that time, after a few years
                    of research and development, I had to apply for UT Austin.
                    Circuit design was the hottest area at that time, so I came
                    here to the circuit design track, but then the circuit is
                    hardware and along the way I found that there is this
                    software application inside the circuit that&#39;s called
                    computer aided design. You have data structures, algorithms,
                    and a bunch of time bound optimizations for you to do. So
                    that took a couple of hops and eventually I found my PhD
                    supervisor Professor David Pan from UT Austin, and I did my
                    PhD for five years there.
                  </p>
                  <p>
                    And the interesting thing here is if you look back, it&#39;s
                    fair that everybody gets 24 hours a day only. So back to the
                    point that life is massive time bound optimization. In an
                    optimization problem, you have an objective that you
                    minimize or maximize, and there are also constraints.
                    Constraints means you can&#39;t exceed a certain value. If
                    you look at the variables, there is the job or school work,
                    and you got hobbies like sports, music, travel, etc. And
                    there&#39;s relationships, your friends and family, and
                    other stuff like transportation, getting stuck in traffic,
                    utility bills, and yard work. There&#39;s also
                    entertainment, social media, the time we spend sorting out
                    this massive information streaming into our phone, and
                    personal finance. Because of a highly inflammatory financial
                    situation, everybody needs to know something about
                    what&#39;s going on, right? And then there are new
                    opportunities with their cost, like finding a new mentor. If
                    you think your career needs a new boost, you may go find a
                    new mentor, spend time searching for a new job, or a new
                    certificate or maybe even an MBA degree. Therefore, the goal
                    right now is to maximize something subject to the constraint
                    that you pick a subset of what is, and they add no more than
                    24 hours a day. Also, for your health, you shouldn&#39;t
                    spend less than 6 hours sleeping. They are all accounted for
                    and therefore time is very efficient. It needs to be made
                    very efficient, and that comes back to automation and
                    optimization. And that&#39;s sort of what we do in hardware
                    design. If a thing is human labor intensive, then they ought
                    to be taken care of automatically by the machine because
                    they do things much faster. And just like all the efficient
                    software we use on our phone, they help us reply to emails
                    or sort out emails, filter out junk, and then recommend
                    Netflix movies to your liking so you don&#39;t spend most
                    time searching. And I hope that&#39;s a new perspective for
                    the young students who are at school and are considering
                    entering school, because if you quantize these variables,
                    you will see lots of time wasted on things that should have
                    been done much more efficiently and therefore you have a
                    better opportunity to see beyond the horizon and plan.
                  </p>
                  <h2>
                    <strong>
                      Is there any driving force behind what you do and what you
                      pursue personally? What made you want to pursue the field
                      that you currently are in?
                    </strong>
                  </h2>
                  <p>
                    Sure. I think the work that we do today should be
                    sustainable for the foreseeable future. So how that pieces
                    together is software, hardware, and all the AI systems that
                    will be pieced together in that will be included in
                    basically everything that we see in our life. Very soon this
                    will be common sense that we must understand. And for me,
                    hardware automation is something that&#39;s going to be one
                    of the building blocks there. That&#39;s why you see all
                    these what we call vendor companies. You heard of Ancestors,
                    and then there&#39;s Cadence, Synopsis, and Mentor Graphics,
                    which is now simply design automation. They build tools that
                    help you build hardware much more efficiently and the
                    semiconductor process has scaled so fast that we can now
                    build much more with much less cost. So that&#39;s where the
                    trend is. If that trend keeps going at a certain point, if
                    not already, you couldn&#39;t keep up with the demand in the
                    work involved to build the system. What’s important here is
                    to smartly automate, and then use AI to build AI systems,
                    and the next step will be hardware that is able to build
                    hardware, and then a software that is able to write software
                    itself. And then who knows what the singularity of
                    technology may be would happen and no one can believe how
                    that would look like today. But there is a bigger picture
                    here. One of the building blocks is understanding software
                    and hardware, how they work and how they optimize together.
                    And I believe computer design is one of the areas that keep
                    you sharp because you learn new things all the time before
                    you can solve the challenges and even before you can
                    identify the weak spots. I think it&#39;s a very vibrant
                    area, not in the sense of the new companies that come out of
                    it, but in the sense of really being at the crossroads of
                    many things. It&#39;s a very good spot for career
                    development.
                  </p>
                  <a href="#" id="collegetips"></a>
                  <h2>
                    <strong>
                      What would you recommend for college students if
                      they&#39;re looking to going into a field that is centered
                      around design work, centered around hardware, software
                      engineering, all the three fields that you sort of
                      connected? Where do you think their starting point should
                      be?
                    </strong>
                  </h2>
                  <p>
                    That&#39;s a good question. I think every person&#39;s path
                    can be different. And the concise way to put that is we got
                    this principle. If you want to achieve happiness or personal
                    inner peace, you need to be able to answer the question of
                    who you are, where you are, and where you want to go. No one
                    else can decide that for you. Like me, I&#39;m not like a
                    super extroverted person and if I pretend to be one, to the
                    extent I can get an Oscar, I&#39;m not going to be happy
                    even if I can. So you need to know who you are. You also
                    need to know where you are. Am I at a stage of life were
                    taking risks costs nothing, so I can just explore anything I
                    want? I want to explore whatever the hottest topic currently
                    is. I want to listen to the most active entrepreneurs and
                    venture capitalists ,and where the big money is moving, and
                    I want to be there just as a young guy full of potential and
                    learning potential. Or am I really at a point with lots of
                    responsibilities already, and kind of established track, and
                    looking to jump track comes with its own risk? You could
                    leverage the skills you already have and choose to stay
                    within your strength zone or walk out of your comfort zone.
                    And then the last part is where you want to go. Is it
                    something that you think would serve humans as a human race
                    together? Maybe it&#39;s medicine study because of COVID.
                    Maybe it&#39;s really communication because miscommunication
                    gets more common. Or is it something else that has a grand
                    purpose? Maybe it&#39;s education. At the end of the day, we
                    need that because at a certain point, nothing is easy.
                    You&#39;re going to go through a stage where you feel like
                    you really can&#39;t take another day, but after another
                    day, you&#39;re a different person. You just need a little
                    bit more motivation to really break through that stage. And
                    so it boils down to these three things.
                  </p>
                  <br></br>
                  <div className="text-center">
                    <img className="chronicle-pics" src={path} alt="path" />
                  </div>
                  <br></br>
                  <p>
                    Also remember, time is fair. Everyone only has 24 hours a
                    day. Even the billionaires in the world couldn&#39;t get
                    another minute. And then number two, ask where you want to
                    be and then look around if you&#39;re at school. Remember,
                    school is not just where class is taught. It&#39;s where the
                    greatest minds of the education ecosystem meet – now
                    it&#39;s virtually connected because of the pandemic. So, go
                    there as a place to meet new opportunities. If it&#39;s
                    work, look for the people you want to be like in five to ten
                    years, and then learn from them early on and see how they
                    think, because a lot of times, decisions you make are who
                    you are. You can&#39;t change that, but you can change who
                    you are based on the information and the context. Finally, I
                    think there&#39;s no definitive answer. We can find peace
                    anywhere. If you have family duties, it&#39;s really a
                    complex situation and therefore try to reflect and have that
                    formula that you can find your inner peace that no one else
                    can take away. So that&#39;s really what it is. Something
                    specific for a school student, start with one thing and do
                    it extremely well because many times opportunities would
                    lead you somewhere else. Rather than just trying to find
                    what you love for so many times, why don&#39;t you just get
                    something nicely done first, regardless of what that is.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      What would you say to a college student who is going
                      through the transition phase, leaving a field that they
                      thought they would enjoy, but are ultimately moving on to
                      something that seems like it could be more applicable to
                      what they want to do as a career?
                    </strong>
                  </h2>
                  <p>
                    That&#39;s a very good question. I think it can be very
                    tricky, but I think in the interdisciplinary area, there is
                    to provide resources for people to have a synopsis of what
                    it is like and what it would take in the other field. There
                    are testimonies you&#39;re going to see, maybe role models
                    or someone you want to be. There are also people before you,
                    and you can check with them and ask for advice. With all
                    these resources, I would suggest consulting with your track
                    adviser because they know all the latest buttons and bells
                    and whistles in the field. You&#39;ll be surprised at what
                    you get if you just ask. Go ahead and ask. The second point
                    is you should prepare to put down quite a lot of hard work
                    because it may not be an easy transition. What I mean by
                    that is twofold. First, you need to protect yourself because
                    you still need to maintain your GPA. If something goes wrong
                    in the middle of the semester, like if you really cannot
                    handle that much or you&#39;re overly committed, taking
                    multiple courses from different tracks in the same semester
                    and being chased by the projects, you need to have a stop
                    button. I think in certain schools it is by mid-semester you
                    need to transfer from grade-based to pass or fail based to
                    avoid an F on your transfer, or else you&#39;re going to be
                    on probation. So those are the rules you must understand
                    beforehand. It&#39;s like the margins. If you&#39;re in the
                    financial sector, you need to know your risks. These are the
                    downsides you must protect. The second is the upside, which
                    is the work that you need to lay down ahead of time. Plan
                    your course works accordingly. For example, in a typical
                    integrated circuit course, we have different stages of the
                    design. You learn them, and then you learn maybe analog
                    design and eventually very large-scale integrated circuits
                    where you see all those design tools like the ones we
                    develop in use, and then you will use them to build like a
                    small-scale processor chip. [If you know these stages ahead
                    of time,] maybe you can put some of those skills in the
                    summer before because it&#39;s going to be the same project
                    taught by different TAs. They have their different flavors
                    year to year, but the majority is the same. You can check
                    the course website even if you did not choose the course,
                    and maybe save the project before they take down the
                    website. If they have a rank, you can save the top three
                    best results and then maybe talk to them and see how they
                    did it. What is the trick? How much time did they use? These
                    preparations really get you to the right spot when the time
                    an opportunity presents itself. In general, I think you have
                    confidence in yourself because computer engineering and
                    electronic engineering aren&#39;t all that different. The
                    fundamental skills are similar, but it&#39;s the
                    infrastructure that&#39;s different. Maybe it’s
                    micro-architecture compared to circuit design or how to
                    solve differential equations. Or maybe you need to write
                    certain packages in C++. It&#39;s a lot of work, but if you
                    slice it and do it one at a time, it is not rocket science.
                  </p>
                  <a href="#" id="hstips"></a>
                  <h2>
                    <strong>
                      Can you talk a little bit more about tips for future
                      college students who are maybe looking to enter college,
                      but don&#39;t really know whether engineering is the right
                      track for them or if they just hold an interest in it?
                      What advice would you give to those students who are
                      looking to go to college, looking to study CS, looking to
                      study something engineering and just don&#39;t really know
                      what to expect?
                    </strong>
                  </h2>
                  <p>
                    That&#39;s a very tricky question. I think at a certain
                    point my kids will start asking that question to me. because
                    to me, it&#39;s highly driven by trends. I can imagine that
                    when I was in senior high school, I didn&#39;t know what
                    civil engineering really means or industrial engineering
                    really means. It sounds industrial, but what it does is very
                    different. And I didn&#39;t know that electrical engineering
                    in my track particularly meant radar imaging, which if I
                    knew, I wouldn&#39;t have gone for it. But I know
                    there&#39;s a value in data. If it&#39;s an important enough
                    question, many people would have asked it. You could just
                    search it up, because the number one thing you could find is
                    all the nice chronicles that you guys have already put out
                    there. Number two is in case it&#39;s very deep
                    philosophical or the questions that need sound arguments,
                    Google would have pointed you to Quora. If you log in, there
                    are tons of experts there to ask, and if you are lucky
                    enough, you can make a few very influential friends.
                    Finally, if you&#39;re going to college, you have all that
                    it takes to take risks. It doesn&#39;t matter what you pick,
                    you can pick one, just start at it, but pay attention to the
                    friends around you. What is happening? What are some of the
                    hottest trends? Is it AI? Is it software writing software?
                    Is it a self-driving car or is it really living on Mars?
                    It&#39;s going to be changing depending on the time. For
                    every generation the mission is different. But stay
                    adaptable, stay flexible, and don&#39;t be afraid to just go
                    ahead and do something again. Take one thing and do it the
                    best and you will be led to the next opportunity. That&#39;s
                    really what I believe, especially if you&#39;re that early.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={mission}
                      alt="mission"
                    />
                  </div>
                  <br></br>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      What are sort of the hottest trends you see right now that
                      you think most engineers, if not all engineers, should pay
                      attention to or should at least understand in a general
                      knowledge sort of sense?
                    </strong>
                  </h2>
                  <p>
                    In general, there are two big things. The first thing is in
                    our career as an engineer, I think we write software right
                    now to design hardware, so we call it hardware design
                    automation. I look forward to the time when we can automate
                    software design where you write a piece of software and what
                    it does is write software. So there won&#39;t be any
                    software engineers, just software architects. You say on the
                    top level, I want a pipeline of this and that, and time
                    should be less than this. The memory shouldn&#39;t be more
                    than that because I deploy on maybe 5% of the critical
                    servers in town and that should be enough budget wise, and
                    they just give you a certain implementation. So here is your
                    platform and then you can use it to do other things as a
                    service. What we take into those challenges is the system
                    design perspective. If AI is very good at implementing
                    miscellaneous details, then we should be able to make the
                    strategic decisions. And that requires good knowledge in a
                    broad range of subjects and the ability to learn fast, and
                    the curiosity to think that you should know that much.
                    It&#39;s going to be very important. The second thing is
                    that we live in a time that is unprecedented in terms of
                    financial practices and inflation. Knowing how financial
                    engineering is done and following the news of this few
                    percent thing, like a ten year treasury yield. Those are
                    numbers that really affects all of us, so it&#39;s going to
                    be critical as well.
                  </p>
                  <h2 className="text-center">
                    <strong>
                      Critical of what aspects, do you mind me asking?
                    </strong>
                  </h2>
                  <p>
                    I think just look at the trend we started at scaling of
                    transistors. There was an analogy way back, that the
                    transistor process was getting smaller and cheaper. Now, if
                    that were the case in the auto industry, a Tesla would cost
                    $1,000 like a laptop. But that was in the beginning. The
                    scaling factor done wrong is the reverse, which is in the
                    case of all the money that we printed. Knowing that would
                    change how we think about work- life balance, and how we
                    really put knowledge to our advantage rather than sticking
                    to one area but losing the big picture that we call life.
                    Imagine what life could have been one or five or ten years
                    ago. With that framework of knowledge, go back to do that
                    area that you are focusing on now. That would make a lot
                    more sense than not knowing where we are. This comes back to
                    the second point. Know yourself, know where you are, and
                    know where you&#39;re going to. We wouldn&#39;t know where
                    we are if we don&#39;t know the big picture. Finance is a
                    very important part of that picture. And then there&#39;s
                    technology as well as education. That&#39;s a very great
                    point to sort of summarize a lot of what you were saying
                    earlier, not just specifically to the financial industry. I
                    know that&#39;s of great importance at the time being during
                    the pandemic, but also just the key pointers of knowing
                    where you are, knowing what your passion is, and knowing
                    where the industry is going to go.
                  </p>
                  <h2>
                    <strong>
                      Do you have any concluding thoughts about what we shared,
                      and ultimately want the readers to take away?
                    </strong>
                  </h2>
                  <p>
                    I appreciate your efforts. I think you are doing a great
                    thing for the audience that they may not realize, but the
                    team, including yourself at CCE, I know there are lots of
                    visionaries driving it. They put down the work as part of
                    their passion. I admire that and I hope I could put more
                    time into it in the future as my personal situation gets
                    better. But really my best wishes. I think this future ten
                    to twenty years is going to be very exciting, and we face
                    lots of problems, but it&#39;s very exciting to see
                    entrepreneurs and pioneers in all kinds of fields, just
                    making their names, making their impacts. If you don’t prick
                    up your ears, you could have missed them. So it is good that
                    you don&#39;t need to search for them anymore, because
                    they&#39;re right there. So being early in life is that you
                    have more time back to the time bound and more time,
                    therefore more ambition, more grander goals. My best wishes
                    to the new generation. I hope they&#39;re much better than
                    ours and then their next generation will be even better, and
                    then at some point we&#39;ll solve that problem.
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

export default GoAheadAndAsk;
