import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';
// import ChroniclesHeader from '../components/ChroniclesHeader';
import timothyma from '../resources/images/chronicles/timothyMa.png';
import certification from '../resources/images/chronicles/certification.png';
import course from '../resources/images/chronicles/course.png';
import { Button } from 'react-bootstrap';

class DoSomethingYouLike extends Component {
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
                            <h1>Do Something You Like</h1>
                            <h6 className="authors">BY RAY CHANG &middot; SELINA YANG &middot; SABRINA TENG &middot; HARRY SIO</h6>
                            <h6 className="date">Apr 16, 2021 &middot; 10 min read</h6>
                        </Container>
                        <Container className="text-center">
                            <img className="chronicle-pics" src={timothyma} alt="Timothy's headshot" />
                        </Container>
                        <Container>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="8">
                                    <br></br>
                                    <p>Timothy Ma is a Senior Tech Business Development and Product Manager at Amazon
                                    Web Services (AWS), with many years of
                                    expertise in Cloud and Data Center. He has a master degree in electrical
                                    engineering at University of Michigan, and an
                                    MBA at University of Pennsylvania. Before joining AWS, he also worked in Cisco
                                    as engineer sales, technical marketing
                                    engineer and product manager. Being a product manager, Timothy enjoys the
                                    process of translating his vision in
                                    technology into clear execution plans and seeing the actual product in
                                        customer’s hands.</p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2><strong>Can you share a little bit about yourself?</strong></h2>
                                    <p>Sure! I grew up in Taiwan, then came to the
                                    US for college. I studied at Ohio State, then later on I got my master’s at
                                    the University of Michigan. Throughout my student career, I mostly focused on
                                    electrical engineering and computer
                                    science. When I graduated and actually started my career, it was 2008. It was a time
                                    of financial crisis, so it was
                                    pretty hard to find a job. I had to do a complete pivot from what I was studying,
                                    and I actually started my first job in
                                    sales, focusing on networking. I joined Cisco System, one of the leading vendors for
                                    networking, and I was in a part of
                                    the sales associate program. That’s where I started my career in the tech industry.
                                    </p>
                                    <p>
                                        I did a couple of years of sales, then pivoted to a more technical role as a
                                        technical marketing engineer (TME). The
                                        interesting part of a sales engineer is that we go very broad but pretty shallow in
                                        each area. There were so many
                                        interesting areas in technology, like security, data center, cloud, and I wanted to
                                        pick one area to really dive deep
                                        into. That’s why I became a TME, and I chose to focus on data center.
                                    </p>
                                    <p>
                                        After I did that for a couple of years as well, I realized that I'm really
                                        interested in the business side. As a
                                        technical person, a lot of the time I wouldn’t get involved with how customers make
                                        decisions or how we take the product
                                        to the customer. The technical folks would usually come in after the sale was made.
                                        That’s where I really got
                                        interested, so I switched from a technical role to the product manager (PM) role,
                                        which is more focused on business.
                                    </p>
                                    <p>
                                        In a nutshell, the product manager is like a mini-CEO. A CEO owns the company
                                        strategy execution and the result.
                                        Similarly, I will be responsible for pretty much everything about a product or
                                        product line within the group. That
                                        includes initial steps like identifying market opportunities and finding where the
                                        product market fit is. How do we
                                        build an MVP (minimum viable product)? Where will we be able to get the MVP version
                                        to the customer? What are some of
                                        the future features that we should make? How do we scale from the MVP to more like a
                                        V1, V2? How do we bring this
                                        product to the overall market; not just the pilot customer, but for the larger
                                        enterprises out there? I’ve focused my
                                        career mostly on the B-to-B, the business to business, not so much the product from
                                        business to consumer.
                                    </p>
                                    <p>
                                        I worked as a product manager for a couple of years. Then I joined AWS about four
                                        years ago, because I’m really from a
                                        data center perspective. Cloud is the future; everybody is moving to it. [After
                                        joining AWS,] I’ve been doing similar
                                        things as a product manager, but blended with some of the sales skills I had in the
                                        past. It’s a blended role of
                                        developing a product with the engineering team and working with the sales team to
                                        bring it to market and ramp up the
                                    revenue.</p>
                                    <h2><strong>Can you talk more about what your specific role is as a
                                    product manager in AWS?</strong></h2>
                                    <p>
                                        A unique feature of being a product manager
                                        at AWS is that we own what we call product definition. This is asking the
                                        question of what we want to build. The product manager gets that initial idea
                                        through market research or getting
                                        feedback from existing customers. If they recommend we build something, and we see
                                        enough traction on the same request,
                                        then we know it is something we should invest in and build.
                                    </p>
                                    <p>
                                        Once we get a sense of what the customer wants, we go back with the engineering
                                        team. We, as the product manager,
                                        specifically write a document called PR-FAQ (press release frequently asked
                                        questions), which basically defines what the
                                        product is, hence product definition. Other organizations might call it PRD, which
                                        stands for product requirements
                                        documents. The very important thing that product managers do is understanding the
                                        prioritization. The customers will
                                        always ask for maybe 10 features they want to have, but we have to work with them to
                                        understand their ranking from one
                                        to ten. A lot of the time we don’t have the resources or time to build all ten, so
                                        we have to prioritize. We use the
                                        term P0 to describe features [or items with the highest priority], meaning that we
                                        cannot launch the products without
                                        it. So out of the ten features, how many are P0 functionalities? What’s the cost of
                                        building them? It’s critical for the
                                        product manager to figure this out, so we can help the engineers build the correct
                                        MVP with the initial customer
                                        traction. In the next iteration, like the V1 and V2, we can build beyond P0 to P1,
                                        P2, and P3, the later priority
                                        features.
                                    </p>
                                    <p>
                                        The product manager also has to work with the sales team. First we have to educate
                                        the sales team about what we’re
                                        building: what it does, how it benefits the customer, and the outcome they can
                                        expect to have. Actually, a lot of the
                                        time it’s the product manager who’s selling the product to the pilot customers. We
                                        show the benefit to the customer,
                                        they’ll test it, and if they like it, they’ll adopt the feature or product. After
                                        the product launch, we need to figure
                                        out how to scale the product. As a single product manager, I can’t talk to all the
                                        customers. I have to enable our
                                        [sales] team to act like me and to be able to sell the product. We also need to
                                        think about our strategy for scaling the
                                        product. We could go to the sales team, the partners, and maybe even other channels.
                                        There’s a lot of thinking about
                                        business strategy and how to grow revenue. We work with the engineering team to
                                        build the product and with the sales and
                                        marketing team to scale the product. We’re responsible for its success or failure
                                        overall; if it does well, we get the
                                        glory, but if it fails, we get all the blame too.
                                    </p>
                                    <h2><strong>What motivates you to continue working as a product manager?</strong></h2>
                                    <p>
                                        [People in AWS share a unique mentality.
                                        Although] we’re not at the same level as a lot of startups, we often operate
                                        like a startup, meaning that we’re early vision. We have the early vision of the new
                                        product or service we should be
                                        building, or a major enhancement for an existing service or feature to make for our
                                        customer. I have the vision of where
                                        the product market fit will be, then I execute it, and the customers adopt the
                                        product. Not only will we be able to
                                        bring in revenue, but the customer overall satisfaction with AWS increases. Being
                                        able to visualize and translate what
                                        was just in my head into execution is typically what motivates me the most. A
                                        product manager is essentially a builder,
                                        and you have to enjoy building things up from scratch.
                                    </p>
                                    <br></br>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={certification} alt="certification" />
                                    </div>
                                    <br></br>
                                    <h2><strong>What made you switch from engineering to product
                                    managing? What interested you about it, compared to engineering?</strong></h2>
                                    <p>
                                        Product managers and engineers share some
                                        similar characteristics; they identify and solve a problem by design or
                                        implementation. However, product managers have the additional consideration of the
                                        business side. If you look at a lot
                                        of the tech industry, the product that’s really successful at the end might not have
                                        the best tech from an engineering
                                        point of view, but it’s the best in combining the engineering and business sides.
                                        What a product manager considers is,
                                        “how do I find a market fit where I can build a good enough engineering product?”
                                        Once I have the initial customer and
                                        can scale, I can continue to refine my product and make it better.
                                    </p>
                                    <p>
                                        It’s a different mindset from an engineer, where we always want to build the best:
                                        the best code, the best hardware, or
                                        the best car. But from a product manager perspective, there’s a trade-off between
                                        time and what we build. What I’m
                                        interested in is finding the right balance between a good enough product and getting
                                        enough initial customers.
                                    </p>
                                    <h2><strong>I noticed that you also work with Amazon Sage Maker. Can
                                    you share your experience on that as well?</strong></h2>
                                    <p>
                                        Machine learning (ML) is kind of a buzzword.
                                        Most startups today will tag themselves with machine learning or AI to some
                                        degree, but machine learning is still in its infancy stage, meaning there’s a lot of
                                        open source things out there. A lot
                                        of customers can stitch it together to make it work, in a DIY style, and there are
                                        many different standards across
                                        companies on how they do AI-ML. This is where we think Amazon Sage Maker can help.
                                        Like how AWS was popular among
                                        enterprises, the value proposition for Cloud is to help offload undifferentiated
                                        work so you don’t have to manage the
                                        server. You don’t have to own the data center, or pay for power and cooling; we
                                        manage all that for you. We provide the
                                        infrastructure or data center to the customer where they can dynamically adjust it
                                        based on their business need.
                                    </p>
                                    <p>
                                        Similar benefits apply to Sage Maker. Customers are interested in building the
                                        model, validating it, then using the
                                        model they’ve validated to forecast fraud detections and increase their business
                                        value. But to achieve that stage, the
                                        customer has to build a lot of things themselves today, which are undifferentiated.
                                        They have to build their own machine
                                        learning platform and standardize on their own best practice, which can create a lot
                                        of silo. Silo means that every
                                        department within that organization has a different practice. What Sage Maker is
                                        offering is a managed platform, meaning
                                        anything you don’t need to deal with. We manage all that in the cloud
                                        infrastructure, just like how we give you the
                                        benefits from the cloud as well. It really allows customers to just focus on
                                        spending their time and resources on
                                        building the model and algorithm, which is specific for their application.
                                    </p>
                                    <h2><strong>What advice would you give to college students,
                                    particularly STEM majors, in pursuing product management?</strong></h2>
                                    <p>
                                        Most technical majors, statistics, or math
                                        majors definitely give you a very good base and all the necessary skills to
                                        do analysis and troubleshooting. What’s most important is developing ways to learn
                                        new things. Everyone is different,
                                        and you have to have your own methodology. This is especially important in the tech
                                        industry, where you will
                                        continuously need to learn something new. For example, I needed to learn Cloud, then
                                        Kubernetes, then AIML, and there’s
                                        always more on the horizon to learn. You also need to be able to do this outside of
                                        a classroom setting. In school,
                                        there’s always an agenda, a syllabus, or a professor with you, but you have to be
                                        able to develop the skills to really
                                        grasp and master new ideas on your own. In the tech industry or any other STEM
                                        major, you can’t just rely on the
                                        knowledge of your major, but you’ll have to have the framework to learn outside of
                                        it.
                                    </p>
                                    <p>
                                        Another way to prepare is to be broad in what GEC courses you take. A lot of the
                                        time people will just focus on their
                                        major, but I highly encourage taking courses outside of that. The product manager is
                                        a hybrid role; it is technical and
                                        business. We work with basically all the different aspects of the enterprise or
                                        organization, so taking some of the
                                        marketing or business courses will be essential to knowing these other functions.
                                        Understanding what other people do and
                                        having some of that background will certainly help a STEM student's success as a
                                        product manager in the future.
                                    </p>
                                    <h2><strong>It sounds like it’s very important to have that
                                    engineering mindset, but not so much the school mindset. For college
                                    students in general, what was your experience studying at Ohio State University? How
                                    did your undergraduate degree help
                                    you later on in your career?</strong></h2>
                                    <p>
                                        The number one thing college gave me is a framework to learn different things. I
                                        focused on my major as an electrical
                                        and computer engineer, but I also took a lot of different GEC. I had interest in
                                        courses like psychology, statistics,
                                        and even some of the languages, like Japanese. It really expanded my horizon and
                                        helped me develop that methodology to
                                        learn new things, which helps me in my work environment today.
                                    </p>
                                    <p>
                                        College also gave me confidence. My undergraduate journey was different from a lot
                                        of folks here. When I came to the US
                                        for college, I didn’t speak English, so there was definitely a steep learning curve
                                        for me. As a non-native speaker,
                                        overcoming the language barrier showed me that language shouldn’t be a blocker for
                                        me in school or in the workplace.
                                        That confidence continues to help me refine how I present, communicate, and connect
                                        with people.
                                    </p>
                                    <h2><strong>How did you overcome that language barrier?</strong></h2>
                                    <p>
                                        Back in college I was a member of the crew
                                        team. We would train everyday, so I spent maybe two hours a day with native
                                        speakers. I gradually picked up what they were saying, and even started to be able
                                        to read between the lines. That
                                        exposure to native speakers outside of the classroom really helped me to pick up the
                                        language. But even after I
                                        graduated, there was still a gap for me when I presented myself in English. For me,
                                        joining Toastmaster was a purposeful
                                        effort into polishing those skills. The pressure of working also helped me improve.
                                        If I can’t convince others in a
                                        sale, then it’s hard for me to keep my job. These ways really helped me overcome
                                        that barrier, especially being on the
                                        crew team; immersing myself on a daily basis definitely helped me get a jump start.
                                    </p>
                                    <p>
                                        I will also encourage STEM students to join a club, even if it doesn’t relate to
                                        your major. You’ll learn something
                                        that’s unexpected, and that could help your career down the road.
                                    </p>
                                    <h2><strong>What was your experience pursuing an MBA, after working
                                    in engineering, sales, and product management for several years?</strong></h2>
                                    <p>
                                        So there are two avenues for an MBA.
                                        Typically people do an MBA after graduating; the golden timing is about three to
                                        five years afterwards. They might do consulting, investment banking, or financial
                                        services before then, but they’ve
                                        identified their career path and they want to go relatively quickly. Some folks want
                                        to be a product manager, so within
                                        those 3-5 years, they’ll apply to MBA. Most product managers in the enterprise world
                                        have an MBA, and while it’s not
                                        required, having it is definitely a big plus.
                                    </p>
                                    <p>
                                        The other route is for people who work for longer, like me. I worked for almost 10
                                        years before pursuing my MBA, and I
                                        pursued that degree because I needed to know how to perform my daily job. Coming
                                        from an engineering and sales
                                        background, I didn’t have the training for pricing, modeling, or forecasting. A lot
                                        of folks that pursue an MBA much
                                        later in their career come from degrees unrelated to business, like engineering,
                                        law, or medicine. After working for a
                                        while, they’ll gradually switch to an executive or more business-oriented role,
                                        where they’ll learn the business
                                        discipline and new skills through the MBA.
                                    </p>
                                    <h2><strong>Can you share your perspective or advice for college
                                    students who are not sure about their future directions?</strong></h2>
                                    <p>
                                        Data scientists and business analysts are
                                        pretty hot right now. There are thousands of these job postings, and it’s
                                        definitely a great way to get into the tech workspace. But I also encourage you to
                                        rotate around in your first couple of
                                        years. People can give you their feedback and experience, but it’s really up to you
                                        to experience it for yourself. It’ll
                                        take some time for you to really find where you want to launch your career.
                                    </p>
                                    <p>
                                        I didn’t find the product manager role until almost five years after I started
                                        working, and it took some trial and
                                        error. I tried sales and I liked it, but I knew I didn’t want my whole career to be
                                        sales. I tried technical marketing
                                        engineering, but again, that’s not something I feel like I will build my entire
                                        career upon. Then I tried product
                                        management, and I really liked it; it was something I could establish myself and
                                        launch my career upon. Some people may
                                        have a very direct mapping after they start a career, and that’s great. But I think
                                        the majority of folks need that
                                        trial and error to really find their right career path. Just because data science is
                                        hot doesn’t mean it’s for
                                        everybody, right?
                                    </p>
                                    <h1 className="text-center">&middot; &middot; &middot;</h1>
                                    <h2 className="text-center"><strong>Tips for Looking for First Job</strong></h2>
                                    <p>My path was pretty direct; I just went to school career services. Typically
                                    most companies, including Amazon, will have
                                    a preferred education institution they work with. Every year, there will be
                                    an internship, then a full time job will
                                    come. You’ll need to be familiar with what your school offers regarding
                                    career services and what company typically works
                                    with your school.
                                            </p>
                                    <p>
                                        Another path is mentorship. I didn’t do it when I started my career, but I
                                        wish I could have. If you kind of know what
                                        you want to do in your future, a platform like CCE will connect you with a
                                        mentor who will be able to point you to those
                                        industry specific events, groups, or LinkedIn to join. You’ll get the
                                        exposure to see if you want to launch that career
                                        and what you need to do. For example, what certification do you need to
                                        have? What kind of courses do you need to take?
                                            </p>
                                    <p>
                                        Besides, note that certification is actually more important than a lot of
                                        people think. One of the reasons I was able to
                                        land my job at Cisco is because I happened to have a certification in
                                        networking, and that really helped me
                                        differentiate myself from all the other newly grads at the time. We all
                                        focus on our GPA in school, but we don’t spend
                                        much time tackling industry certification, right? That can be a pretty
                                        significant differentiation, especially in the
                                        first job or internship, since there’s no prior work experience to judge
                                        applicants by. Having certification will make
                                        your resume stand out pretty easily.
                                        </p>
                                    <p>
                                        Also, interviewing skills are amazingly useful. Any customer-facing role
                                        requires the skill to help the customer, but
                                        most importantly to extract the main idea. It’s not taught at school a lot
                                        of the time and the importance of this skill
                                            is often overlooked.</p>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for High School Students</strong></h2>
                                    <p>Taking AP courses in high school is one thing you can do. Computer science
                                    was harder for me in college because I never
                                    did coding in high school. We were taught all the theory when I grew up in
                                    Taiwan, but we never actually implemented
                                    coding. Getting hands-on experience at the high school level will be really
                                    helpful for college. I saw my peers
                                    understand what the professor wanted right away while I was still scratching
                                    my head, and it turns out they had AP
                                    computer science back in high school. If it’s an interest or major they want
                                    to pursue, trying out classes in high
                                            school will definitely give a much faster start in college.</p>
                                    <div className="text-center">
                                        <img className="chronicle-pics" src={course} alt="Course" />
                                    </div>
                                    <br></br>
                                    <h2 className="text-center"><strong>Tips for International Students</strong></h2>
                                    <p>They’re very fortunate in the current time to have so many online courses to take,
                                    like Coursera. Every online course
                                    has a different target audience, so do some research to see which ones are good for
                                    you. I recommend focusing on entry
                                    level and going with a brand name in terms of e-learning educators. When I came here
                                    from Taiwan, we didn’t have any of
                                    those resources. I just kept going to office hours and tried to figure things out; I
                                    think my TA really didn’t like me
                                    because I visited so often. The language and the computer science barrier was pretty
                                    hard. But international students in
                                    the 21st century have way more options, it’s just up to them to spend time and
                                    research. Maybe you only need to take a
                                    couple courses, or even just a couple of bootcamps, and you’ll get a pretty good
                                    idea of the language and computer
                                    skills needed.</p>
                                    <br></br>
                                    <h2 className="text-center"><strong>Career Advice for Students</strong></h2>
                                    <p>For folks interning in the tech industry, there are definitely different ways to be
                                    involved in it; you don’t really
                                    need to be in computer science. For every tech company, there’s a need for finance,
                                    marketing, sales, and engineering.
                                    At the early career stage, go broad. The only way to go broader is to try different
                                    roles in an organization or company.
                                    That will really help you find something you like, and then be able to build upon it
                                    over the course of the year.
                                    </p>
                                    <p>
                                        The worst case scenario is being stuck in a role you don’t enjoy, but you’re
                                        depending on that job as your career is
                                        moving forward. Something I always tell people is, you want to do something you
                                        like. It could be a lot of pressure, it
                                        could be a lot of stress. But at the end of the day that has to be something that
                                        motivates you and that you enjoy
                                        doing. If it is just an 8-to-5 job, that's not going to be something you feel
                                        satisfied with. As your career extends,
                                        the pay isn’t going to be the major motivation, but really the fulfilment. The
                                        accomplishment will really be where the
                                    job satisfaction comes from.</p>
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

export default DoSomethingYouLike;