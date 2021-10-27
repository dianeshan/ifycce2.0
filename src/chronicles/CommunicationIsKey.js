import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';
// import ChroniclesHeader from '../components/ChroniclesHeader';
import bindu from '../resources/images/mentors/Bindu.png';
import outside from '../resources/images/chronicles/outsideOfSchool.png';
import passionate from '../resources/images/chronicles/passionateAbout.png';
import { Button } from 'react-bootstrap';

class CommunicationIsKey extends Component {
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
                            <h1>Communication Is Key</h1>
                            <h6 className="authors">BY JUSTIN CHOW &middot; RAY CHANG &middot; SELINA YANG &middot; SABRINA TENG &middot; NATHAN YANG &middot; HARRY SIO</h6>
                            <h6 className="date">Septemeber 17, 2021 &middot; 7 min read</h6>
                        </Container>
                        <a href="#" id="introduction"></a>
                        <Container className="text-center">
                            <img className="chronicle-pics" src={bindu} alt="Bindu's headshot" />
                        </Container>
                        <Container>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="8">
                                    <br></br>
                                    <p>Bindu Therthala is the director of software engineering working at ON Semiconductors. She was born in India and graduated from U.V.C.E., Bangalore University, majoring in computer science and engineering. Since graduating, she has worked in many different environments, with extensive experiences in startup companies, specializing in embedded software architecture, wireless and wire-line technologies, and network management. She is now taking more of a director role, with expertise in team building, release management, customer engagement, and process improvement.</p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2><strong>How would you describe yourself and what you are doing now professionally?</strong></h2>
                                    <p>Bindu Therthala currently works as the director of software engineering at Quantenna Communication within their connectivity solution division. She teamed up with fellow software engineers co-workers in 2016. Her day-to-day tasks include assigning people to projects and priorities. This requires her to work cross-functionally with every department: hardware, software, marketing, customer support, etc. Her main role is to serve as a leader for her team and deliver Wi-Fi products by writing firmware for their computer chips. She is also responsible for planning, monitoring, and delivering a product. So for the hardware team, she helps solve problems in regards to optimizing performance of their network security. With the insurance team, she checks in with the quality control team to make sure the product meets certain standards. Finally, she acquires customer service data – e.g., customer usage and feedback – and incorporates what she finds in the passage of their work at Quantenna Communication.</p>
                                    <h2><strong>What is the driving force behind your work and what you pursue? Why did you decide to pursue working at technology start-ups? What motivates you to do what you are doing now?</strong></h2>
                                    <p>Number one driving force is passion, or simply wanting to make a difference in the world no matter how small. In her case, she said, “you must make sure that the company’s mission is well aligned with your goals in a start-up”. She found a purpose working for start-up companies. First, it gave her the opportunity to explore and contribute to the creation of many technological products/services. Over decades of exploring, she specializes with connective devices as they were the most important piece of technology for daily life. In Bindu’s words, she believes that everyone views connective devices more and more of a necessity that you cannot live without. From smartphones to navigating Google Maps to mobile transactions, the rapid evolution of software has exponentially grown the field and her role at start-up companies has become significantly more important over that time period. Second, she learned that if you are working in an environment free of work politics, there is a mentality to always question the status quo. Bindu appreciates how exploring new technology advancement has given way to more opportunities. Whether it's solving product issues or working with smarter people, what seems to motivate her is the opportunity to expand her deep knowledge in connective technology every day at work.</p>
                                    <h2><strong>How did you end up doing what you do now and what happened in the process?</strong></h2>
                                    <p>Bindu was born in India and she learned quickly that there was an emphasis in engineering and medicine. She decided to pursue engineering for multiple reasons: interest, family influence (dad and sister were both engineers), and a chance encounter. Bindu had always excelled in math and had a knack for solving problems, but in 8th grade, she first encountered a computer at school. In primary school, she knew of the existence of programming languages and electronics, but had little exposure to the field. However, since that fateful encounter, it felt as if she had found her career and has never looked back. Her journey started as a major in electrical engineering at Bangalore University but transferred into computer engineering. Since then, she has continued to be enthralled by technology and followed in the footsteps of her family to become an engineer.</p>
                                    <a href="#" id="collegetips"></a>
                                    <p>When Bindu was in her final undergraduate year, the dot-com era had just started and there was this internet explosion at the time. It was the perfect time to be hired for her first full-time job as a software engineer at Global R&D. She was quickly introduced to everything from new software to expanding her knowledge of coding. Bindu shared with me how important it is to find work experience outside of school as she had been thrown into the fire and was challenged early on at that position. She was lucky to have close mentors and experienced colleagues who recognized her hard work ethic and willingness to learn. They helped propel her career far quicker than she could have achieved herself and now serves as a director like her mentors before her. Lesson here is to always go the extra mile, as others will recognize your hard work and it will exponentially grow your skills.</p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={outside} alt="outside of school" />
                                    </div>
                                    <br></br>
                                    <p>Earlier in her career, Bindu was convinced by a male colleague to start a software company specialized in connective technology as she was young and had no outside commitment other than work. This allowed her to commit her entire time to rising up the ranks and helped each of her first few start-ups go public. During this period of transition, she learned that you should never feel like you need to reach a destination, but instead be open to learning or in the case of software engineers building skill over years of hard work.</p>
                                    <br></br>
                                    <h2><strong>In your view, what are some characteristics you appreciate working at a startup?</strong></h2>
                                    <p>First, an idea that challenges the status quo. There is always a risk involved because there is no tangible result. However, Bindu believes that risk is something that has always attracted her to a company. Second, since a startup company requires a team of highly qualified individuals, they should not feel afraid to voice your opinion. It’s a significantly different environment from working in a Big Tech company with 3000 employees in one department because your voice and ideas are recognized. Third, you are responsible for many different roles within a startup. On one day you may be responsible for engineering; on the second day may be quality insurance; on the third day you may be troubleshooting for a client using your product. Fourth, the bureaucracy is very limited, so you do not have to be assigned to a ten-man team or get approval from five other departments. It lessens the hoops you must jump through and Bindu very much appreciates that. Finally, she appreciates the culture as start-ups offer a very casual and inviting work environment. These are all critical components that help her decide whether she would like to work at a particular start-up.</p>
                                    <p>Start-ups present many challenges in the work catalog, but the majority of employees who end up working for them embrace those challenges. Key characteristics that make up an employee at a start-up include the ability to be a self-starter. This means being able to jump-start a project or initiate work without anyone else having to inform you. Knowing your role is key in this situation as your knowledge from past work experience will be tested, but self-starters tend to flourish in these scenarios. Second, start-up employees tend to enjoy the freedom and ability to make their own decisions. Bindu goes on to explain how working in a large company means many tasks are assigned, and they do not offer the flexibility but rather maintain control to achieve overall success. A start-up company invites those who appreciate the freedom of working on their own tasks. Finally, an informal trait I noticed when talking with Bindu is that start-ups often have leaders who do not conform but are rather, in her own words, “rebels with a cause”. It's clear how a start-up’s work environment is better suited for her and others who share these traits.</p>
                                    <a href="#" id="hstips"></a>
                                    <h2><strong>Software Engineering seems like a very popular career, and those who are working for larger software focused companies are motivated by the larger pay. What do you have to say against this sort of notion, and maybe describe how this obstacle may affect a start-ups success?</strong></h2>
                                    <p>If you were to join a start-up, then there will be many opportunities placed at your doorstep. However, it’s important to be realistic and realize that the end goal is to be acquired or IPO-ed by an investor. Yet, Bindu does not recommend us to take a job simply because you are guaranteed higher pay. Of course, financial stability is important, but she also said that a full-time job takes about one-third of your day. One-third of your life is spent at the office means you better enjoy your work or you will burn out sooner rather than later. Thus, Bindu emphasized that we should pick what we are passionate about, and then your commitment will determine how successful you will become.</p>
                                    <h2><strong>Starting a software company can seem daunting to many, and typical roadblocks include struggles with confidence and a fear of failure. Do you have any suggestions to address these obstacles?</strong></h2>
                                    <p>Bindu reassured me that many of the companies have their struggles. Especially for start-ups, financial crunch can be the difference between life and death. For start-ups, there is often no machinery and financial stability is not guaranteed, so there is a great deal of risk going off to start a software start-up company. However, Bindu shared how she views each challenge as an opportunity working for a start-up. She took the time to share how one of her early start-ups in software engineering had all the finances covered, but the 9/11 attack resulted in supporters pulling all their finances from the company. Yet, Bindu knew that what they were building was way ahead of its time, and she moved to California only to find the same prototype they built at a showcase. They were able to get a deal with a party that was interested and saved the start-up from collapse. Bindu continues to share how difficult times finding finances will demoralize even senior employees as it lowers the chances for start-ups to be publicized. However, each time she encountered that hurdle she worked towards an IPO and got acquired for millions of dollars. Again, each challenge can be seen as an opportunity to grow.</p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={passionate} alt="passionate about" />
                                    </div>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for International Students</strong></h2>
                                    <p>Bindu was most challenged by the language barrier. Her experience in the US was filled with miscommunications and a thick accent, as growing up in India meant she did not use English on a consistent basis. However, she noticed that places in the US are “melting pots” of cultures and many were accepting of non-native speakers. Something that remained consistent was that hard work was most valued, as this is stressed to the extreme in Asian cultures. Bindu learned quickly that communication was key: articulating details, using analogies, etc. She continues to say that in business culture, education is necessary to learn the technical points, but soft skills are vital to your success. In international countries, many of their schools do not teach these soft skills, which makes learning these skills on the fly very difficult. On the other hand, the US schools seem to teach students how to handle an argument, lead a debate, and master other soft skills before reaching higher education. Nevertheless, Bindu appreciates the freedom of being self-sufficient and enjoys the rights that come with being a green card user, despite the financial struggle she may have had early on.</p>
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

export default CommunicationIsKey;