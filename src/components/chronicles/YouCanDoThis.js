import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import fengli from "../../images/chronicles/FengLi.png";
import network from "../../images/chronicles/network.png";
import build from "../../images/chronicles/build.png";

class YouCanDoThis extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>You Can Do This</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RAY CHANG &middot; SELINA YANG &middot;
                SABRINA TENG &middot; HARRY SIO
              </h6>
              <h6 className="date">Mar 12, 2021 &middot; 10 min read</h6>
            </Container>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={fengli}
                alt="Feng Li's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. Feng Li is an Associate Professor of Economics at Texas
                    State University. She is also a Faculty Research Fellow at
                    the LBJ Institute for STEM Education and Research. Dr. Li
                    received her PhD in Economics and Specialist in Education
                    from Florida State University. Her research focus is on the
                    economics of education, labor economics and health
                    economics. Aside from her academic career, she is also a
                    passionate Christian and a Sunday school teacher.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>What are you doing now?</strong>
                  </h2>
                  <p>
                    I am Associate Professor of Economics, and I teach a lot. I
                    teach the first economic course of undergraduate students,
                    and I also teach MBA students. In my research, I do a lot of
                    educational policy research, and I serve as one of the board
                    of directors of a national organization called Association
                    for Education Finance and Policy. I also do a lot of funded
                    grant research with the National Science Foundation. Outside
                    of work, I volunteer at my local church and teach Sunday
                    schools because I love my kids.
                  </p>
                  <h2>
                    <strong>
                      {" "}
                      That is a very diverse set of activities! Would you like
                      to first share more of your teaching experiences?
                    </strong>
                  </h2>
                  <p>
                    So it's called the principles of microeconomics, and it is
                    probably my students’ first economics course. I’m super
                    interested in the teaching side, but I also like to mentor
                    students about their future career and what they’re
                    passionate about. Teaching Intro to Microeconomics is very
                    exciting because you get to work with so many young minds.
                    Whenever someone wants to change majors, I always tell them
                    the story of a student of mine. Many years ago when I was a
                    grad student at Florida State University, I was teaching my
                    own section of principles of microeconomics, and I met a
                    really bright Korean American student, who was super
                    interested in economics. After that class, she would always
                    drop by my office hour and chat with me. Since we are both
                    female and Asian, she felt very close to me. She was not an
                    economics major back then but she later switched to
                    economics. Several years later I got contacted by one of my
                    former professors, and he said, “Li, do you know what
                    happened to that student of yours? After she switched her
                    major to economics, she really loved it. She graduated with
                    a 4.0 GPA, and she ended up working for Google.”
                  </p>
                  <p>
                    I like to tell my students that story because sometimes I
                    feel like, out of the thousands of students I teach, if I
                    can really make a difference in just one student's life,
                    that will be enough. We all need mentors along the way,
                    someone who's a few years ahead of you, who can give you
                    some insight that will help you navigate. Sometimes we don't
                    know for sure if our major is the thing that we want to do.
                    Sometimes we don't know what kind of jobs will be available
                    to us. So I always try to work with young minds because you
                    can do a whole lot with young minds as you're guiding them
                    along that path.
                  </p>
                  <h2>
                    <strong>
                      That is a very encouraging story. I just wonder how you
                      convince your students to transfer to Economics?
                    </strong>
                  </h2>
                  <p>
                    Actually I don't intentionally do so. What I’m doing is
                    modeling the behavior. I am modeling my passion for
                    Economics. We economists work with valuable data sets every
                    day, and we try to find the opportunity costs. College
                    students trying to navigate majors have so many options, but
                    which do you pick? I think Asian parents encourage students
                    to more profitable careers, but what we lose from that
                    process is encouraging students to develop freedom and
                    courage themselves. College is a place to explore your
                    talents and interests, and figure out who you are.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={network}
                      alt="network"
                    />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      Following that thread, can you share more of how you
                      decide to become an economics major?
                    </strong>
                  </h2>
                  <p>
                    Before I switched to economics, I was in a major called
                    International Developmental Education. There, once you get
                    your PhD, you go to developing countries and help them
                    design an educational system that will work for minority or
                    underprivileged students. However, life always throws you
                    curveballs, and I didn't end up doing that thanks to a class
                    taught by a life-changing professor to me. That professor
                    was a Stanford graduate, a sociologist, and also a
                    passionate economist. When I was an undergrad, I actually
                    didn’t like economics. For example, the supply demand curve.
                    Why are you shifting this curve and not that curve? It just
                    does not make any sense to me back then. Only after I was
                    around 23-year-old did I start seeing the beauty of
                    economics and find it super-fascinating, and I started to
                    take a lot of economics classes. Unfortunately, when I was
                    about to defend my dissertation prospect, that professor
                    passed away because of cancer. After that difficult period
                    of time, I ended up giving up my dream of becoming an
                    education specialist and switched over to economics.
                  </p>
                  <p>
                    So that was a really long winding road and coming back to
                    economics, but I think it benefited a lot for me. So I would
                    actually encourage whoever is reading this, to really think
                    about one thing -- if you made some long winding road and
                    you feel like this is a diversion from whatever your goal
                    is, or somehow you feel that you are doing something that on
                    the surface is not consistent with your ultimate goal, it's
                    okay. It is okay to fail, and it's okay to fail many times,
                    because sometimes those experiences enrich your future. So
                    back to my story, after I went through all that trouble and
                    circled back to economics, guess what, I actually became one
                    of the research stars in my cohort. It is not because I was
                    better, but because my previous major gave me insight for
                    new and different questions. I am interested in a lot of
                    education policy issues that they didn’t get exposed to.
                    When I was in my undergrad, I was able to see how teachers
                    received their training, so when I started to work as an
                    economist, I can approach those education policy research
                    from different perspectives. Instead of just focusing on
                    students, I also ask questions about teachers. Are we
                    keeping teachers in the classrooms? Can we encourage them to
                    become a teacher? How can we attract them into teaching?
                    What do they have to give up, such as those industry jobs,
                    if they decide to be a teacher? Had I started out being a
                    straight up economics student, I would not be able to ask
                    those questions.
                  </p>
                  <p>
                    So my message to our readers is to not be afraid, and don’t
                    worry too much if you make a mistake as a young person.
                    Congratulate yourself on making mistakes because that's
                    actually a great enriching experience. I think God has a
                    plan for all of us, a great vision for each unique
                    individual. Sometimes I have to listen to God's words and
                    ask myself what God is trying to tell me. Sometimes I do get
                    frustrated. For example, when my professor passed away
                    during my PhD, I asked God, “ why'd you kick my professor
                    away when I was a poor grad student? I was trying to
                    struggle through the program, and I’ve made it so far. Why
                    did you take him away?” I still remember my professor's
                    funeral. I was crying. I was crying for him and also crying
                    for myself, because it was so devastating. Because I was in
                    a different country, and I had no idea what my future held,
                    and now my professor was gone. And he was not just a
                    professor, but also your friend and your great mentor. He
                    had a natural passion for taking care of people, and he
                    always brought pots of curry to feed students with. He had
                    so much influence on me, and now as I became a professor, I
                    think I inherited some of his teaching philosophy. I'm
                    telling this story to encourage all of the readers out there
                    -- don't get discouraged. My professor’s death was such a
                    huge stumbling block in my career and it was so
                    disheartening at that time. Now when I look back on it, it
                    was still difficult, but somehow I made a pass through that,
                    not because I was able to but because of my faith in the
                    Lord, and I have a God with me. (Of course also with my
                    friends and my husband, who was my boyfriend back then.) I
                    just want to give a positive message to the readers that
                    every setback can actually be a good thing.
                  </p>
                  <h2>
                    <strong>
                      It sounds like life is a learning journey, and that it’s
                      normal to make mistakes.
                    </strong>
                  </h2>
                  <p>
                    Yes. I wanted to make sure that I’m not just telling a sad
                    story, but because when young people are my age, you look
                    back at the low points in your life and appreciate the
                    people who made a difference. People need friends who
                    support them, and friends who are out of their areas of
                    expertise to open you to more experiences.
                  </p>
                  <p>
                    I had one former student. He was an honors student and he
                    was super self-motivated. After he graduated, he went to
                    Southern Methodist University to get his master masters in
                    economics. He was in his first semester of econometrics
                    class, which is a very difficult math class, and he was not
                    doing well. In that first semester, he would call me and
                    asked, “Do you think I can do this?” I said, “yes, you can
                    do this. Okay? For anybody you can do this. You're one of
                    our best students. You can definitely do this.” But guess
                    what? When he was taking his second sequence to that
                    econometrics class, he did really well -- he did a stellar
                    job, he entered into a competition, and his program actually
                    introduced him to some local people and a local company. I
                    also have some students who struggle in school, but even so,
                    I’ll spotlight talents of theirs and support them. So
                    sometimes we have to have that kind of person in our life
                    and just tell us that, you can do this, and encourage us
                    along this navigation process.
                  </p>
                  <h2>
                    <strong>
                      Do you have any recommendations on how young people can
                      find their support or their mentor?
                    </strong>
                  </h2>
                  <p>
                    The church is a wonderful place to start searching for a
                    mentor because that’s where you won’t be judged. Career
                    counselors, high school teachers, and professors are also
                    good options because they have networks in many industries.
                    I think students sometimes overlook that, but they’ve taught
                    hundreds and thousands of students prior to you, and they’re
                    very familiar with the system because they have helped so
                    many students to navigate that system. Also, talk to as many
                    staff members as possible on your campus. People often
                    ignore that we actually have wonderful staff members. From
                    my experience, my university is a Hispanic serving
                    institution. We have a lot of Hispanic and Latino staff
                    members who are very good resources. Sometimes students have
                    trouble putting food on their table, but they didn't know
                    that we have a Bobcat pantry program. We also have the
                    wardrobe program, where you can borrow some clothing like a
                    suit and tie for an interview. There are lots of resources
                    available, but you have to find the right people. Find
                    someone who deeply cares about your success, who is willing
                    to take the time and energy for you, and that person will be
                    your mentor.
                  </p>
                  <p>
                    Start networking when you’re in college. If you start when
                    you begin looking for a job, that is already too late. It’s
                    difficult to start during the freshmen and sophomore year,
                    because you’re still learning to navigate the system. But in
                    your junior or senior year, start talking to your
                    professors, and also your parents. They may have good
                    connections, and even if they don’t know the right kind of
                    people, their friends might.
                  </p>
                  <p>
                    You can also build your professional network by talking to
                    the local community. I encourage everyone to volunteer at
                    their church, local food pantries, or whatever else you are
                    passionate about. You can do this in high school and
                    college, and people will see your work ethic overtime.
                    Earning a little income is also nice, but the more important
                    thing is to know supervisory people who can provide
                    references later on.
                  </p>
                  <p>
                    Possible mentors can also be amongst your peers. Students a
                    couple of years ahead of you can offer tips about which
                    courses to take, what professors to avoid, and other
                    valuable information. This is important to think about in
                    your planning if you need a stellar GPA in the future, like
                    for law or medical school. Like I said earlier, don’t be
                    afraid if you make a few mistakes along the way, but this
                    can help you avoid some towards your ultimate goal.
                    <div className="text-center">
                      <img className="chronicle-pics" src={build} alt="build" />
                    </div>
                    <br></br>
                    So I just gave you a whole bunch of different places. I
                    really think looking for a mentor is important in our modern
                    days, and you can start that even in high school. However,
                    you will have to try a few times before you find your
                    mentor. Out of the whole list of people available, maybe
                    only one is really invested in you, but that will be enough.
                    You don’t need to have a mentor in every area, but rather
                    find which one is passionate about your success. For
                    example, I had one undergraduate who got an A in my class,
                    but got A+s in her other courses. In that case, the other
                    professors saw her potential and helped her get to where she
                    wanted to be.
                  </p>
                  <p>
                    Also, While it’s good to plan, it’s important to know that
                    even if you didn’t get to where you wanted to be, don’t be
                    discouraged. It’s life experience. God trains us to become
                    better people, and gives us the perseverance to get through
                    troubled times. As you’re building your network, you’re also
                    building friendship and getting support. That’s especially
                    important in high school and college, because these are
                    formative years and you’re trying to find out who you are.
                    We in the Chinese American community need to be cognizant of
                    pressure being put on young people on getting it right the
                    first time. Having a mentor, having friends, and having
                    faith to support you is important in dealing with these
                    kinds of mental health problems. Organizations like CCE can
                    provide that kind of moral support network system. I hope
                    you can see that from my story, you will be able to achieve
                    your goals and be happy not just because you have money, but
                    because you made a difference in someone else’s life.
                  </p>
                  <h2>
                    <strong>
                      There was some media coverage on your research of how to
                      train and retain high quality teachers throughout the
                      country. Could you share more about that?
                    </strong>
                  </h2>
                  <p>
                    I had worked for one year at Shaanxi Normal University with
                    many student teachers, and was thinking of becoming a
                    development specialist to work with low income kids and
                    improve their educational opportunities. Actually this
                    research agenda initially came as a compromise between me
                    and my economics advisor, the first person I worked with at
                    the Florida Department of Education 15-20 years ago. I had
                    given my professor a list of ten potential dissertation
                    topics, but he rejected all of them except my last topic,
                    teacher shortage and training. However, I realized later on
                    that I had always been interested in that topic and the work
                    was actually very interesting.
                  </p>
                  <p>
                    Traditionally a lot of teachers are trained through the
                    college of education, but we were studying a specific
                    program called the Robert Noyce Scholarship. This program
                    was funded by the National Science Foundation, and wanted to
                    recruit STEM majors to become K-12 teachers. The first part
                    of the research question was to look at the national
                    landscape and see how many math and science majors had
                    become teachers in the past 15-20 years. The second part
                    asked if the millions of dollars given to this program had
                    made a difference in putting these teachers in high-need
                    school districts, typically low-income schools or those with
                    many African-American or Latino students. I was very excited
                    because we’re working with many different universities, like
                    the University of West Florida and University of Arlington,
                    and with the Brookings Institution, a think tank in
                    Washington, D.C.
                  </p>
                  <p>
                    Sometimes ideas take a while to get materialized, so this
                    was around five to six years ago. We also had to apply four
                    times before we got the funding for the project, so do not
                    be afraid about applying for a scholarship and being
                    rejected. We will all be discouraged, so put the rejection
                    letter away, let it sit, and then go back to it in a week
                    and see how you can improve yourself when you apply again.
                    Grant applications like these are not easy, even though it
                    might look that way when you get them.
                  </p>
                  <p>
                    Even if you don’t get the job or the scholarship, take the
                    opportunity to establish your network. Follow up and ask if
                    they have any suggestions about how to improve and a general
                    idea of what their ideal person looked like. An important
                    skill for young people is to be able to communicate like
                    this in a professional way. Don’t burn your bridges, because
                    they might have a job in the future that you will be a good
                    fit for. Make sure the established link is strong, learn,
                    and build up that relationship. You could add them on
                    LinkedIn; sometimes people share opportunities there, and
                    then you’ll be in the know. It’s important to be able to
                    wait. Don’t be discouraged, because you learn from failure.
                    Always take opportunities that come at you, and you will
                    succeed in the future for sure.
                  </p>
                  <p>
                    It is important to have an open mind and a growth mindset,
                    and I think that can also come from the faith. You can turn
                    to prayer for improvement and opportunity. For example, you
                    can say “God, I know this job you didn't give it to me, but
                    tell me what I could do to improve.” Or sometimes you can
                    even just say I can't do this. Please give me another
                    opportunity. Because a lot of times God can do miracle work
                    that humans cannot. We have our limitations. Mentors help,
                    but ultimately, I believe our faith sustains us in our dark
                    times.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for High School Students</strong>
                  </h2>
                  <p>
                    If you’re interested but don’t know if economics is for you,
                    I would recommend reading the Freakonomics series (they also
                    have a podcast), Naked Economics by Charles Wheelan,
                    Thinking, Fast and Slow, and Poor Economics by Esther Duflo
                    and Abhijit Banerjee.
                  </p>
                  <p>
                    Also keep in mind that economics is a very broad subject,
                    and is really about how people make decisions in their daily
                    life. It's not just stock markets -- that's finance. There
                    are lots of research questions economists are asking, and
                    there are a lot of social sciences. Economics is a lot like
                    physics to a STEM major: very theoretical and a necessary
                    class to take. Finance is very similar to engineering
                    because engineering is very much an applied field, and
                    finance is that. That being said, there are still lots of
                    economists that are hired by Amazon and all these tech firms
                    because we have a lot of very strong abilities to work with
                    data, and our abilities to understand people’s purchasing
                    behavior and decision-making process.
                  </p>
                  <p>
                    Also look at what economists do. You can check out{" "}
                    <a
                      href="https://lifeng.wp.txstate.edu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      my website
                    </a>{" "}
                    and see if what I am researching are the kinds of questions
                    you are interested in researching as well, because these are
                    the difficult, challenging questions economists ask and
                    spend a lifetime answering. If so, you will be a good
                    candidate for an Econ major.
                  </p>
                  <p>
                    If anyone is an Econ major or have any other questions, feel
                    free to{" "}
                    <a
                      href="mailto:Li.Feng@txstate.edu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      email me
                    </a>
                    , and I’d be happy to chat.
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

export default YouCanDoThis;
