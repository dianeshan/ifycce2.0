import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import jack from "../../assets/mentors/JackChen.png";
import industry from "../../assets/chronicles/industry.png";
import scholar from "../../assets/chronicles/scholar.png";
import research from "../../assets/chronicles/research.png";

class RemindYourselfMotivation extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>Remind Yourself Your Initial Motivation</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; RAY CHANG &middot; SELINA YANG &middot;
                NATHAN YANG &middot; HARRY SIO
              </h6>
              <h6 className="date">January 14, 2022 &middot; 12 min read</h6>
            </Container>
            <a href="#" id="introduction"></a>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={jack}
                alt="Jack's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Dr. Jack Chen is the associate research fellow and research
                    group lead in the cancer immunology discovery team at
                    Pfizer, with years of experience in leading and mentoring
                    the drug discovery team and cross-functional team
                    communications. Dr. Chen has a Ph.D. in Oncology &
                    Immunology at Johns Hopkins University, with expertise in
                    cancer cell-immune cell interaction in microvasculature and
                    their role in metastasis. He believes a strong motivation is
                    the key that can help us go through the ups and downs in the
                    drug discovery process, and he enjoys working on
                    translational medicine research that can directly help the
                    patients.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe your current position and work in
                      your own words?
                    </strong>
                  </h2>
                  <p>
                    I am the R&D leader [at Pfizer] leading a team of Ph.D.
                    senior scientists and non-Ph.D. scientists. Our team is
                    trying to discover the new target for a more innovative
                    cancer treatment, which hopefully will eventually help the
                    patients with cancer. We first try to identify the target
                    [molecules], and we try to find a potential new medicine,
                    either large molecules like the antibody or small molecules
                    [which might interact with the target molecules and produce
                    therapeutic effects]. We then test those chemical compounds
                    first on cell lines (in vitro), and then in mouse study (in
                    vivo). Once we establish whether those compounds have
                    anti-tumor efficacy in a mouse model, we move forward to the
                    monkey model to check whether those potential medicines are
                    well tolerated in monkeys before moving forward to the
                    clinical trial for the patients. So that's my overall job,
                    mentoring my senior scientists and scientists to do the lab
                    work, trying to guide them and drive the program from early
                    discovery all the way to phase one [clinical trial].
                  </p>
                  <h2>
                    <strong>
                      Can you define the terms “in vitro” and “in vivo” in
                      layman’s terms?
                    </strong>
                  </h2>
                  <p>
                    In vitro means that you work on something outside any
                    species body. For example, you can test the compounds on the
                    immune cells or tumor cells isolated from a patient sample,
                    or you can test on a well established tumor cell line,
                    either from an external or internal cell bank. Next you try
                    to understand whether those cell lines are sensitive to your
                    potential medicine. For example, if you test your innovative
                    drug, and you do see immune cells start to activate and kill
                    the tumor cells, then that would be the key experiment you
                    want to see. We also try to understand the interactions
                    between immune cells and tumor cells in in vitro studies,
                    and how we can leverage the therapeutic drug that activates
                    the same T cells, NK cells, or dendritic cells to activate
                    the immune system to kill the tumor cells. It’s a very
                    similar concept as the COVID vaccine. You want to start with
                    the in vitro assay before you actually start in the mouse
                    model or the monkey study. You want to see whether you can
                    actually boost the immune cell response to the virus [on a
                    petri dish] before you get into in vivo study, which is
                    within the species like mice or monkeys.
                  </p>
                  <h2>
                    <strong>
                      There is a low success rate in biomedical research. How do
                      you address the pressures of almost certain failure to
                      develop new solutions?
                    </strong>
                  </h2>
                  <p>
                    That's a great question. Drug discovery’s success rate, like
                    you said, is pretty low, since you may identify many
                    potential medicines that are not as effective as you expect
                    in the beginning. Even if those compounds show strong
                    efficacy, they might not be safe for the patients! In that
                    case, you will have to deprioritize or terminate the
                    program. Since there is a lot of deprioritization down the
                    road, you must adjust yourself and realize that this is part
                    of the work.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={research}
                      alt="research"
                    />
                  </div>
                  <br></br>
                  <p>
                    But how can we overcome [the repeated frustration from
                    program deprioritization and termination]? [I believe the
                    key is to focus on] your initial motivation. If you
                    eventually can identify the medicine and test in the
                    clinical trial, and really help the patient and their family
                    to prolong the survival or even cure them, that would be a
                    strong motivation to make you keep doing that. So regardless
                    of how many kinds of challenges or how many times of failure
                    happen down the road, you can come back and remind yourself
                    – your initial motivation is to help the patients
                    eventually. Some brilliant scientists enjoy working on basic
                    science problems in academia and pursue the faculty
                    position, which can also be helpful in terms of innovation.
                    While the other way is to try to apply the science you learn
                    into the drug discovery and make it more applicable. Imagine
                    all the biology, physiology and biochemistry you learned
                    from college or in grad school, and now you can directly
                    translate it to the industry to develop a new medicine to
                    overcome some of the limitations of standard of care. Right
                    now all the standard of care, either it is the chemotherapy,
                    target therapy, or the immunotherapy, they all have
                    limitations, and not all patients respond well to the
                    treatment. That is why you want to see if you can find a new
                    medicine that can help those patients who did not respond
                    well to the current treatment. I believe that would be your
                    motivation to overcome the high failure rate in drug
                    discovery.
                  </p>
                  <a href="#" id="collegetips"></a>
                  <h2>
                    <strong>
                      What is the driving force behind your work and what you
                      pursue?
                    </strong>
                  </h2>
                  <p>
                    When I was a college student, we learned a lot of
                    engineering and science. Most of my classmates in college
                    were more driven by the engineering part, so they ended up
                    working in the semiconductor industry because we majored in
                    chemical engineering. You either go to a traditional company
                    or go to the semiconductor industry to do the chemical
                    process. However, during my college time, I was not really
                    interested in fluid dynamics, transport phenomena, or
                    applied mathematics. Instead, I was extremely interested in
                    biology and biochemistry as well as molecular biology. Even
                    though most of the biology-related courses were not the core
                    courses of our department, I still registered for many of
                    these optional courses, and I always got very good grades
                    like A+ because I am very interested and read a lot of
                    textbooks. [Since this is a very different interest from
                    most of my classmates,] I was trying to understand what
                    could be my next step after college, and I ended up pursuing
                    a master's degree in Taiwan for cancer biology and
                    biochemistry for two years, which is again very different
                    from my classmates. In addition to attending the courses, we
                    also have to spend most of the time in the lab and do the in
                    vitro testing that I mentioned earlier, trying to identify
                    some compounds that can treat the tumor cells. If those
                    compounds are effective, how do they kill the tumor cell?
                    How can we improve and understand the biology more?
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={industry}
                      alt="industry"
                    />
                  </div>
                  <br></br>
                  <p>
                    When I was about to graduate from my master program, I tried
                    to think about my next step – what would be the potential
                    career development for me? I can either stay in the country
                    and work in the industry, or go to the United States to
                    study for my Ph.D. Eventually, I decided to finish my
                    military service and then applied for the Ph.D. program in
                    the United States. Back in 2008, I went to Johns Hopkins
                    University to pursue my Ph.D. in the oncology and immunology
                    program. In my Ph.D, I tried to understand the interaction
                    between the tumor cells and the microvasculature, which is
                    part of our circulating bloodstream. How does the tumor cell
                    metastasize from the primary location to the second organs
                    through the bloodstream? How do they interact with the
                    immune cells? I tried to think hard and understand the
                    mechanism of action because I really want to do the drug
                    discovery. This is again very different from my peers who
                    wanted to pursue postdoc training in academia, because they
                    are probably more interested in faculty positions.
                  </p>
                  <p>
                    After I finished my Ph.D., I tried to apply for the industry
                    job but got many challenges and hurdles, because usually in
                    the industry they are more interested in the candidates with
                    more industry experience, which is very difficult to have
                    for a fresh Ph.D. graduate. I submitted my resume over and
                    over again to many different places, but all failed. I thus
                    tried to connect with many different senior people, tried
                    attending the conference, tried to understand the biotech
                    industry more, tried to improve my phone interview skills,
                    and tried to improve my resume. After all these challenges
                    and improvement, I ended up getting an offer from one of the
                    top 10 big Pharma, the Eli Lilly Pharmaceutical Company, to
                    do the drug discovery. So that is how I ended up having my
                    career at this point.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      What is the difference between being a research scientist
                      at a company in industry compared to being in academia?
                    </strong>
                  </h2>
                  <p>
                    These are really two distinct tasks. I think for young
                    college students it may be too early for you to think ahead.
                    But when you have a chance to start your graduate school,
                    that would be a good time to start thinking about it. So,
                    after you graduate from a Ph.D. or master, you have to think
                    about whether you want to go to academia or to the industry.
                    If you want to stay in academia and apply for a faculty
                    position, it will be more like an independent lab setting.
                    You will get several years of postdoc training, maybe 3 to 4
                    years, or even 5 years and above. Typically, you do the
                    innovative science by the lab work, trying to publish the
                    paper in the journal to show your strength, and applying for
                    the faculty position. You might apply for an instructor job
                    in the beginning or assistant professor, whether it's a
                    non-tenure or tenure track. Usually the admission rate of an
                    assistant professor job is less than 10%, or I would say 5%
                    sometimes, but you don't have to be discouraged by that. I
                    mentioned the low admission rate not to suggest you go to
                    the industry, but instead to encourage you to really think
                    about whether you are interested in basic science in
                    academia. The professors who won the Nobel Prize – they are
                    really motivated by the new discovery and the science they
                    found in the lab, and that is the motivation which keeps
                    them thinking about the current challenges, thinking about
                    the new ways to solve it, designing the experiments and
                    performing them. On the real side, once you become a
                    professor, you also have to recruit postdocs and graduate
                    students, mentor them to do the lab work, and write the
                    research grants for funding. If you don't have funding, you
                    don't have any budget money to establish a lab because you
                    must purchase all the equipment and reagents. Usually the
                    grant acceptance rate is pretty low, too – most of the
                    grants have an acceptance rate of less than 10%, and for
                    some big grant like R01 from NIH, it would be less than 5%.
                    So most of the time professors have to submit the grant
                    proposal but may not get accepted for several times. So the
                    failing rate is similar to the drug discovery rate – it's
                    just a different setting. And then you try to publish your
                    paper about cutting edge science, and you can be invited to
                    different conferences and present your research, and you
                    keep writing more grants and try to get funded for your new
                    research projects. That is typical for the faculty track.
                  </p>
                  <p>
                    The drug discovery industry track is not an independent lab,
                    which is very different from academia. In academia, you may
                    have peers like other assistant professors, but typically
                    you are independent. Whereas in the industry, you always
                    work as a team – you work with the antibody drug development
                    team, the clinical team, the regulatory team, the commercial
                    team, and the in vivo team. It is going to be very
                    cross-functional and dynamic, and some people like this kind
                    of teamwork because there will be more face-to-face
                    interactions. Each team works on a different part, and they
                    go through the communication and drive the drug discovery
                    process altogether as a team. You don’t need to worry about
                    grants in the industry. We can order the reagents and
                    equipment without worrying about writing a grant, but by the
                    end of the day it is all about the cost. So many professors
                    end up with no grant, and they have to transfer to a
                    different job, which is one of their risks. There is also a
                    risk in the industry – you might get laid off when there is
                    a reorganization within big Pharmas, but usually this does
                    not happen very frequently. Some people have a myth that you
                    won’t have to worry about losing a job like people in the
                    industry once you get your tenure in academia. It's not the
                    case, because even if you are an associate professor, if you
                    run out of grants, you will have no money [to do research or
                    pay the salary for your postdocs and graduate students].
                    Similarly, in industry, if you get laid off, it is not
                    because you're not doing a good job. It's usually because
                    the leadership team of the Pharma or biotech decide to focus
                    more on other stuff, like vaccines and mRNA technology, and
                    they may double down the resources, the budget, and the
                    manpower [in these departments]. At the same time, some
                    other departments may be deprioritized, and the people in
                    those other departments will get impacted. But I don’t think
                    you should worry if you will get laid off, because if you
                    have a strong skill set and strong expertise, many other
                    companies will recruit you right away. Boston, Bay Area, San
                    Diego, Pennsylvania, and Carolina, are all biotech hotspots.
                    There are hundreds of biotech companies and many big Pharmas
                    in those places, so there are so many opportunities.
                    Therefore, if you really want to transform what you learn
                    from college and graduate school to drug discovery, want to
                    do more translational medicine and any type of drug
                    development to help the patients, then industry could be
                    your path. But if you are more interested in basic science
                    and enjoy an independent lab setting more, you should
                    consider the path that can lead you to a faculty position.
                  </p>
                  <h2>
                    <strong>
                      How do you manage a team of super smart people and
                      scientists?
                    </strong>
                  </h2>
                  <p>
                    As I mentioned before, you have to work as a team in the
                    industry, and all your team members are very brilliant
                    scientists and physicians. You can imagine a meeting with 10
                    PhDs and MDs, because some of the team members are
                    physicians. You might wonder why a physician would also be
                    in the industry, and that is because there are two different
                    tracks for MD as well. Once they get their medical degree,
                    they can either be the physicians in the clinics and
                    hospitals, or they can choose a career path in industry. In
                    the industry, medical doctors will oversee the drugs that
                    have the potential to move to phase 1 clinical trials. They
                    need to lead the clinical development plan – which drug do
                    we want to pursue for further clinical trials? What dose
                    should you start to ensure the safety of the patients? They
                    also need to communicate with the physicians in the hospital
                    – Does this patient have a response [to the drug]? Why did
                    they not have a response? Are there any safety signals?
                    Could they do monotherapy or do they have to combine with
                    other therapies? All those kinds of details.
                  </p>
                  <p>
                    Back to your question about teamwork, just try to imagine
                    many PhDs and MDs sitting in the same room as a team, and
                    everybody has a different opinion. So, to be honest with
                    you, it's a bit of a learning curve. It can be a challenge
                    in the beginning, but it is actually also fun. Because
                    medical doctors may think about the patients more, while
                    research scientists like me will be thinking more about the
                    biology, the mechanism, the science from the mouse study,
                    monkey study and cell lines. So we must know each other and
                    teach each other. Usually we do have a lot of disagreements
                    and debates – just like in Congress. So this is how it
                    happens in the industry, and it's not negative. For example,
                    you may have a new innovative medicine and you have to
                    decide whether the company should try that drug on lung
                    cancer patients or on breast cancer patients. We have our
                    own rationale based on the biology and our studies, while
                    for clinical doctors, they think in terms of the reality –
                    breast cancer patients and lung cancer patients have
                    different standards of care treatments and different safety
                    profiles, so we have to evaluate them together. Also, the
                    commercial team will have a different perspective, because
                    in industry we are not nonprofit. We need the revenue to do
                    the research, and there is cost in the R&D process and the
                    clinical trial.{" "}
                  </p>
                  <p>
                    So there is a lot of disagreement and realignment [within
                    the team]. The challenge is that there is no straight path
                    forward. If you propose something, you may get different
                    opinions, but the good thing is that you can get some ideas
                    from other partner lines and you can revise your proposal.
                    Eventually, being able to make a better plan will benefit
                    the patients. Therefore, I regard it as a challenge but also
                    a good opportunity to work as a team, and you also learn a
                    lot from them because your expertise is different from
                    theirs. If you don't work as a team, you only know about
                    what you know in this field your entire life. But if you
                    work with the team, you can learn the perspectives from the
                    regulatory side, the commercial side, the legal side, and
                    the clinical side, and you will know the big picture of drug
                    discovery. So that's what I'm going to share with the
                    potential intern candidate for the biotech/pharma track.
                    What does the big picture look like? From the early in vitro
                    study, to mouse study, to monkey study, how do we move
                    forward the compound in the clinical trial?
                  </p>
                  <a href="#" id="hstips"></a>
                  <h2>
                    <strong>
                      How do you keep track of new papers in the field and deal
                      with exploding amounts of industry information?
                    </strong>
                  </h2>
                  <p>
                    I would suggest college students or graduate students, if
                    you are really interested in the biotech industry, you can
                    start to do online searching. There are many different kinds
                    of biotech news, and people look at the news all the time.
                    You can set up the email alert, either for a weekly news or
                    a daily news, so you can try to get your foot in the door.
                    You might see some news related to Pfizer, like their
                    vaccine got approved by the FDA, and you can start thinking
                    about why they've been approved, or think about their safety
                    and efficacy. Then you can do the online searching for the
                    safety and efficacy for the vaccine, and you can identify
                    the research paper. For some news, if you scroll down to the
                    bottom, there are some scientific journals, and you can
                    click on that. One of the ways to understand those biotech
                    firms is through the research paper. You can also just do
                    online searching for drug discovery. Search in Google
                    Scholar – there are some review papers that even very young
                    scientists can understand, and you can also set up the email
                    alert for that.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={scholar}
                      alt="scholar"
                    />
                  </div>
                  <br></br>
                  <p>
                    Another way is trying to find your alumni. If you are
                    interested in this, you can consult your professor or the
                    postdoc, and they may know someone who went to the industry,
                    so you can make a connection. Set up one-on-one meetings
                    with them and introduce yourself. Try to find a mentor, and
                    they will try to guide you and they may even help you to
                    look at your resume. That will be very beneficial because
                    everybody starts from zero just like me. I got rejected from
                    different applications for the industry – I applied for
                    almost 200 jobs before I got into the industry because I was
                    just a fresh Ph.D. graduate. You might think that having a
                    Ph.D. is cool. No. In industry, the majority of R&D
                    scientists are Ph.D., and you are just another Ph.D. who
                    doesn't have industry experience. If some of the companies
                    do think, based on your Ph.D. training in academia, there's
                    a need that they think you are a good fit so that you get an
                    offer, that is your opportunity. So there are multiple ways
                    – try to find a mentor. Set up the email alerts. Learn to
                    understand some papers. Understand some news from Biotech.
                    This would be the starting point.
                  </p>
                  <p>
                    Another thing that I also want to tell you, is to have
                    people around yourself that appreciate your growth. There
                    are many things we don't know. If you are dealing with
                    people who constantly compare you with someone much better
                    than you, a lot of time that can negatively impact your
                    confidence and gets you into a different mode of operation.
                    But if you also have people that appreciate your growth –
                    for example, last year you had no idea how to raise money,
                    but now you raised a million – that is another very
                    important part. Be appreciative of our growth. I always tell
                    people that in my opinion, happiness is not a matter of
                    having. Happiness is a matter of gaining. If you get to the
                    highest place, I don't know if you're going to feel any
                    happiness. But when you're moving up at a proper speed, you
                    feel a sense of happiness. I was at 900 feet yesterday but
                    now I am at 1000 feet and that is where I expect to be, and
                    I believe that's the kind of mindset that we have to build
                    inside for our souls. You need a mentor to help you set your
                    goals and metrics and celebrate meeting the goals as you
                    meet them.
                  </p>
                  <p>
                    You don’t want to become an egoistic person, but you also
                    don’t want to become a weak person and never appreciate your
                    own value. So the key to being at the balance point is
                    always having self-reflections, having somebody who gives
                    you feedback, and somebody who believes in you. More
                    importantly, have realistic but ambitious goals. Also,
                    remember to celebrate small achievements. If you meet the
                    milestone, even by a little bit, then go buy yourself a
                    coffee or a gift or whatever. One thing that was missing in
                    me is that I was constantly chasing the milestones. When I
                    hit a milestone, I will immediately start looking at my next
                    milestone. Don’t do this. Buy yourself an ice cream or buy
                    for your teammates something appreciated. I think it's
                    important to value our groups and be ambitious at the same
                    time. Don't just go for a small thing but take steps towards
                    your big goals and celebrate your success.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for Becoming a Research Scientist</strong>
                  </h2>
                  <p>
                    Like I just said, try to explore the biotech news. Try to
                    look for a mentor. And if you are interested, take some
                    courses in college and graduate school which are more
                    applicable to drug discovery. Some professors might also
                    have experiences in the industry, so they can give you more
                    insight, and that is how the course I took really motivated
                    me to have a very strong passion, which eventually motivated
                    me to pursue a Ph.D., which is another 5 year journey. You
                    really need to have a very strong passion to pursue that.
                    That's all my suggestion.
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

export default RemindYourselfMotivation;
