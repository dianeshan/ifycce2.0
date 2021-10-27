import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';
// import ChroniclesHeader from '../components/ChroniclesHeader';
import stevexi from '../resources/images/chronicles/SteveXi2.png';
import mentor from '../resources/images/chronicles/mentor.png';
import expose from '../resources/images/chronicles/expose.png';
import { Button } from 'react-bootstrap';

class InternshipsAreOpportunities extends Component {
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
                            <h1>Internships are Opportunities</h1>
                            <h6 className="authors">BY YUCONG YANG &middot; RACHEL CHEN &middot; SELINA YANG &middot; SABRINA TENG &middot; RAY CHANG &middot; HARRY SIO</h6>
                            <h6 className="date">Jan 30, 2021 &middot; 10 min read</h6>
                        </Container>
                        <Container className="text-center">
                            <img className="chronicle-pics" src={stevexi} alt="Steve's headshot" />
                        </Container>
                        <Container>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="8">
                                    <br></br>
                                    <p>Dr. Steve Xi is a machine learning engineer at Facebook, with expertise in ad
                                        integrity and fraud detection. Dr. Xi has
                                        a PhD in computer science at the University of California, Riverside. He is
                                        interested in building machine-learning
                                        models and applying them to a scalable system that can solve real production
                                        problems.</p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2><strong>How would you describe what you are doing right now at Facebook?</strong></h2>
                                    <p>At Facebook, I'm working on a team trying
                                        to build a machine learning system to protect the content shared in the
                                        Facebook community, ensuring that the ads are high quality and don't violate fiscal
                                        policies. My daily work involves
                                        coding, machine learning, research, product design, and end-to-end solutions,
                                        including working with OPs, PMs, and
                                        engineers. I have worked in different companies like Google and Facebook and am
                                        interested in building machine-learning
                                        models and applying them to a scalable system that can solve real production
                                        problems. </p>
                                    <p>
                                        You can think of the end-to-end and back-end systems as the whole processing
                                        workflow. Production data, like user or ad
                                        data, includes data processing, feature extraction, and running machine learning
                                        models to make predictions. After you
                                        have the final decision, you show the final results to the users. The data was
                                        processed from the beginning into a
                                        system that leads to real impacts on the users. OPs have different roles, like
                                        engineers doing the coding and design.
                                        Program managers are called PMs and they work with engineers and the legal team to
                                        make sure the project will meet
                                        business requirements. They try to coordinate on gathering resources allocated
                                        between engineers. For example, we have a
                                        team of end reviewers. If a machine learning model predicts that an ad is violating
                                        some policies, the machine learning
                                        model can alert human reviewers to check whether the ad is selling a counterfeit
                                        product, or scamming. Using this
                                        information, you can decide whether this content can be posted on Facebook or not.
                                        If we're not sure, we can have third
                                        parties or invite reviewers to perform a final check and decide whether this ad
                                        should be presented or rejected.
                                    </p>
                                    <h2><strong> What part of this process are you responsible for?</strong></h2>
                                    <p>
                                        I oversee the machine-learning process and
                                        make sure the end-to-end works well. The key point I want to bring up is that
                                        working in the industry is quite different than doing projects in school. When you
                                        do research in school, you just focus
                                        on one area, find a solution, publish a paper, and get some numbers. In the industry
                                        it is better for you to have
                                        broader knowledge of the product, the business, and the engineering. The research
                                        and experience you get from university
                                        is only a part of it. The other part is how you put everything together and how your
                                        work impacts the company's
                                        business. The best thing is when you can find something you are really interested in
                                        that also matches the company's
                                        goals.
                                    </p>
                                    <h2><strong>What drove you to choose a STEM career path in math and
                                        computer science (CS), and what motivates you to pursue
                                        artificial intelligence (AI) and machine learning?</strong></h2>
                                    <p>
                                        When I studied math as an undergraduate, my
                                        major also dealt with computational mathematics, numerical analysis and
                                        computer science. I decided to pursue computer science in graduate school and I got
                                        my PhD degree here in the US. At the
                                        time I just applied to companies and would join whatever company made me an offer. I
                                        got two offers, one on the West
                                        Coast and the other on the East Coast. I had already been studying in California for
                                        four years, so I decided to join
                                        Yahoo in the Bay Area for my first job.
                                    </p>
                                    <p>
                                        The first job is really important. If you can find the first job offer, that
                                        completes the transition from newly
                                        graduated to working in the industry. You will learn a lot from it. For my career, I
                                        found that I’ve always been working
                                        in the area of fraud detection, anti-spam, and integrity. It’s not really related to
                                        what I learned or studied during my
                                        degree at UC Riverside, but for some reason I just continued working in this area
                                        and was still interested in it. For
                                        the long term of your career, you want to find something you have a passion for,
                                        which may not be related to your
                                        master’s or bachelor’s degree’s study.
                                    </p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={mentor} alt="mentor" />
                                    </div>
                                    <br></br>
                                    <h2><strong>How did you respond when you found out that a lot of what you are doing in your career
                                        is different from what you had learned in school?</strong></h2>
                                    <p>
                                        There is always new technology coming out,
                                        especially in the software engineering and computer science areas. No matter
                                        what you are learning at school, you will have to learn about new things being
                                        developed in the industry. For graduate
                                        or Master’s students, it's important that you have a major, but the most important
                                        thing is that you gain the ability to
                                        learn. That learning ability is really important and will help you in the industry.
                                        I studied at UCR for four years to
                                        get my PhD, and I feel like the process was really helpful. You have to deal with
                                        struggle. You have to publish your
                                        paper, you have to make sure it is accepted, you have to improve it. At least for
                                        computer science, most people’s work
                                        in the industry will not exactly match what they did in school. But how you deal
                                        with these difficulties in school will
                                        really help you in your career.
                                    </p>
                                    <h2><strong>Do you think it’s better for a CS major to go into a PhD
                                        program or to get an early entrance into the industry?</strong></h2>
                                    <p>
                                        It depends on the individual. If you want to
                                        gain deeper knowledge in your field, you can apply to a graduate school and
                                        finish a PhD degree. If you only want to work in the industry, then a Bachelor’s or
                                        Master’s degree in computer science
                                        is enough. On the other hand, if you want to join a research department in big
                                        companies like Google or Facebook doing
                                        cutting-edge research, then you need a PhD from top universities. A PhD degree is
                                        not a requirement, but it’s also not a
                                        waste of time. You may spend three or four more years doing it, but you're learning
                                        in the process and it will help your
                                        career in the long term.
                                    </p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2><strong>I think a lot of people are facing this situation where
                                        we're looking for our first work experience but then other jobs
                                        are asking for prior experience. Is there any advice you can give to overcome that?</strong></h2>
                                    <p>
                                        Every summer, there are many companies that
                                        have openings for internships. Most people can start to prepare for applying
                                        to these internships when they’re in their second, third, or fourth year. If you are
                                        doing an internship at Facebook and
                                        you’re doing really well, they can decide to hire you directly after the six-month
                                        internship. For Google, after an
                                        internship, you can do a very quick on-site interview. Because you already have a
                                        mentor and a recommendation letter,
                                        you will have a higher chance of converting into a full time job. An internship is
                                        an opportunity, so just apply to it.
                                        On the other hand, I was also rejected by many companies. I got my first job from
                                        Yahoo, but I was rejected by many
                                        companies too, so it happens to everybody. Just don't give up. Just keep trying and
                                        keep improving. Have a positive
                                        attitude towards the interview. Don't take the rejection personally. Just try to
                                        improve yourself every time, and pick
                                        out which part you can improve: communication, coding, preparation, storytelling,
                                        etc. Improve yourself from each
                                        failure, then as time goes on, you will get the first job. Just stay calm. Don't
                                        give up. I know the first job is always
                                        hard, but if you just continue to do it and try, you will get it.
                                    </p>
                                    <h2><strong>What did you learn in your first internship that solidified later career paths?</strong></h2>
                                    <p>
                                        Actually, I didn't really do an internship in a big company; my internship was from my PhD advisor. He was collaborating
                                        with some local company, so I did an internship with them as part of a research
                                        project with my professor. In that case I didn't do an interview. My professor just referred me to the company, but I still
                                        learned a lot, such as research, MATLAB, coding, and design from that internship.
                                    </p>
                                    <h2><strong>What do you think could be the future trend of AI and how might it develop?</strong></h2>
                                    <p>
                                        I'm not an expert on AI, to be honest. Even
                                        though I know some machine learning, my daily job is not really involved in
                                        that. I'm still doing some risk modeling with AI, but I'm not doing the rewrites or
                                        the cutting-edge model training. But
                                        I will say, one trend of AI is moving towards more powerful computing. You can see
                                        that now with DeepMind, TensorFlow,
                                        and PyTorch. High computing power will give you much better results than what we
                                        currently have, and will open the door
                                        for new opportunities that include cloud computing, like Amazon's cloud computing.
                                        Another trend is more on the
                                        technical side; there are new models coming out to combine different data sets to
                                        train the model. The other trend is
                                        related to mobile computing.You know cell phones can do everything, but it still is
                                        not enough because of the bandwidth
                                        limitation in 4G. Now because of 5G and 6G techniques, your cell phone can be much
                                        more powerful which opens up many
                                        opportunities for different applications.
                                    </p>
                                    <p>
                                        I think AI makes people work more efficiently. For example, Amazon uses AI for
                                        product distribution. We already leverage
                                        robots and machines to perform automatic distribution and do some of this easy work,
                                        so humans can just focus on
                                        management and monitoring this process. You can see that trade between countries now
                                        occurs at high speeds. In the past,
                                        Amazon’s impact could only reach a limited group of people over a long time, but now
                                        with these scalable AI robot
                                        distribution centers, it can operate at much faster speeds and can reach people
                                        globally. In the hands of AI, work is
                                        more efficient. The other thing is AI is doing cutting-edge research for health.
                                        Scientists are trying to leverage AI to
                                        do cancer analysis, diabetes checks and for problems in protein folding. For
                                        example, Google made a contact lens that
                                        can help people with diabetes monitor the glucose levels in your body. Before, you
                                        had to use a needle and blood to
                                        monitor your glucose levels.
                                    </p>
                                    <p>
                                        In cancer and disease analysis, many experienced doctors have to go over many X-ray
                                        films [or pathology slides] to get
                                        enough results to determine if there is cancer. With AI and computer reading
                                        technology, this can be done by machines
                                        with higher accuracy. This makes the doctors’ work easier because the machine tells
                                        them if there is cancer, and the
                                        doctors just have to double check instead of checking through thousands of films by
                                        themselves. The other side of AI is
                                        the challenge that in the future if AI is working in all areas, people have to ask,
                                        “How can I improve myself to embrace
                                        these changes and to work together with AI techniques to make my work more efficient
                                        and essential?”. This is a big
                                        topic, including AI ethics, or how we use AI. People are doing unbiased learning to
                                        ensure that the AI is unbiased, and
                                        there are rules that AI cannot be used by the military.
                                    </p>
                                    <h2><strong>What advice would you give to someone who doesn't really
                                        know what their passion is or what they want to pursue?</strong></h2>
                                    <p>
                                        Since you're still young, you can try to do whatever you want to do. The goal at the beginning of your career is to get
                                        hands-on experience in different areas. It is fine that you don't have the passion at the beginning, but as you're
                                        trying different things, you're learning. As time goes on, you'll have figured out what you really want to do. Someone
                                        might say, “Hey, I really want to do something related to program management, I want to talk to people'', then one day
                                        transfer from being a software engineer to program manager. That is very normal in the industry. I know some people that
                                        transitioned from being a doctor to computer science. It's very common to change mid-career. When I was at Google, we
                                        had a medical professor from some university in France join our team who just liked coding. Another engineer would come
                                        to the office around 3pm, and work until 9pm at night, because she was working as a part-time doctor in a hospital in
                                        the morning. There are many careers you can do. But just keep trying, you will find what you want to do. I can only
                                        speak for a computer science major. For some other majors, like in medicine, you will always have to go through the
                                        process of doing a residency, then many years of practicing to become a doctor. I see computer science as flexible
                                        because you can transition to other positions. It might not apply to other areas.
                                    </p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2 className="text-center"><strong>Tips for College Students</strong></h2>
                                    <p>Even as I work in the industry, I still keep learning about time management
                                        and what my priorities are. It’s hard
                                        because you have to be committed, you have to have the vision, and you have
                                        to do it every day. For college students, if
                                        you can find a good mentor, which is what CCE is doing, I think that is very
                                        good and meaningful. No matter if they’re
                                        young professionals, or people already working in the industry for some
                                        time, they can give you advice. They can set
                                        examples that college students can see and learn from. Also, try to go
                                        beyond the university and get some real working
                                        experience, in terms of an internship. You can learn a lot even at a
                                        part-time position, and that can help you bridge
                                        the gap between what you learn from school and the skills you need for a
                                        real industry job</p>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for High School Students</strong></h2>
                                    <p>Let’s say you are interested in literature, or physics, mathematics, or
                                        various science subjects. These interests will
                                        help you decide which major you want to study more in university, and high
                                        school students can prepare for it. If you
                                        are in high school and want to learn computer science, you can do some
                                        coding projects and online learning to prepare
                                        for studying computer science. I know some high school students who can do
                                        projects on their own, like making a mobile
                                        app. There are many resources out there and maybe through CCE you can build
                                        these connections!</p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={expose} alt="Expose yourself" />
                                    </div>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for People Interested in Computer Science Career</strong></h2>
                                    <p>If you are already in the computer science major, focus on the study. I know in US universities, the computer science
                                        department teaches a lot from theory to real projects. If you finish all the projects and homework with 100% effort, you
                                        will learn a lot and you can also learn the really basic skills, including data structures, introduction to algorithm
                                        architecture, and other classics in computer science that are really fundamental and that you will want to learn. For
                                        other students that are not in the computer science major yet and have additional time, I will say there are two
                                        options. One is that there are many online courses like Coursera, Udacity, and other online resources, where you can get
                                        the first step into computer science. The other is if you're still in university, you can try to audit or join a class
                                        in the computer science department to see whether you like it or not. After one semester you will get more information
                                        and more of a feeling about whether you really like this field, because there is a lot of coding and coding theory in
                                        the homework. I think you definitely need to expose yourself to the actual classes and do hands-on learning before you
                                        can decide whether that's something that you want to go for and to build a good foundation as you prepare for a career in industry.</p>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="main-page text-center">
                            <Button href="/chronicles" variant="info">All Chronicles</Button>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default InternshipsAreOpportunities;