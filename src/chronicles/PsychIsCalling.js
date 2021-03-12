import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';
// import ChroniclesHeader from '../components/ChroniclesHeader';
import paulwong from '../resources/images/chronicles/paul-wong.jpg';
import volunteer from '../resources/images/chronicles/volunteer.png';
import psychology from '../resources/images/chronicles/psychology.png';
import { Button } from 'react-bootstrap';

class PsychIsCalling extends Component {
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
                            <h1>Psychology is my Calling</h1>
                            <h6 className="authors">BY JUSTIN CHOW &middot; RAY CHANG &middot; SELINA YANG &middot; SABRINA TENG &middot; HARRY SIO</h6>
                            <h6 className="date">Feb 19, 2021 &middot; 4 min read</h6>
                        </Container>
                        <Container className="text-center">
                            <img className="chronicle-pics" src={paulwong} alt="Paul's headshot" />
                        </Container>
                        <Container>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="8">
                                    <br></br>
                                    <p>Dr. Paul Wong is a Canadian clinical psychologist. He graduated with a Psychology
                                    PhD from the University of Toronto,
                                    and teaches at numerous universities across the United States, such as York
                                    University and Trent University. In his
                                    decades of career experience, Dr. Wong created Meaning-Centered Counseling and
                                    Therapy (MCCT), a new approach to
                                    psychotherapy, and he is also the founder of the International Network of
                                    Personal Meaning and International Society for
                                    Existential Psychology and Psychotherapy. He has made an international impact on
                                    society through teaching, research, speaking, clinical and consulting practices.</p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2><strong>What do you do in your current occupation?</strong></h2>
                                    <p>As a psychologist, I do a number of things,
                                    ranging from teaching and research, to counseling and consulting.</p>
                                    <h2><strong>What led you to your current occupation? Why did you
                                    decide to pursue a psychology degree?</strong></h2>
                                    <p>
                                        It took trial and error before I discovered that psychology was my calling. As a teenager, I dreamed of either becoming
                                        a writer like my older brother, or an artist like Van Gogh whose paintings I loved greatly. But, I didn’t feel like I
                                        had the necessary talents. Once I studied psychology, right away I discovered it was
                                        my calling. In psychology, my talents and passion meet.
                                    </p>
                                    <h2><strong>What motivated you to work as a clinical psychologist?</strong></h2>
                                    <p>
                                        I first worked as a full-time faculty
                                        member, doing teaching and research. But I was also interested in helping people.
                                        In the early 80s, when the HIV/AIDS crisis occurred in Canada, I volunteered to
                                        provide free counselling for the LGBTQ+
                                        community. In the early 90s, I took up the position of Founding Director of the
                                        Graduate Program in Counselling Psychology at the <a href="https://www.twu.ca/about" target="_blank" rel="noreferrer">Trinity Western
                                        University</a>. This marked the beginning of my switch
                                        from experimental research to
                                        clinical psychology, where I developed my meaning-centered approach to therapy.
                                        <a href="http://www.drpaulwong.com/documents/HQM2-chapter28.pdf"
                                            target="_blank" rel="noreferrer">(Wong, 1998)</a>
                                    </p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={volunteer} alt="Volunteer" />
                                    </div>
                                    <br></br>
                                    <h2><strong>What is the purpose behind your consulting?</strong></h2>
                                    <p>
                                        I was motivated by my desire to bring
                                        meaning and happiness to suffering people. Especially during the pandemic, so many
                                        people are struggling with life. (Wong, 2020)
                                    </p>
                                    <h2><strong>Can you explain the academic journey you have taken?</strong></h2>
                                    <p>
                                        I took the usual route of completing an
                                        Honors Degree in Psychology first, then a PhD in Psychology. What made my
                                        academic journey unusual was that, for various personal reasons, I didn’t start my
                                        first year until I was 29. My
                                        <a href="http://www.drpaulwong.com/" target="_blank" rel="noreferrer">autobiography</a> has more
                                        details. That is why I worked extra hard to complete my
                                        entire academic journey in 4 years, half the time of an average student.
                                    </p>
                                    <h2><strong>How did the University of Toronto prepare you for your career?</strong></h2>
                                    <p>
                                        U of T is also known as Harvard North,
                                        rated as the top university for graduate training in Canada. It prepared me well
                                        for the vigor of scientific research, with Dr. Abram Amsel as my dissertation
                                        supervisor.
                                    </p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2 className="text-center"><strong>Tips for College Students</strong></h2>
                                    <p>I am not the best person to advise young people on how to make the most out of college, because as a mature student, I
                                    was much older than other students. Furthermore, I had to take more courses per semester in order to complete my degree
                                    program fast. Therefore, I missed the opportunity of taking part in various campus activities. However, I do advise
                                    college students to take part in both volunteer work and various university clubs. Such activities not only enrich their
                                    lives but also give them a better chance to be accepted by top universities.</p>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for High School Students</strong></h2>
                                    <p>Psychology remains the most popular program today, because it offers a number
                                            of <a
                                            href="https://www.topuniversities.com/student-info/careers-advice/what-can-you-do-psychology-degree#:~:text=Typical%20psychology%20careers,social%20work%2C%20therapy%20and%20counseling"
                                            target="_blank" rel="noreferrer">career paths</a>. Psychology can also help
                                            students to discover more about themselves and how to be <a
                                            href="https://www.businessinsider.com/coursera-yale-science-of-wellbeing-free-course-review-overview"
                                            target="_blank" rel="noreferrer">happier</a>.</p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={psychology} alt="Psychology" />
                                    </div>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for People Interested in Medical School</strong></h2>
                                    <p>I also have advice for people who are interested in medical school. There are many
                                    aspects of medicine that are very different from what ordinary people imagine a
                                    medical career to be. Uncovering the mysteries of the human brain or finding cures for
                                    cancer are not going to be a major part of your training, and your hospital volunteering
                                    experiences will be very different from a usual day as a healthcare worker. A huge
                                    aspect of medicine is having to communicate terrible news to an already shattered
                                    family. As you get more and more accustomed to the practical know-how of taking care
                                    of a patient, it is possible to become emotionally worn out by seemingly trivial details
                                    that actually become huge roadblocks to treatment flow, such as health insurance status,
                                    bed availability of post-acute care facilities, or missing family members who hold the
                                    power to make decisions for a patient. Think carefully before you apply to medical
                                    school, and remember to take care of yourself if you are admitted.</p>
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

export default PsychIsCalling;