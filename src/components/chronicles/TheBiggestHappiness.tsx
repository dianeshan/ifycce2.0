import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";

import woojinkim from "../../assets/chronicles/woojinkim.png";
import confidence from "../../assets/chronicles/confidence.png";
import ecommerce from "../../assets/chronicles/ecommerce.png";

class TheBiggestHappiness extends Component {
  render() {
    return (
      <div className="all-content">
        <div className="content-wrap">
          <AppNavbar />
          <div className="main-page">
            <Container className="text-center">
              <h1>The Biggest Happiness</h1>
              <h6 className="authors">
                BY YUCONG YANG &middot; 5tRAY CHANG &middot; SELINA YANG
                &middot; SABRINA TENG &middot; HARRY SIO
              </h6>
              <h6 className="date">May 27, 2021 &middot; 15 min read</h6>
            </Container>
            <a href="#" id="introduction"></a>
            <Container className="text-center">
              <img
                className="chronicle-pics"
                src={woojinkim}
                alt="Woojin's headshot"
              />
            </Container>
            <Container>
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <br></br>
                  <p>
                    Woojin Kim is an entrepreneur, specializing in eCommerce
                    business. He is the ex-founder of Caseology, a CPG brand
                    bootstrapped from Zero to $144M in total revenue. He has
                    served more than 6 million customers, and was the top 10
                    Global Amazon Seller in 2017. He runs a faith-driven
                    business, which is on a mission to support eCommerce brands
                    through growth capital and operations support. After being
                    saved by Grace from the Lord, Mr Kim believes that we are
                    more than enough to make a difference in this world, and we
                    should always give back by serving others.
                  </p>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2>
                    <strong>
                      How would you describe yourself and what you're doing now
                      professionally?
                    </strong>
                  </h2>
                  <p>
                    Our area of focus is eCommerce. A lot of eCommerce owners
                    start as a side job -- there’s actually no “eCommerce”
                    profession yet, no major consumer goods, so it’s an
                    interesting growing part of the business world. I’ve been
                    doing it for 11 years, making products, creating value for
                    customers, and fixing their problems. So, in overall
                    business, I would say I am pretty experienced in problem
                    solving.{" "}
                  </p>
                  <h2>
                    <strong>
                      Can you be more specific and describe what kinds of
                      problems that you solved?
                    </strong>
                  </h2>
                  <p>
                    When we started, I didn’t even know how to import or export
                    consumer products, so I would get stuck there. All my
                    products got held in customs, and I didn’t know how to get
                    them out. That was a problem we had to solve. In addition,
                    we had to solve capital problems because no one wanted to
                    loan or invest in our consumer goods business. With no
                    history, investors are scared of investing, because there’s
                    too much risk that they’ll have to use all the cash on
                    inventory. We also had to solve marketing issues; it’s not
                    just about finding good products, but also how to sell the
                    product. At the end of the day, any business has to solve
                    problems with different perspectives. Do I look at this
                    issue with an investor perspective, or a consumer
                    perspective? We learned that my opinion is not always the
                    answer, there are other people’s expectations out there.
                    When we got stuck and didn’t know what to do, really
                    believing in ourselves, that we were meant for this, helped
                    us not give up. We’ve had many crises, like near bankruptcy,
                    but we overcame them to even reach the top 2 sellers on
                    Amazon. We’ve grown from zero to 120 employees. At first we
                    were just ordinary people, with first time jobs and no
                    background, but because we were professional and did what we
                    needed to do, we’re not scared of any problems and are
                    solid.
                  </p>
                  <h2>
                    <strong>
                      There are many things you have to learn on the fly to be
                      an entrepreneur, and that could be an intimidating
                      roadblocks to people who want to get into
                      entrepreneurship. Could you share some of your insights
                      and advice on how you addressed these roadblocks?
                    </strong>
                  </h2>
                  <p>
                    Sure. So the thing is that, we can’t solve every problem, so
                    we [first] categorize [our problem]. [Is] fear [the problem
                    that we are facing]? Are we scared of trying it? Or do we
                    really think we can do it? We call that faith or confidence
                    -- in Christian terms it will be faith, and to nonbelievers
                    we just use the word confidence, right? So I think it's
                    really getting rid of the fear and really going to the
                    visionaries stage. Do you think you can really do it when we
                    start picturing? Sometimes, even though we don't have the
                    capacity, we start picturing what it would be like and we
                    start getting excited. [For example,] what do you think you
                    would do if you win the lottery? When we think of the
                    lottery, we start smiling and we're like, ‘Oh my gosh. I can
                    win the lottery.” Similarly, we start imagining when we're
                    solving a problem. A lot of people don't imagine what it
                    would be like after you solve it, but we start setting that
                    as the goal. Like making a goal for a problem, going
                    backwards and not being afraid of failure because the plan
                    doesn't always work.
                  </p>
                  <p>
                    The key thing was the way we treat failure. Do we treat
                    failure like a failure or do we treat failure as learning?
                    As long as we’re treating failure as the fuel or steps or
                    learning, then there is no “failure”. We'd learn as much as
                    we can and share the learning. Every time we learn, I think
                    our perspective gets bigger. Sometimes, God is trying to
                    teach us. Every failure for us has a meaning, so we try to
                    treat failures as learning. [With that mindset,] the journey
                    becomes more enjoyable -- we try to tackle as many problems,
                    possibly learn and enjoy it because it's good muscle for us
                    at the end of day, and we just take it a step at a time.
                  </p>
                  <p>
                    The other thing is, sometimes we have to accept the door
                    being closed [by the Lord]. Sometimes we may think, “oh, if
                    we do this plan then we can do that”, or “if I get this
                    partner we can get big deals.” Sometimes it just doesn't
                    work, and we have to accept that it is not meant for us
                    right now, and maybe there is a different way. Even though
                    we actually had the power to force open the door and get
                    that deal if we really wanted to, sometimes God doesn't want
                    that. Every choice that we make has a consequence or reward.
                    Maybe we can force open the door and get whatever we want,
                    but eventually we [may] feel the [internal] conflict. So I
                    think these days, we try to make it more peaceful, natural
                    and not forceful. When we include God [in our decision
                    making], problem solving becomes more natural and enjoyable.
                    We may think we are stronger than Him or think we are more
                    capable, but that leads to feeling lonely later down the
                    road. So we try to ask [Him] a lot. We are faith-based
                    business, and God always leads us to every choice we make.
                    When we include Him, we become more mature and we get to
                    learn when we're in control versus when we want Him to
                    control stuff.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={confidence}
                      alt="confidence"
                    />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      What is the driving force behind your work? What makes you
                      passionate and decide to pursue entrepreneurship, and
                      particularly in eCommerce?
                    </strong>
                  </h2>
                  <p>
                    I think what drives me is the journey of faith. I learned a
                    lot about why God mentions faith so much in the Bible. On my
                    journey and others’, a lot of people forget what God does
                    for them, or the help they receive. I’m really grateful for
                    the change that happened in my life before and after this
                    entrepreneurship. Before, I had nothing, even near bankrupt.
                    I didn’t have a working permit, so I was basically illegal.
                    I wasn’t actually good at anything, and my grades were
                    pretty bad. I really felt like I was nothing, but now I’m
                    completely changed. I can take care of the people I care
                    about, and there are a lot of people who believe in me. I
                    really believe that everything that happened was 100%
                    through God, because I alone just wasn’t capable. So my
                    driving force is that I owe Him my life. I remember what he
                    did for me. I remember who I was. I remember the things that
                    I overcame.
                  </p>
                  <p>
                    Thankfully, through that journey I learned His heart, and
                    how much He wants people to have faith in Him. As much as I
                    appreciate the people who believe in me, I learned how much
                    it means [to God] when we believe in Him. You get to
                    appreciate people who believe in you more than you believe
                    in yourself. I think it is a very encouraging feeling that
                    God wants to have a relationship with us, so I really
                    believed in him and actually appreciated him. There’s this
                    idea that God doesn’t pick the most qualified or perfect
                    people, but qualifies the called instead. As long as you
                    believe your call, you don’t have to be qualified or
                    perfect. I really think my journey is a testimony to that,
                    because I was nothing close to perfect. I was able to see
                    through him and the business, it's pretty amazing because I
                    wouldn't have thought of all these achievements or these
                    ideas. A lot of the time, I really didn't come with the
                    idea. It was like, it happened, and God opened the door. At
                    the end of the day, [I just want to] remember what He did
                    for me and know that I owe Him everything.
                  </p>
                  <h2>
                    <strong>
                      Can you share some examples of how your faith in God
                      contributes to your work?
                    </strong>
                  </h2>
                  <p>
                    You know it’s God when you get ideas that you never could
                    have thought of on your own. You know who you are, you know
                    how smart you are. Ideas where you think, “wow, this
                    definitely isn’t mine,” happen when you ask Him. There’s a
                    lot in asking God for help and for blessing, and then
                    actually acting on what he gives.
                  </p>
                  <p>
                    At one point, we didn’t have any money in the business, so
                    we had to close many, many times. Every other month or so,
                    we were going to go bankrupt, but God would provide
                    investment opportunities that kept us going. We wouldn’t be
                    doing well, but we weren’t in fear, because God took care of
                    us so many times. So we diligently and faithfully act as if
                    we’re not going to close, because we didn’t get this far to
                    close. Believe you’re on the journey; you’re here to impact.
                    As long as you’re prepared and act faithfully, God gives
                    opportunities. You know it’s God, because we didn’t send
                    that email or make that call; we didn’t ask other people for
                    anything, we only asked God. Then these things would come
                    and keep us alive.
                  </p>
                  <p>
                    What was really helpful was knowing when it was God versus
                    when it was you. It’s important because you have to glorify
                    God when you know it’s God. Don’t take his credit. Tell
                    people that there were things we did right, but it wasn’t
                    you who made that call, it was really God. We might be
                    afraid of how people will receive it, but just boldly saying
                    that makes a huge difference.
                  </p>
                  <h2>
                    <strong>
                      What kind of people do you look for to join your team?
                      What are characteristics for people who want to succeed in
                      a startup or entrepreneurship environment?
                    </strong>
                  </h2>
                  <p>
                    In our company, we look for people who know how to be
                    thankful. A lot of people are just complaining about life in
                    general, from the smallest to the biggest things. We’re
                    drawn to complaining, so it’s very rare to find thankful
                    people who make the most out of potential moments of
                    complaint. It’s finding meaning in a bad situation, and
                    deciding to be thankful. Deciding to be thankful when a bad
                    thing happens to you is actually an active faith, and we
                    look for that because we like to serve. We really care about
                    serving others, and we expect you to serve as well. If you
                    don’t know how to be thankful, you’re forcefully serving,
                    and it’s not coming from you. Thankful people also create
                    good energy and positivity. They also remember what they
                    received and what we taught them.
                  </p>
                  <p>
                    The second thing we look at is how self-centered you are.
                    There are very egocentric people that only talk about
                    themselves when they’re in a group, and they don’t ask how
                    others are doing. We don’t like working with these people,
                    because when they solve problems, they only look at it from
                    their perspective. They don’t have the listening skills to
                    understand and feel emotions towards customers or partners.
                    Very self-centered people can’t see beyond themselves, so
                    we’re not attracted to that.
                  </p>
                  <p>
                    The third thing would be proactive and reactive action.
                    We’re naturally wired to want to follow, but instead of
                    being in an environment where you follow, can you be an
                    environment where people will want to follow you? Even if
                    they’re new, there are proactive people who are constantly
                    asking. Asking itself isn’t wanting to follow, it’s wanting
                    to observe, and you’re creating a shift in the energy. When
                    you’re being thankful, serving, asking, and doing, as a new
                    person, you create lots of positive energy for the existing
                    people. Then we tend to shift to that person. We see the
                    potential in them, we want to grow them, and we believe that
                    they’ll create a good environment for others to constantly
                    multiply in. We care more about wanting to grow, change and
                    impact, and a little less about the skill sets. Of course,
                    we need a certain amount of those skill sets, but we were
                    people with huge drive, not just skill sets. So we believe
                    in the environment you create first, and the skill you have
                    second.
                  </p>
                  <p>
                    We also like people with good habits. Habits are very hard
                    to break. We try to hire based on [the] environment [they
                    create] or [their] habits, because through that the work can
                    be learned. We can [always] figure out [the issues if it is
                    just the lack of] the skills, but it’s a lot harder to
                    [figure things out if the problem comes from the wrong]
                    environment [they create] or [the lack of good] habits.
                  </p>
                  <h2>
                    <strong>
                      The giving and receiving and positivity of your company
                      culture fits very well with CCE’s mission as well! That’s
                      a different perspective, focusing on the culture and
                      people, which is really important since that’s who you
                      interact with daily.
                    </strong>
                  </h2>
                  <p>
                    Yeah. I just want to add a little bit. These are the things
                    that will help us find who’s the right person for us. There
                    have to be two things: the right person and the right seat.
                    It’s not the right skill; it’s the right seat. If you know
                    it’s the right person, we have to move them around to find
                    what matches them in terms of skill set and the role itself.
                    A wrong person doesn’t fit in any seat though, and we have
                    to get them out of the company. They’re going to be a cancer
                    to the company, and it’s just not going to work. It has to
                    be the right person first, and if they’re right, there’s a
                    chance we can find a different role or seat for them. That’s
                    a lot easier of a fix than trying to make a wrong person
                    right; it just doesn’t work. Shengming mentioned something I
                    really liked, which is that we value picking the right soil.
                    If it’s the right soil, it’ll grow really well. But if it’s
                    just totally the wrong soil, even the best seed won’t grow
                    in it. But sometimes, even giving a little bit in the right
                    soil will grow a lot.
                  </p>
                  <p>
                    One person at our company was just like that. We gave them a
                    little information, and he absorbed everything. We don’t
                    have to give 20 hours of training, just a little, and he
                    actually makes more out of what we learned.
                  </p>
                  <h2>
                    <strong>
                      How do you manage to balance entrepreneurship with your
                      own personal life?
                    </strong>
                  </h2>
                  <p>
                    I’m actually pretty bad at it. In the past I would do
                    everything that came into my lap, so the only choice was to
                    sleep less and just do more, but I learned later that we get
                    burnt out really quick. So I think we have to find what
                    we’re weak at, and start making partners or hiring the right
                    people that will cover those weaknesses. Now we try to do
                    what’s impactful, and you do that by not making it perfect,
                    so we can keep moving.
                  </p>
                  <p>
                    A lot of people want it to be perfect, but mini-progresses
                    are what’s important. There’s this concept I really like
                    that Andrew Wilkinson shared. People try to make a car, but
                    to make a car, you need the frame, the engine, the pipes,
                    the wheels, and after you’re finished, then you can go.
                    Instead of that, what worked for us was to make a
                    skateboard, then a scooter, then a bike, then a car. You
                    want to make progress as you go, instead of trying to make
                    it perfect. We get overwhelmed when we do things that aren’t
                    impactful, so we don’t make progress. We have to make mini
                    progresses to get data; we fail and we fix. We need time to
                    go through cycles of learning instead of ending up making
                    one big fat failure. So instead of making a bold break, we
                    should scale it down to a smaller version, so we can learn
                    and keep making a more progressive learning path.
                  </p>
                  <p>
                    It’s also important to delegate as you go. One thing we
                    learned is if you try to do everything yourself, you’re not
                    going to get anywhere; you could go far, but not further.
                    Knowing how to get there with people was key to getting
                    there faster. People might say working with other people
                    will slow them down, and that may be true, but you can’t get
                    far without it. So we spent time training, teaching, and
                    trying to find people that are like us.
                  </p>
                  <p>
                    Another thing that happened with time was that I cut off a
                    lot of people in my life, and created a circle around the
                    people that helped me. It was painful in the beginning, but
                    you have to surround yourself with the right people. I think
                    we’ve all heard that from somewhere, but I didn’t listen to
                    it. I really valued every relationship I had, but I realized
                    there were some that slowed me down a lot. Or if you spend
                    less time with them, you don’t have to cut ties completely,
                    and then you can visit or help them back. To give you an
                    extreme example, I had to cut my relationship with my
                    family, because they were really hurting me. But now I’m
                    really close with them, and we’re way closer than before.
                    All the scars are healed and everything is much better.
                  </p>
                  <p>
                    Knowing how to do that, delegating and being with the right
                    people, is very helpful and balancing. If you’re tired, just
                    don’t do work, and do what would re-energize you. Sometimes
                    people say I’m a workaholic, and even though work makes me
                    happy, if I knew I was getting in over my head, I have to
                    stop. If you know something’s good for you, and you don’t
                    want to do it, most of the time you should do it. Healthy
                    food normally isn’t super tasty, but you need to eat it. I
                    try to focus on what I have to force myself to do. We
                    naturally tend towards comfort and laziness, but cutting
                    those and doing what’s good for you, even if it’s painful,
                    really helps to get the balance we actually want.
                  </p>
                  <p>
                    One thing we teach at our company is called “counter.” For
                    example, we really care about giving back, but how much are
                    we really doing to give back? So here is where we counter:
                    “we know we care, but we’re not doing it. So we’re going to
                    do it.” We analyze ourselves, and help analyze other people.
                    For example, “I know you care about working out, but you’re
                    not doing it, so let’s find a way where you’re going to work
                    out.” So with “counter”, we try to practice the healthy
                    things that help us. Other people don’t even have to ask you
                    what you do and don’t need to do, because if you think about
                    it, we already know how to counter ourselves, so we just
                    need to focus on getting that balance.
                  </p>
                  <a href="#" id="confidence"></a>
                  <h1 className="text-center">&middot; &middot; &middot;</h1>
                  <h2 className="text-center">
                    <strong>Tips for International Students</strong>
                  </h2>
                  <p>
                    I was born in Korea but went to kindergarten in Australia,
                    elementary in Brazil, and then middle school in Korea. I
                    went to high school in the US, but in between I went back
                    and forth to Korea. So on average, it was rare for me to be
                    in one place for more than two or three years. It was
                    usually one to two, and then we kept moving to different
                    places, because of my father’s job as an international
                    trader. So I did have an identity crisis, as well as a
                    language problem. It was hard for me to make friends I’d get
                    used to. So when we went to the states, I asked my dad, “I
                    wanna stop moving, I wanna settle down and make friends.”
                    But since I was young, I don’t think I knew what I was
                    asking. For us to stop moving, he would have to quit his
                    job, and that would make us illegal. So we came into the
                    states legally, and then became illegal.
                  </p>
                  <p>
                    I was able to go to public school and graduate from college
                    without a Social Security number, but I couldn’t work
                    without one. I was trying to be a dentist, and I didn’t know
                    I couldn’t be one until later in college. That’s when I
                    started working 5 jobs, like as a waiter or in a warehouse;
                    any jobs that would pay me, since I couldn’t get a
                    legitimate job. That led me to start a business. I had to
                    pay a ton of taxes, but I could still start one without a
                    social security number.
                  </p>
                  <p>
                    There’s always a way. I could have made an excuse out of the
                    situation, but there’s always a way, if you just don’t give
                    up. Like I said earlier, believing you are meant for
                    something, and that you didn’t come this far to not have an
                    opportunity, makes your story and your faith stronger. It
                    makes you more capable, because you overcame more than what
                    others had to. It’s a good challenge to have, and you’ll be
                    a testimony to not having any excuses. I really think the
                    people who overcome more will be more successful in general.
                    The more issues, the better the chances.
                  </p>
                  <p>
                    I was also really bad at words, but if you can’t speak, you
                    can’t be a CEO, right? So there were a lot of obstacles for
                    me; I was Asian, I didn’t have a Social Security number,
                    etc. But it didn’t matter; those were just opportunities for
                    me to find a different path. I think that’s what made us
                    rely on God more, since we couldn’t rely on the benefits. We
                    had nothing which we could have done by ourselves, so we
                    just had to keep asking God; there were no other options.
                    The door He opened was better than the loan, it was better
                    than anything. There’s always a way out. Asking God first
                    and acting on what you asked is better than just having
                    privileges.
                  </p>
                  <p>
                    The first time God helps you, it’s like, “wow! God, thank
                    you!” But if he keeps doing that for many years, you just
                    know he’s going to take care of you, and you become
                    confident. Since God has opened so many doors for me, I’m
                    more confident, and I don’t care if it doesn’t happen the
                    way I want, because He always has a better door or strategy.
                    Any opportunity or partnership you get will go peacefully,
                    because of what I call, a bold, humble confidence. You don’t
                    need to be cocky, but you have to have extreme confidence;
                    it is or it isn’t. Faith and confidence align. With that,
                    even if you’re a new person in a new place, that can still
                    be an environment where you can make a difference. People
                    can feel that positive energy and they’ll be attracted to
                    it.
                  </p>
                  <p>
                    Sometimes people will just have things they want to look
                    for, and if you don’t fit that criteria, you don’t have to
                    be there; there might be a better place. Just know that you
                    are more than enough; you are chosen by God, and you came
                    here not to fail, but to make a difference. Have that
                    confidence. People should look for you, not you looking for
                    where you want to go. It’s a big shift, but I really believe
                    in that. After seeing what He did for me for so many years
                    and even to other people, I see successful people having
                    that confidence and having that super strong relationship
                    with God. They don’t always come from a huge successful
                    background; normally it’s the opposite. So just have that
                    bold, humble confidence.
                  </p>
                  <a href="#" id="ecommerce"></a>
                  <br></br>
                  <h2 className="text-center">
                    <strong>
                      Tips for People Interested in eCommerce or
                      Entrepreneurship
                    </strong>
                  </h2>
                  <p>
                    If you’re interested, I really recommend pursuing
                    entrepreneurship. You get to find a version of you you never
                    thought you had. It’s like being a parent, but fast-tracked
                    20 years or so if you’re young. Taking care of employees is
                    kind of like raising a kid, so I started raising kids, my
                    business, when I was 25. You learn to be mature and a
                    leader, because you have to do business. Even if you hired
                    people of a similar age, you just naturally mature faster in
                    your position. You can’t act dumb, you can’t act stupid, and
                    you know that because people get hurt. You become more
                    aware, more responsible, and you get to learn the necessary
                    survival skills. You don’t have to have a big business, but
                    you learn so much in that position that you wouldn’t get in
                    any other job. You might if you’re high up in a different
                    company, but with entrepreneurship, you get to see all of
                    it; you face reality, and you get that raw experience.
                  </p>
                  <p>
                    You’re on your own, but you just can’t do it alone, so I
                    think that’s an opportunity for you to meet God. You get to
                    experience and be with Him a lot more, and you just became
                    this version of you faster than any other job.
                  </p>
                  <p>
                    eCommerce is interesting compared to others. For restaurants
                    you need a recipe, to do any other business you need cash.
                    But with eCommerce, you just need the right product and have
                    a few customers. You can start it as a side thing, then make
                    it into a main thing. You don’t have to know code, you don’t
                    have to know design; there’s a way to start without being
                    perfect. You can learn as you go on how to be better and how
                    to make an impact. That’s why I’m still in eCommerce. Now
                    I’m trying to help other eCommerce owners get to the next
                    level, because I know they can’t do everything on their own
                    for long.
                  </p>
                  <p>
                    So for entrepreneurship, first, you get the experience, but
                    if the business does really well, you’ll get paid more than
                    any other job. What I would tell my past self and every
                    entrepreneur is to run a business like you’re going to exit.
                    When you exit, you generate a lot of wealth. And to exit,
                    you have to run the business clean, you have to make it
                    investable, and not make yourself the focus of the business.
                    Buyers like businesses where they’re hands-off, so they’re
                    basically buying cash flow. To be hands-off, you have to
                    know how to systematize. So with your exit in mind, you
                    would run a standard of a good, healthy business, and when
                    you exit, you basically get paid a couple years up front. If
                    it’s a 4x exit, it means you fast-tracked four years. Then
                    as you constantly build and exit businesses, you’re saving
                    five, ten, twenty years of your life, fast-tracking faster
                    than anyone else.
                  </p>
                  <p>
                    I’m in my 11th year now, but I didn’t know all that before.
                    A lot of people told us to expedite when we were super
                    successful, but I didn’t see why we should exit when we’re
                    doing well. But then the debt crisis hit, so you never know
                    what will happen. It’s like when you go to Vegas; you’re not
                    going to want to leave the table when you made the most. But
                    I think exiting is helpful, and when you do, you can really
                    serve the people you like. You could buy Ferraris, but the
                    biggest happiness is when you get to help others in a way
                    where you would have never thought you could help.
                    Definitely give back to God as well, and He will bless you
                    even more.
                  </p>
                  <p>
                    Rick Warren’s testimony is huge. He gives back 90% and lives
                    off of 10%, but his 10% is so big. He constantly practices
                    giving and giving, but he also receives. He keeps getting,
                    because God can trust him in serving others. With
                    entrepreneurship, you’re creating your own vision. If you
                    put God into that formula, you’ll see things you would have
                    never seen before, and become some who you would never have
                    thought you could become. We have our own choice, and we’re
                    not building someone else’s empire. We get to build a part
                    of God’s empire.
                  </p>
                  <div className="text-center">
                    <img
                      className="chronicle-pics"
                      src={ecommerce}
                      alt="ecommerce"
                    />
                  </div>
                  <br></br>
                  <h2>
                    <strong>
                      Could you give a quick definition of what you mean by
                      “exit”?
                    </strong>
                  </h2>
                  <p>
                    Exiting means selling your business. In the US, it’s in
                    terms of profit. Depending on the trend or healthiness of
                    your company, businesses like software companies can be over
                    10X, meaning you get 10 times of one year’s profit upfront.
                    Simply put, it’s annual profit times whatever multiple. If
                    your trend is up and down, then your multiple is going to go
                    lower. If your trend is flat, then you’ll get a little
                    lower. If your trend is very attractive, then you get more.
                    There are different ways to value businesses, but in
                    eCommerce it’s 3-6, and it’s going up every year, since
                    eCommerce is getting more and more popular. Previously there
                    was no way for ecommerce to exit, but now there is. There’re
                    always exits for software companies though.
                  </p>
                  <p>
                    Exiting could also include fundraising. When there’s
                    fundraising, you can exit your shares partially, and you
                    don’t have to sell the whole thing. Even restaurants can
                    exit. Just make your trend healthy and stable, have a
                    consistent customer base, and you can exit 2-4X, and
                    fast-track.
                  </p>
                  <p>
                    If you get really good at it, you’ll realize you’re good at
                    problem solving in any business, it’s all somewhat similar.
                    It’s about the environment, the management skills, the
                    organization, making the books clean, and knowing how to
                    market. I would perfect one industry, and then go to other
                    industries. It’s like buying a house, knowing how to fix it,
                    then selling it. As long as you know how to fix the house,
                    you could buy any house in the world. That’s what I call
                    problem solving. If you know how to fix it, you can fix any
                    business.
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

export default TheBiggestHappiness;
