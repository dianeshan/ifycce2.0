import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import john from "../../images/chronicles/john.png";
import resource from "../../images/chronicles/resource.png";
import softskills from "../../images/chronicles/softskills.png";

class CertificationHelps extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Certification Helps</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; SELINA YANG &middot; SABRINA TENG
                &middot; RAY CHANG &middot; NATHAN YANG &middot; HARRY SIO
              </h6>
              <h6 className="date">Aug 13, 2021 &middot; 15 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={john}
                alt="John's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    John Cheung has extensive experience as a software engineer,
                    starting his career in 2004 at Affidia Systems, and
                    currently finding himself at Intel Corporation. Since
                    graduating from UCLA in 2002, Cheung has worked in numerous
                    environments where he learned how to adapt and nurture his
                    professional skills. After living much of his life in
                    California and specifically, the Bay Area, Cheung recognizes
                    the importance of giving back to his community. As a mentor
                    with CCE, he is able to share his knowledge with new
                    generations of young professionals.{" "}
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe your profession in your own words?
                    </strong>
                  </h2>
                  <p>
                    My profession right now is working at Intel as a software
                    test engineer. Part of my primary role is to make sure the
                    hardware and software works properly before the release.
                    Prior to Intel, I worked at a startup company called
                    Barefoot Networks, and then before that, I was at Cisco for
                    about 11 years. All these companies have a common industry
                    and theme, which is network equipment. Basically, the
                    products are related to testing on the router and switches,
                    whether it’s in the enterprise network or in the data center
                    network.
                  </p>
                  <h2>
                    <strong>Why did you choose to pursue this path?</strong>
                  </h2>
                  <p>
                    I went to high school in Cupertino, and my high school had
                    very famous alumni. It mainly included Steve Jobs, so we
                    used to have computer labs full of Mac computers and lots of
                    tech donated by the Apple Company. And believe it or not,
                    it’s also because I watched a movie about hackers. I thought
                    it was really cool to help defend the network and be the
                    network police. All of those are why I started looking into
                    computer science, particularly the networking field. But
                    gradually I felt that maybe it was too overwhelming to be a
                    network police, and I found my other interests in creating a
                    solution for customers and how all the devices are connected
                    to each other, from the server to the Internet. So after
                    graduation, I went to take a Cisco certification course to
                    learn all the different networking protocols. For my first
                    enterprise job, I landed with Cisco. That's how I started to
                    learn more about the details of how to test different
                    protocols, as well as how to use the computer science
                    knowledge that I learned from university to help with manual
                    testing.{" "}
                  </p>
                  <p>
                    Manual testing involves a lot of time and human resources,
                    and lots of times that testing could be repetitive. Let's
                    say a new feature gets introduced. We usually would go
                    through the testing cycle for the new feature, but
                    eventually in the future we would need to test it across
                    different new releases, so that's when we start needing to
                    automate the testing. Early on, we used the TCL language for
                    automation, but now the industry standard has moved to
                    Python automation. It helps a lot because it could be the
                    same protocol, but we are testing against different hardware
                    or different software releases. So once we can have the same
                    test case or test methodology, for the automation and
                    script, we could put in a different device or different
                    software release under test, and make sure that the same
                    quality or the same profile works.{" "}
                  </p>
                  <h2>
                    <strong>
                      What are some differences that you noticed along with the
                      change in programming language?{" "}
                    </strong>
                  </h2>
                  <p>
                    Going from TCL to Python is like going from C to C++.
                    Traditionally lots of programs are written in C or in a more
                    linear style of programming, and then eventually it's
                    improved to an object-oriented type of programming. TCL is
                    very easy to learn because its main purpose is for
                    scripting. It's very simple, especially for CLI (Command
                    Line Interface) testing. Basically you send a command and
                    then you get some output. Then from the output, you parse
                    through different interesting values and keys, and make sure
                    that the output is as expected. Now, why did it change to
                    Python? Python is a newer language and it's object-oriented.
                    It has the advantage of more re-usability of the code. For
                    example, there may be one feature you can write into the
                    same object, and then you can provide different functions to
                    test from the protocol itself.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={resource}
                      alt="resource"
                    />
                  </div>
                  <h2>
                    <strong>
                      How much of what you learned in college was applicable for
                      your job?
                    </strong>
                  </h2>
                  <p>
                    I’d say that now I use about 20% of the actual knowledge I
                    learned in university, like from textbooks and lectures. But
                    how to look for resources, how to look for information;
                    those are the skills I still use today. In university, you
                    learn the new technology and then you learn how to gather
                    information, whether it’s from your professor, from your
                    friend, or from the Internet. That skill is actually much
                    more important than remembering all the different protocols
                    or memorizing the formulas from the textbook.
                  </p>
                  <h2>
                    <strong>
                      Do you have any suggestions on how someone can take action
                      and develop this skill?
                    </strong>
                  </h2>
                  <p>
                    At the first job I had in Cisco, I was mainly doing network
                    testing. But my boss actually asked me to write a tool to do
                    a weekly status report, so the team could fill out the form
                    and install that information in the database. That was
                    something that I didn’t expect to do as a network tester.
                    But the Bible says that we should honor those who are in
                    leadership positions, and be humble and obey, as long as
                    it's within God's word. So at that time, even though I felt
                    that it sounded like a janitor's job to do this type of
                    framework because it's not a part of my job description, I
                    still went for it.{" "}
                  </p>
                  <p>
                    So basically I went on Google and saw how to set up my SQL
                    database, and how to write a Perl script, which I hadn’t
                    learned before, and eventually built a tool to help with the
                    test status report. In testing, we also have a bug report;
                    whenever there is an issue with the code, we have a bug.
                    Then there's also some bug trends that we have to analyze.
                    So with that tool, it also helps with analyzing the incoming
                    or outgoing bug trend, which helps my manager to plan better
                    for the next release or project. It also helps him to better
                    know how to allocate engineering resources in different
                    projects.{" "}
                  </p>
                  <p>
                    From that experience, I learned this language and how to
                    build a database. It actually helped me to bless I Fly Young
                    when there was a need, by using that skill to work on the
                    website. So I feel that it was an experience where I learned
                    to be humble and to not complain about what the manager is
                    assigning me to do. You never know what skill or knowledge
                    you may learn from that experience, and if you may be able
                    to use it for your next project, next job, or even in
                    serving other people.
                  </p>
                  <h2>
                    <strong>What is your favorite aspect of your job?</strong>
                  </h2>
                  <p>
                    To be honest, at one point in my career, I felt that a
                    career was just a job. Sometimes I felt that as long as I
                    could finish my assignments and finish all my tasks, that
                    was it. So I had been struggling to find a passion in the
                    career itself. In the first job that I had, I had a lot of
                    passion; I wanted to pick up all these new technologies, I
                    wanted to learn all the things that I had not learned
                    before, I wanted to be the most efficient person in the team
                    and help the team be successful. I’m not sure when, but at
                    one point, that job had just become a job. It felt more like
                    completing a task and taking the money to feed the family,
                    and the days just went by.
                  </p>
                  <p>
                    Another point is that I usually feel that I don't want to
                    spend much time at my job, because I know that I want to
                    serve God more. So I may use some of the work time to maybe
                    prepare for Sunday school or home group messages, or to just
                    get in touch with people. But I think in one of the
                    teachings, I learned that we should not separate our faith
                    from the [workplace], and that we should also be excelling
                    in our [workplace], in our career, instead of just being a
                    normal person that works.
                  </p>
                  <p>
                    Joining CCE has also helped me because I've always refused
                    to take responsibility. I feel that it's really hard for me
                    to take the lead; because once you try to lead and be in a
                    leadership position, whether in work or at church, there
                    will be some responsibility, or other people that rely on
                    you. But I feel that after joining CCE, my mindset has
                    changed. I feel like God wants to raise me up. I guess he's
                    trying to teach me to be a leader, not just because the
                    position is a promotion, but it's more about being able to
                    train more leaders or to train more people where I can pass
                    on my experience to them.{" "}
                  </p>
                  <p>
                    I do feel that there have been some changes within the last
                    few years. Even though I have not put in so much effort at
                    work, for some reason God still blessed me and raised me up
                    into the team leader position. I guess it's also because I
                    have a passion to help people, so whenever my teammates come
                    ask me any questions, as long as it's within my reach and as
                    long as I can answer them, I will try to go out and help
                    people.
                  </p>
                  <p>
                    In the past, I never wanted to lead a project because I
                    refused to take that responsibility, but I feel that God
                    wants to change me. Gradually, he wants me to take more
                    responsibility and to train or mentor more people so I can
                    be a blessing for the teammates. And then also in CCE,
                    that's where I got called to be a mentor to the younger
                    generation through my experiences, whether in career or
                    through technical things like the different languages that
                    you asked about. I feel that God has a plan in everyone's
                    career, for it not just to be a job where you make money and
                    feed your family, but there's purpose in a career to be a
                    blessing to other people.{" "}
                  </p>
                  <h2>
                    <strong>
                      Could you elaborate more on how you became involved in CCE
                      and what your role is?
                    </strong>
                  </h2>
                  <p>
                    So there was one conference that I attended, called the
                    Level Up conference hosted by @Cloud. I'm not sure why I
                    signed up. I think that it was during that period of time
                    when I had a mindset change, when I started to feel that I
                    wanted to bring my faith into my career and excel in my
                    career. So that's why I signed up for the Level Up
                    conference. During that conference, I saw lots of people who
                    shared on the stage. They did have a passion for their
                    career, but they're not consumed by their career. They
                    actually use their career experience to bless all the people
                    who are younger and fresher in their experience like I do.
                    So that's when I saw that there's a need for giving and
                    receiving, and this culture really resonated with me.
                  </p>
                  <p>
                    So the track that I joined in @Cloud, the Level Up
                    conference, is called Apostle Leadership, and it was led by
                    Shengming and another brother. It was that time when I saw
                    Shengming’s vision about the three ducks. If you saw the
                    picture on either his presentation or his icon, there are
                    three ducks. So there's one in front, there's one in the
                    middle, and then there's one at the end, walking in a
                    straight line. And he asked, “Who is the leader in this
                    picture?” It could be the one that's leading in front, it
                    could be the one in the middle, or it could be the one
                    that's sitting in the back. So I felt that that was a very
                    interesting discussion, because I would typically walk right
                    at the very end, because I like to oversee everything, and I
                    don't like to walk as the first one. I felt that during the
                    discussion itself, God was also telling me, “Why don't you
                    try to lead from the front?”
                  </p>
                  <p>
                    So that's when I started to pray for courage, whether it’s
                    in the mentorship position or taking the lead in part of the
                    vision that CCE offers. I do feel that my passion is to help
                    people and to serve the younger generation, even the
                    children themselves, and that's why I started to join the
                    CCE meetings and the platform.
                  </p>
                  <p>
                    When Shengming asked me if I would like to be part of the
                    Career Professional Council, I thought it was from the
                    supporting position, because I was mainly doing I Fly Young
                    support from the back end, like the G Suite set up and
                    everything else for the online meetings. But I guess
                    Shengming also saw something in me when he asked if I wanted
                    to join. He saw my hesitation since I don't want to lead in
                    the front. But I think that's exactly what God wants to mold
                    and work on, and therefore I prayed about it and decided
                    that, “OK, yeah, maybe I should try and take on more
                    responsibility.” I believe that's why God created me to have
                    a passion to work with the younger generation and blessing
                    them. I believe I have a lot of experience that I want to
                    share, and I have a lot of skills that I could pass on to
                    people who are less experienced, from either a career or a
                    technical perspective.
                  </p>
                  <h2>
                    <strong>
                      What are some common or recurring problems you see in the
                      younger people you mentor? Do you have recommendations on
                      how to address them?{" "}
                    </strong>
                  </h2>
                  <p>
                    Yeah, even during the CCE meeting, we shared about this.
                    There are lots of mistakes that more experienced career
                    professionals have made before, and we would like to see the
                    younger folks not making them. For example, I used to be
                    very shy in the beginning, and I used to not like to make
                    any comments at all, but I gradually felt that it's not
                    healthy for me or for the team because people would not be
                    able to know what you're thinking or how to plan for things.{" "}
                  </p>
                  <p>
                    Let’s say a project is delayed because of some technical
                    challenges, but I don't want to speak out, I don't want to
                    raise a flag and say “Oh, I'm having some issues, I need
                    help.” Some people may just like to not say anything, but
                    they will just try to figure things out themselves and try
                    to be a stronger person, because no one wants to show their
                    weakness. That's something that I would recommend to younger
                    people, that it's okay to work as a team. Working by
                    yourself will carry you somewhere, but it will not carry you
                    all the way. Eventually, you will have to work with a team,
                    eventually you will have to work with cross-functional
                    teams. So the earlier that you can openly network with other
                    people, even people from other teams or companies, the
                    better.
                  </p>
                  <p>
                    The other aspect is probably from the interview perspective.
                    We do see that interviews are a very challenging topic for a
                    lot of new grads, and that's why we had those CCE internship
                    workshops. They don't know where to start to prepare or
                    don't know how to prepare. As you spend more time in your
                    career, you change from being an interviewee to an
                    interviewer. You see different angles, and then we can share
                    what the company or interviewer wants to see from an
                    interviewee, whether it's communication skills, how
                    confident you are, or if you're generally interested in the
                    company or the positions. So I think focusing on these
                    aspects will definitely help fresh grads or people who are
                    starting to look for jobs.{" "}
                  </p>
                  <h2>
                    <strong>
                      Do you have any thoughts or suggestions on finding a
                      suitable mentor?{" "}
                    </strong>
                  </h2>
                  <p>
                    It's very interesting; I myself have not had a mentor. I do
                    try to follow whoever is assigned as a leader for the
                    project or even assigned as a leader in the church. But like
                    I told you before, I have been trying to figure things out
                    by myself. The good thing is that it helps me to strengthen
                    my skills in Google searching; I become more efficient in
                    looking for information. But it also isolates me to a
                    project that I can only do by myself, and there are some
                    projects that need a team to accomplish, ones I wouldn't
                    have the time, resources, or manpower to do on my own.{" "}
                  </p>
                  <p>
                    I also try to learn from people that I admire, whether it's
                    at work or at church. One thing we talk about at church is
                    discipleship. It's important for a person to be a disciple
                    as well as a teacher at the same time, because once you
                    become a teacher, you know how much you don't know. Being a
                    mentor also helps me understand which area I need to build
                    up more and strengthen. If I'm hungry, I won’t be able to
                    feed other people in need, but if I can grow my crops and
                    grow more fruit, then I have a lot more resources and I can
                    provide for more people.
                  </p>
                  <p>
                    Finding a good mentor depends on the individual. I would
                    suggest finding someone that you feel mutually connected to
                    and also someone that you look up to, because you know that
                    you'll be able to build a good relationship with that
                    person. But more importantly, once you are a mentee, I think
                    it's also good that you become a mentor for someone else at
                    the same time. That way you will know what you should seek
                    from your mentor, you’ll know how much you have learned and
                    gained, and you can provide for the mentee that's following
                    you.{" "}
                  </p>
                  <p>
                    So back to that 3 ducks example. If you’re the middle duck,
                    you have someone to follow and you’re leading someone from
                    behind as well. If you keep receiving and learning, but you
                    don't actually teach or pass it on to other people, you
                    never know if you have that knowledge or that skill. But
                    once you actually try to teach or train another person, you
                    understand whether you know that subject matter thoroughly
                    or not. Once you get into the mentor position, once you
                    start to teach or pass on knowledge, you start to know what
                    area, skill, or personal relationship you still need to
                    equip more. That's when you know that you also want to have
                    a mentor to help you out with those areas.
                  </p>
                  <h2>
                    <strong>
                      What are your views on getting certifications? How
                      important was your Cisco certification to your job, and
                      how beneficial was it to your learning?
                    </strong>
                  </h2>
                  <p>
                    Studying for certification gives you a goal, whether it's
                    some skills you want to have, or certain technology you want
                    to learn. It could be a Cisco certificate, some courses you
                    take on Coursera, or maybe some other application, like
                    Amazon AWS. It’s more practical in a way, since you can put
                    it on your resume. That would definitely help in getting the
                    first job or a very skill-specific job, but as you become
                    more experienced in the industry, those certifications
                    become less relevant. As you become more experienced in the
                    industry, a lot more will be about how you networked with
                    your previous colleagues and your reputation from a previous
                    project or company. That is actually more valuable than
                    certification or skills themselves.{" "}
                  </p>
                  <p>
                    For example, for the start-up job that I landed in, I didn't
                    actually look for it on a job site; I was contacted by
                    another software developer manager. I worked in the test
                    team and he worked on the software development as the
                    director. So he saw that I was doing automation of a scaled
                    testbed involving lots of servers. I used a clever way to
                    automate that process so that it saves time configuring the
                    different servers to setup or test with that amount of test
                    gear. He was really impressed with that project, so when he
                    went to a startup company, I guess they were trying to look
                    for software test positions, and he thought about me. He
                    reached out to me on LinkedIn and also contacted me on the
                    phone. That's how I landed my first start-up job, and
                    eventually it was acquired by Intel.{" "}
                  </p>
                  <p>
                    Certification helps for concrete skills, and also helps for
                    landing may be your first or second job, but at the end of
                    the day, as you grow more experienced and as you work in
                    different projects and different companies, the networking
                    aspect becomes more important. It's all about who the people
                    you know are and what your relationships with different
                    teams and different colleagues are.{" "}
                  </p>
                  <h2>
                    <strong>
                      Since you've worked at a startup and also later at Cisco,
                      what do you think is the difference between startup
                      culture and corporate culture? Which one would you
                      recommend?{" "}
                    </strong>
                  </h2>
                  <p>
                    It depends on the personality. So I started at Cisco,
                    working in a large corporate company, and then I went to
                    Barefoot Networks, a startup company, and then they got
                    acquired by Intel, which is also a large corporate company.
                    When you’re working in a large corporation, a lot of
                    processes are already defined; there's a typical way of
                    doing things, and there are already standard tools for doing
                    your job. I guess it’s like working in a factory; you get
                    assigned a station, then you learn how to do the job
                    function, and how to control the equipment and the device.
                    You're at a position and then just let things run; I feel
                    that's how corporate works. If you try to introduce a new
                    change or new processes, it typically takes a much longer
                    time than at a start-up company. It will also take a lot
                    more effort to change the company culture. I think it's
                    geared towards people who want a more stable job or who
                    don't like a lot of changes in their working method. They
                    don't want to change anything; they just want to work.
                  </p>
                  <p>
                    But for working in a startup company, you have to be someone
                    open to do anything as needed. A lot of time in start-up
                    companies, the process is not defined, there's no
                    well-documentation. You often need to evaluate new tools or
                    open source tools. You may spend a lot of time researching
                    tools, equipment or products, looking for what would work
                    well with our own product. So working in a startup is very
                    dynamic, and exciting, because you are constantly learning
                    new things. Being in a startup company also means that you
                    work in a much smaller team, a smaller company, so you
                    actually get to know a lot more people than in the corporate
                    world. Maybe you could even talk to the CEO and have lunch
                    with them. So I see that for a startup company, it's much
                    better for people who are more ambitious and open to a
                    dynamic work environment, and also for people who like to
                    have daily challenges, who are not afraid of evaluating
                    different things. So even if you were like a software test
                    engineer, you may get assigned to do some other things that
                    are not in your job profile. I actually learned more about
                    the software development process in a start-up company than
                    in a corporate company, because sometimes I have to also
                    work from that perspective before I can type the code.{" "}
                  </p>
                  <p>
                    But startup companies also may not be as stable, and the
                    benefit may not be as good. In Silicon Valley, it's a common
                    saying that only 1 out of 10 startups will work out, so you
                    only have a one in ten chance of succeeding.
                  </p>
                  <p>
                    Even so, I definitely recommend to younger people that if
                    they want to try out a startup company, may as well try it
                    as early as possible, because you have a lot less of a
                    burden, whether it's a financial burden or family and kids
                    burden. You get to grow a lot faster than in the corporate
                    world, because you keep on absorbing new skills and you're
                    much closer with your colleagues. You may even get to know
                    the CEO, why they had the vision to create that company or
                    develop that type of product or technology. So it's
                    definitely very beneficial for younger people. But if you
                    like a more stable job, the corporate world is probably a
                    better fit.
                  </p>
                  <p>
                    We all have to think about our own careers and what type of
                    jobs we want to do. That's why there are so many different
                    types of jobs and different company cultures, and there has
                    to be one that fits your requirements. Different people have
                    different goals, so minus the monetary needs, you want to
                    pick a career that you love, and one you’ll be able to grow
                    and excel in.
                  </p>
                  <br></br>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for Finding Resources and Mentors</strong>
                  </h2>
                  <p>
                    This generation now is very blessed because there's a wealth
                    of information and resources online, whether it's on Google,
                    YouTube, or open forums. That's a blessing, but that could
                    also be a curse because we often have an information
                    overload. So how do we figure out what's the right way to
                    approach networking with people in the industry? I would
                    recommend joining the CCE platform. This is one of the
                    platforms that was created to network with career veterans
                    to young professionals, newly grads, and even high
                    schoolers. I do see that it's a very strong platform to
                    create a network. You're not just trying to get something,
                    but you're actually providing something, so it's a give and
                    receive culture.
                  </p>
                  <p>
                    Otherwise, it will be really hard. You can search for some
                    information online, but the hit results are sometimes too
                    overwhelming. You may get like 1000 results, and you don't
                    know which one to go for, and each reading may even take
                    around an hour. So it's very important to have a mentor to
                    give general guidance on where to look for the information
                    or to give suggestions on how to build a personal network,
                    as well as a career network.{" "}
                  </p>
                  <br></br>
                  <h2 className="text-center">
                    <strong>Tips for STEM students</strong>
                  </h2>
                  <p>
                    For STEM students, there's 2-dimensional growth. You could
                    grow wide, basically learning all the different subject
                    matters, but you also want to learn from a system
                    perspective. You could learn about different areas like
                    physics, chemistry, electronics, where you learn from the
                    width perspective. Or you can learn from the depth
                    perspective, where your subject matter is of a very focused
                    area, like how electrons work in a circuit or something like
                    that. There's a need for generalists as well as experts. But
                    if you're a generalist, I would suggest picking one or two
                    subject matters to grow a little bit deeper on. Otherwise,
                    you’ll only know the big picture, but there are specific
                    details you may be missing out on. If you are an expert on
                    something, I would suggest broadening up the horizon and
                    learning from a bigger picture on how different technologies
                    or different things work together.{" "}
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={softskills}
                      alt="soft skills"
                    />
                  </div>
                  <p>
                    I'm a generalist myself, so I often feel that I'm not an
                    expert enough in any of the things that I know; that's why
                    this is also a challenge for me. I started to train myself
                    to be more equipped in one or two programming languages, or
                    even known protocols in the networking field. So at least
                    I'm like an expert in that field, but I also know a whole
                    bunch of different things, even from art or business or
                    accounting. So it's actually good to be a generalist, but
                    you also need to dig deep in one or two areas.{" "}
                  </p>
                  <p>
                    So to summarize, you can be either a generalist or a
                    specialist. If you are going for the generalist path, I
                    would suggest you pick up one or two skills to grow deeper
                    on. If you are a specialist, I would suggest to not only
                    focus on that specialty you have, but also to try to expand,
                    because it will benefit you. Once you see the bigger
                    picture, then you can go even deeper. And then for
                    generalists, if you can look at a lot of things, but you
                    understand something in more detail, then you know much
                    better how everything works together.
                  </p>
                  <p>
                    For example, let's say you're designing a chip, an ASIC
                    (Application-Specific Integrated Circuit). You may know how
                    it works, but then in order to design that chip, you have to
                    go all the way down to how different registers or gates work
                    before we can come up with the big problem. But if you don't
                    know the big product, then how do you design the small
                    parts? So two types of people are needed; one is more on the
                    system level, and the other one is more on the component
                    level. But it would be good if the system-level people would
                    get to learn more about the components, while the component
                    designer would be able to learn more about how the general
                    system works. Then they could be a benefit by designing the
                    system and components to work better together.{" "}
                  </p>
                  <p>
                    The other point is, once you look from the perspective of
                    other teams, you could solve a lot of communication problems
                    or even conflicts. Sometimes if you don't see it from the
                    other person's perspective, sometimes the team doesn't
                    function well together. So I do wish that each team or each
                    person would be able to look at it from both big and small
                    perspectives, and also from different angles. That way when
                    you're designing a product, teamwork will be smoother.
                  </p>
                  <p>
                    [This also brings back to my earlier point on preparing for
                    an interview.] In the interview, of course, the technical
                    perspective or skill would be a major chunk of it, but
                    ultimately most teams or companies want to have someone that
                    works well with them. You can spend some time training a
                    person for new skills, but training a person to work better
                    with the team is a much harder task. So I would strongly
                    recommend not just focus on technical skills, but also try
                    to learn a lot more about soft skills: how to work with
                    people, how to have better communication, how to be more
                    proactive, and how to work in a team. You can learn a lot of
                    that in college or high school, because there are lots of
                    team projects. That experience is definitely something that
                    you can carry with you to your career, because no matter
                    what company you go to, we have to work as a team.{" "}
                  </p>
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

export default CertificationHelps;
