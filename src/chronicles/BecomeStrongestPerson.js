import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import DropDown from '../components/DropDown';
import { Container, Row, Col } from 'reactstrap';
// import ChroniclesHeader from '../components/ChroniclesHeader';
import mehdi from '../resources/images/chronicles/mehdiKargar.png';
import reflection from '../resources/images/chronicles/selfReflection.png';
import question from '../resources/images/chronicles/question.png';
import { Button } from 'react-bootstrap';

class BecomeStrongestPerson extends Component {
    constructor(props){
        super(props);
        this.state ={
            title1: false,
        };
    }

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
                            <h1>Become the Strongest Person</h1>
                            <h6 className="authors">BY YUCONG YANG &middot; RAY CHANG &middot; SELINA YANG &middot; SABRINA TENG &middot; NATHAN YANG &middot; HARRY SIO</h6>
                            <h6 className="date">November 26, 2021 &middot; 9 min read</h6>
                        </Container>
                        <a href="#" id="introduction"></a>
                        <Container className="text-center">
                            <img className="chronicle-pics" src={mehdi} alt="Mehdi's headshot" />
                        </Container>
                        <Container>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="8">
                                    <br></br>
                                    <p>Dr. Mehdi Kargar is currently the CEO and co-founder of Maxterial, Inc, a material science technology company. Dr. Kargar has a Ph.D. in mechanical engineering from Virginia Tech., where he was working on advanced coating and biomaterials. In his company, he aims to provide affordable metallic coating to protect the surfaces against wear and corrosion while reducing the usage of dangerous chemicals. Dr. Kargar encourages young people to live a life, rather than just following the track and trend that everybody else does.</p>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"How would you describe what you're doing now professionally?"} 
                                              content={"My current job is the co-founder of a seven-year-old material science startup called Maxterial. The majority of my job is dealing with investors, senior management, shareholders as well as customers. Also, I must put the vision for the company on where it's going to go, and how those directions are going to enable something good for humans while enabling a good return on investment for shareholders."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"What is the driving force behind your work?"} 
                                              content={"Regarding my driving force throughout these years, I had a couple of ambitious goals. On the environmental side, we're eliminating a very toxic chemical called hexavalent chromium or chromium 6, which is widely used in the coating industry. These chemicals cause cancer. We can save the life of manufacturing workers by eliminating the use of those chemicals.\nOn the industrial side, major problems like corrosion and wear occur. Many assets are corroded every year, and that is a 2.5 trillion-dollar problem. We also want to reduce the carbon footprint associated with wear and friction by developing proper wear resistance technologies. It is estimated that 23% of the world’s energy and consequently carbon generated are used to overcome these issues today.\nAlso, we have an ambitious vision for the financial side. As I said, we always try to combine to do good and return good investment because I got people's money. We are planning to be a billion-dollar company within a reasonable timeline."} />
                                    <hr className="seperate-line"/>
                                    <DropDown title={"What is your background and how is it connected to your professional work?"} 
                                              content={"The title of my degree was always mechanical engineering. I had a bachelor's, two master‘s, and one Ph.D., all in mechanical engineering. But, I think I am much more of a chemical engineer. My first master’s degree was related to aerospace engineering, while my second master’s was mainly biomedical and biomaterials. I was making anti-bacterial and specialty coatings. My Ph.D. was mainly chemical – even my Ph.D. advisor was not an engineer but a chemist. My other advisor was a microbiologist and an environmental engineer. On the personal side, I think what changed my attitude toward business life and everything else was my work experience for small companies from 2005 to 2009 and before I start my Ph.D. in 2009. Those companies shared an entrepreneurial environment. I had projects in 10 or 11 companies, and I was exposed to all sorts of different industries – the edible oil industry, sugar industry, power industry, you name it. Now when I started a company in 2015, I had to put on a whole different hat. I was less engaged in science and engineering but more in the sales and financial aspects of the business."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"In your eyes, what are the necessary qualities for someone to become a successful entrepreneur?"} 
                                              content={"To me, it is mainly a matter of wanting to leave a good and big impact and have a vision. In the past 7 years, I just paid myself the plain salary. If I were looking for short-term gains, I could get a job at a large company and I would make 4-6 times what I made as salary during these years. The thing that matters is that you need to be able to think of it as a journey toward leaving a large impact. You have a vision that you really want to make a difference in the world. When it goes into operation, you need to be able to build a team. If you know how to deal with people, then you will know how to hire the right people who have the skills, and they will work with you."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"What are the types of people that you recruit into your team?"} 
                                              content={"At the early stage of the company, I am mainly hiring senior people. The company has built this technology, and now I really need a senior person who has a lot of experience in sales. So, I try to recruit strong senior people and I will let them hire the rest of the people.\nBut there are many senior people just like other experienced people. Among all these senior people, some of them have special drives. Some people really get to the point where they really want to do something big or different. Maybe they don't know how to start a company themselves. Maybe they don't want to take too much risk, but they still want to do something more than a day-to-day job. The first vice president we hired is about to retire, but when I met him, he said, “Look, I always wanted to start my own company. I never could take a risk like that.” I said, “you know, you're a very capable person. Why don't you join us?” And he came in, and that person alone is doing the work that a group of typical employees cannot."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"What are your thoughts on being an effective leader and keeping the team motivated for the long run?"} 
                                              content={"That's one thing I learned over the years: a leader should be the example. If there is hard work that must be done, he is the one who does it. If working over the weekend is sometimes needed, the leader is the one who does it first. He does not just order others to do that.\nI try not to ask people to follow a rule that I don't. In leadership, I have to set rules and standards, which should be clear to everybody. Communication is also very important. People want to make sure they are heard, not just being ordered to do this and that. When you are listening to them it shows that they are important. And if they are important, they will be more willing to look up to your leadership. Another important thing I found is that the startup CEO should spread a vision that a teammate has to understand. What is the main goal of our company? Why is this goal important?\nEmpowering is also very important. Before empowering, you should make sure nobody ever puts anyone down. Years ago, I did not understand the impact of these principles. I used to get frustrated often. I think if a leader is powerful inside, that person naturally empowers other people. But if the person naturally is insecure or weak, then they may put other people down. So, empowerment comes from people who are self-made, powerful, and more internally cohesive. Leaders also become more powerful when they empower other people. That's how I experienced it because I made that mistake when I was younger and less experienced.\nRecruiting also plays a role because if you recruit the wrong people in the team, then all the things will go wrong. Even when you hire the wrong person, the way you deal with them is important."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"Do you have any suggestions for addressing common roadblocks like lack of confidence and fear of failure?"} 
                                              content={"Well, one straightforward suggestion is to find a good mentor – somebody who can be honest with you, who can tell you the truth, and whom you trust. If no one tells you, you may never see it or you may learn it the hard way if you ever learn.\nThe second thing goes back again to the value system of people. If the value system is only driven by people saying good stuff about you, or your vision is just to be a billionaire, to be famous, and things like that, then you will always need external sources to make you feel valuable. But if your value systems go a little differently, in my opinion, you see things differently.\nAnother thing that I also want to tell you, is to have people around yourself that appreciate your growth. There are many things we don't know. If you are dealing with people who constantly compare you with someone much better than you, a lot of time that can negatively impact your confidence and gets you into a different mode of operation. But if you also have people that appreciate your growth – for example, last year you had no idea how to raise money, but now you raised a million – that is another very important part. Be appreciative of our growth. I always tell people that in my opinion, happiness is not a matter of having. Happiness is a matter of gaining. If you get to the highest place, I don't know if you're going to feel any happiness. But when you're moving up at a proper speed, you feel a sense of happiness. I was at 900 feet yesterday but now I am at 1000 feet and that is where I expect to be, and I believe that's the kind of mindset that we have to build inside for our souls. You need a mentor to help you set your goals and metrics and celebrate meeting the goals as you meet them.\nYou don’t want to become an egoistic person, but you also don’t want to become a weak person and never appreciate your own value.  So the key to being at the balance point is always having self-reflections, having somebody who gives you feedback, and somebody who believes in you. More importantly, have realistic but ambitious goals. Also, remember to celebrate small achievements. If you meet the milestone, even by a little bit, then go buy yourself a coffee or a gift or whatever. One thing that was missing in me is that I was constantly chasing the milestones. When I hit a milestone, I will immediately start looking at my next milestone. Don’t do this. Buy yourself an ice cream or buy for your teammates something appreciated. I think it's important to value our groups and be ambitious at the same time. Don't just go for a small thing but take steps towards your big goals and celebrate your success."}
                                              img = {reflection}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"Tips for Finding a Mentor"} 
                                              content={"I think asking for help is the first step. If you talk to me and if I don’t know that you want to hear my thoughts, it is highly unlikely for me to offer that to you. If somebody is admitting that I need help and I need to grow, people will try to help you – what do you mean by a mentor? What do you need? That's the beginning of it. During this thought process, you will start wondering and asking yourself what you really need.\nSecondly, use your network very well. Somebody says network is net worth, so use your network to connect yourself to people. Maybe I need somebody who can speak Chinese. Sometimes people will just know a potential candidate, so I always try to use my network. So, when I started my company, one of the alumni of my university invested in my company and I told him that I need a good business mentor to teach me how to develop a fundraising plan. Then he connected me to this person, made a good friend and that's how we found him.\nMy third point, again, goes to sincerity, honesty, and thinking of what you really want to do. A good mentor will always want to help somebody figure out things or go toward the goal. The better you know what you want, the more relevant mentor you will find, and they can help you better.\nWhen I was a student, I really needed somebody to teach me something about bacteria. I went to LinkedIn and searched that. I found somebody in New York with relevant expertise. I emailed him. I told him what I wanted to do and how I found him, and that person answered my question without knowing who I am! So, ask for it."}/>
                                    <hr className="seperate-line"/>
                                    <DropDown title={"Tips for College Students in Mechanical or Chemical Engineering"} 
                                              content={"Well, you know it depends on your goals. To develop your leadership skills, I think to try to be active in the college program. I suggest contributing to extracurricular activities, like being a member of some student groups. Try to take some leadership position learn to deal with people. For example, in your position, you might have to get some money from someone to buy pizza for the rest of the people, and these are the things that make you think of many aspects that you have never thought of. Set yourself into a place that forces you to ask questions – can I do it? Why can’t I do it?\nNumber two, if they want to be professional engineers, go for an internship and don't stick to school only. When you go into an internship, the first thing you do is to sign an IP assignment. “What is an IP assignment? I've never seen any document like that.” Just getting into that environment immediately will already make you learn so much. If there are professional development courses in the school, take them. Even basic stuff, like how to write a professional lab notebook can impact the person who wants to hire you. If you want to start a company, then expose yourself to these environments. Many of the schools nowadays have an entrepreneurship competition. At least go there, sit there, and see what these people are doing. Listen to their pitch. I think these are the things people in school should do, and you should consider that as important, maybe even more important than whether they pass a course."}
                                              img = {question}/>
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

export default BecomeStrongestPerson;