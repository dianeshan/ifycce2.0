import { DetailedHTMLProps, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Modal, Button, ModalProps } from "react-bootstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import logo from "../assets/CCELogo_square.png";

//mentor pics
import paulpetrus from "../assets/mentors/PaulPetrus.png";
import stevexi from "../assets/mentors/SteveXi.png";
import timothyma from "../assets/mentors/TimothyMa.png";
import ninatsai from "../assets/mentors/NinaTsai.png";
import lindalee from "../assets/mentors/LindaLee.png";
import lijuhuang from "../assets/mentors/LijuHuang.png";
import kunzan from "../assets/mentors/KunZan.png";
import kedimei from "../assets/mentors/KediMei.png";
import johncheung from "../assets/mentors/JohnCheung.png";
import donaldcheng from "../assets/mentors/DonaldCheng.png";
import danielding from "../assets/mentors/DanielDing.png";
import chinjenchiang from "../assets/mentors/Chin-JenChiang.png";
import bindu from "../assets/mentors/Bindu.png";
import woojin from "../assets/mentors/WoojinKim.png";
import jackchen from "../assets/mentors/JackChen.png";
import sheanachen from "../assets/mentors/SheanaChen.png";
import weixumeng from "../assets/mentors/WeixuMeng.png";
import ireneyuan from "../assets/mentors/IreneYuan.png";
import rongyue from "../assets/mentors/RongYue.png";
import tachangfu from "../assets/mentors/TaChengFu.png";
import marcuswhite from "../assets/mentors/MarcusWhite.png";
import shengmingshan from "../assets/mentors/ShengmingShan.png";
import stargao from "../assets/mentors/StarGao.png";
import gloriali from "../assets/mentors/GloriaLi.png";
import brianlee from "../assets/mentors/BrianLee.png";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import { JSX } from "react/jsx-runtime";


function Timothy(props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Timothy Ma</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={timothyma} alt="Timothy's Headshot" />
        <h4>Business Development / Amazon</h4>
        <p>
          Timothy has 10+ years of industry experience in technical sales,
          business development, and product management focus on machine learning
          and cloud computing. He led multiple product developments, executions,
          and launches ranging from $10M to $100M run rates. Timothy is
          passionate about learning and building new products and a believer in
          giving back to the community. On a personal note, Timothy is a happy
          father and a family man who still tries to be better in both. He is
          also a big fan of college football and loves skiing and scuba diving.
        </p>
        <a
          href="https://www.linkedin.com/in/timothy-ma-6759b138/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Nina(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Nina Tsai</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={ninatsai} alt="Nina's Headshot" />
        <h4>Data Science & Analytics /Google</h4>
        <p>
          Nina Tsai has 20+ years of industry experience in Data Science and
          Analytics fields. She is currently a product analytics manager at
          Facebook, responsible for Ads product and operations. Prior to
          Facebook, she held positions at eBay, Safeway, CVS, and a startup, to
          drive business success through the use of data and analytics. Nina is
          very passionate about mentoring young professionals. She is the
          lean-in circle lead for Facebook diversity programs, and advocates for
          women in technology.
        </p>
        <a
          href="https://www.linkedin.com/in/nina-tsai/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Daniel(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Daniel Ding
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={danielding} alt="Daniel's Headshot" />
        <h4>Machine Learning in SWE & HWE / Samsung Research</h4>
        <p>
          For the past decade, Dr. Daniel Ding is a tech lead and passionate AI
          practitioner in the crossfire of cutting edge software and hardware
          design. From microprocessors to SaaS, he contributed to and led
          projects that impact the design, analysis and optimization of high-end
          computing systemss. Inspired by the 2020 global pandemic and educators
          around the world, Daniel has found a new passion to give back to the
          community and prepare the young generation for the future job market.
          Daniel received his PhD degree in ECE at the University of Texas at
          Austin and has authored/co-authored more than 50 peer-reviewed
          publications, including best paper awards and the highly prestigious
          ACM SIGDA Best PhD Dissertation Award in 2011.
        </p>
        <a
          href="https://www.linkedin.com/in/duoding"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Kedi(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Kedi Mei</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={kedimei} alt="Kedi's Headshot" />
        <h4>Civil & Transportation Engineering / BKF Engineers</h4>
        <p>
          Kedi Mei has 16+ years of experience in the Traffic Engineering field.
          She is currently a senior project engineer at BKF Engineers. She has
          managed numerous public transportation projects, as well as private
          development projects within the bay area and southern California. Some
          of the projects include BART extension in Fremont, VTA light rail
          extension in San Jose, Facebook campus, Gerald Desmond Bridge in Long
          Beach, and various highway improvement projects. Kedi is passionate to
          provide support by sharing her experiences to young engineers. She was
          one of the mentors in BKF Engineers’ Women in Engineering Resource
          Group. Outside of work, she is one of the spiritual parents at Young
          Adult Fellowship at her home church. She treasures her relationship
          with the young generation and enjoys sharing her life experiences to
          them.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Liju(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Liju Huang</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={lijuhuang} alt="Liju's Headshot" />
        <h4>UX & Visual Design / Enterprise Software</h4>
        <p>
          Liju Huang was a Sr. Visual Media Designer on an Enterprise Learning
          Organization of a human resources management software and services
          industry for 25+ years. Liju has been the lead designer in the areas
          of user interface and interaction design for many micro-learning
          templates, websites, menus, and learning management systems. Liju’s
          expertise is to combine user experience, brand, business and
          functional requirements with concise visual design to different
          products, services and platforms.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Donald(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Donald Cheng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={donaldcheng} alt="Donald's Headshot" />
        <h4>Electronics & Optics / Amazon</h4>
        <p>
          Dr. Cheng is a Sr. Hardware Engineer in Amazon Lab126 with eight years
          of industry experience working on laser, LED and consumer electronics.
          He has a PhD in Electrical and Computer Engineering from the
          University of Illinois at Urbana Champaign. Dr. Cheng receives
          guidance from many great mentors in his career. In the spirit of
          giving back, he has been mentoring young people to explore their
          passion and develop positive attitudes toward work and life. Outside
          of work he enjoys spending time with his family as well as outdoor
          activities.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Linda(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Linda Lee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={lindalee} alt="Linda's Headshot" />
        <h4>Corporate Debt Financing / Banking</h4>
        <p>
          Linda has over two decades experience in the financial services
          industry including branch operation, wealth management, and technology
          lending. Through her broad experiences, Linda has managed to fund over
          $600 million dollars loan transactions to companies in various
          industries including a $100 million syndication loan to a
          multi-billion eCommerce company as the Lead Agent. Currently Linda is
          the Director of a premium commercial bank with the exclusive focus on
          the United States and Greater China markets. Linda received her MBA
          from Santa Clara University with focus on Finance and Marketing.
        </p>
        <a
          href="https://www.linkedin.com/in/linda-lee-2b876a3/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Kun(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Kun Zan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={kunzan} alt="Kun's Headshot" />
        <h4>Machine Learning & Data Science / Expedia</h4>
        <p>
          Dr. Zan is a Sr. Manager of Data Science at Expedia Group. He is
          leading the Marketplace Optimization team working on pricing and
          monetization problems of the travel platform. Prior to the management
          role, he worked on a variety of machine learning and data science
          problems in the vacation rental marketplace, such as pricing
          optimization and revenue management, ranking system, marketing and
          sales. He got the PhD in Operations Research from the University of
          Texas at Austin.
        </p>
        <a
          href="https://www.linkedin.com/in/kun-zan-a4656917"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Steve(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Steve Xi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={stevexi} alt="Steve's Headshot" />
        <h4>Machine Learning & Fraud Detection / Facebook</h4>
        <p>
          Dr. Xi has extensive experience in machine learning, AI infra and
          system design. He received his PhD degree in Computer Science at the
          University of California, Riverside. He has been working in the
          industry for 10+ years, with domain knowledge in fraud/risk detection
          and ads integrity. He is now a tech lead in the business integrity
          team at Facebook. Before Facebook, he worked at Google for 7 years,
          building large scale ads policy review systems to classify Google
          search ads, display ads, mobile ads etc. Steve mentored many junior
          engineers and interns during his career, he has a passion and enjoys
          to see young professionals growing. He is also glad to share his work
          experience and life experience with mentees.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function John(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          John Cheung
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={johncheung} alt="John's Headshot" />
        <h4>Network Testing & Automation / Intel</h4>
        <p>
          John has been in the network test industry for 15+ years, with primary
          focus on enterprise and data center network infrastructure tests. He
          has worked in Cisco Systems for 11 years where he has been doing
          software testing in switches, routers and POC (customer proof of
          concept) testing for the various chassis based platforms including
          Nexus and Catalyst platforms. John then worked at a startup company
          Barefoot Networks, where he tested cutting edge programmable data
          plane switches, as well as mentoring teammates with his all rounded
          networking expertise. Barefoot was then acquired by Intel in 2019.
          John has been passionate about automation to help on test coverage and
          improve efficiency on the test process.
        </p>
        <a
          href="https://www.linkedin.com/in/john-c-928b3443"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ChinJen(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Chin-Jen Chiang
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="headshot"
          src={chinjenchiang}
          alt="Chin-Jen's Headshot"
        />
        <h4>
          Semiconductor Device Physics / Lawrence Livermore National Laboratory
        </h4>
        <p>
          Dr. Chiang is a staff scientist at Lawrence Livermore National
          Laboratory. His research interests include semiconductor device
          physics, microfabrication, and accelerators. He received his Ph.D. in
          Electrical Engineering from UC Davis. After graduation from UCD he
          worked in academia for 5 years. He also had 5+ years of industry
          experience before joining LLNL.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Bindu(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bindu Therthala
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={bindu} alt="Bindu's Headshot" />
        <h4>Embedded Software Architecture / Wireless Technology</h4>
        <p>
          Bindu Therthala has 25 years of experience in Software engineering and
          management across all stages of growth from small startups to large
          public companies. She is currently the Director of Software
          Engineering at ON Semiconductors through the acquisition of Wi-Fi
          technology leader Quantenna communications. Bindu is passionate about
          technology and values being part of purpose-driven teams. She has been
          a key contributor at Packet Engines/Alcatel, Mesh Networks/Motorola,
          Tropos Networks/ABB Wireless, Meru Networks/Fortinet, and Atheros
          Communications/Qualcomm. She enjoys reading, traveling, volunteering
          and Zen meditation.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Paul(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Paul Petrus
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={paulpetrus} alt="Paul's Headshot" />
        <h4>Network Infrastructure / Wireless Technology</h4>
        <p>
          Dr. Paul Petrus is the CTO of Radar, a startup company working on
          inventory location for retail and other industries. He is leading the
          product development and product strategy. Paul is a wireless industry
          veteran with more than 25 years of experience in product development
          and has shipped products worth more than $1B. Prior to joining RadaR,
          he was the Vice President of Engineering at Ruckus Networks, where he
          led the LTE Small Cells product development. This product is now
          deployed in a variety of Enterprises like malls, MDUs and K-12
          schools. Prior to that, Paul held several senior engineering positions
          in semiconductor companies like Qualcomm and Atheros. The products he
          developed have gone into Xbox360 controller, Macbook and other
          laptops. <br></br>Paul received his Doctorate degree in Electrical
          Engineering from Virginia Tech. He has authored more than 20 IEEE
          papers and he is also an inventor of more than 30 patents.<br></br>
          He is married and father of two teenage boys. He loves to sing and
          cook.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Woojin(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Woojin Kim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={woojin} alt="Woojin's Headshot" />
        <h4>Entrepreneur / E-Commerce</h4>
        <p>
          3x DTC Serial Entrepreneur <br></br>
          Ex-CEO Caseology (Exited) - CPG Brand bootstrapped from $0 to $144M
          GMV (5 Years) <br></br>
          Top 10 Amazon Seller - 9 Figures Sold on Amazon <br></br>
          Consulted 2 DTC Brands from $10M to $30M (1 Exited)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Jack(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dr. Jack Chen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={jackchen} alt="Jack's Headshot" />
        <h4>Oncology Research &amp; Development / Pfizer Inc</h4>
        <p>
          Jack is a R&amp;D Scientist with 15+ years of cancer research and
          oncology drug discovery experience. He is currently a research group
          leader mentoring PhD and non-PhD scientists for developing
          breakthrough cancer immunotherapies that may change patient life.
          Prior to Pfizer, he received his PhD degree at Johns Hopkins
          University and worked at Eli Lilly and OncoMed pharmaceuticals. His
          expertise includes R&amp;D pipeline leadership, targeted &amp;
          immunotherapy discovery, and precision medicine for patient- tailoring
          strategy.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Sheana(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sheana Chen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={sheanachen} alt="Sheana's Headshot" />
        <h4>General Counsel &amp; Vice President / Diodes Inc</h4>
        <p>
          Sheana Chen is a senior legal executive with over 20 years of
          experience in international commercial transactions and supply chain,
          M&amp;A, IP strategies, cross-border dispute resolution, ethics and
          compliance, enterprise risk management as well as ESG (environmental,
          social and governance). <br />
          As a forward-thinking international lawyer, Sheana is passionate about
          the intersection between law and technology. She brings innovative
          solutions to help companies solve complex legal and business
          challenges. Sheana has extensive experience in the semiconductor
          industry. She leads a global legal team to counsel business units,
          R&amp;D, sales, manufacturing and support entities, while managing
          ethics and compliance. Sheana currently serves as the General Counsel,
          Vice President of Diodes Incorporated. Prior to Joining Diodes
          Incorporated, Sheana was the Vice President, Assistance General
          Counsel with Texas Instruments. <br />
          Sheana also serves as the Policy Advisor, Chair of the Oversight
          Committee, and a board member of the Chinese Institute of
          Engineers/USA-DFW Chapter (CIE). She leads a CIE mentoring group and
          is also a mentor at Te Ohaka – the Cetre for Growth and Innovation
          (startup incubation). Sheana is a dual qualified English Solicitor and
          Barrister and a qualified New York State Attorney. Sheana was a
          Partner at Baker &amp; McKenzie and has worked in Dallas, Taipei,
          Shanghai, Singapore and London. Sheana holds a Master’s degree in
          International Commercial Law from the University of London and a LL. B
          Honors degree from the University of Manchester. She also has a
          Postgraduate Degree in Professional Legal Skills from the Inns of
          Court School of Law in the U.K. Sheana has completed the Harvard
          Business School Executive Education program, and the INSEAD Women
          Leading Global Change Program in France and is a Fellow with the
          International Women’s Forum.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Weixu(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Weixu Meng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={weixumeng} alt="Weixu's Headshot" />
        <h4>Senior Principal Scientist / Pfizer Inc</h4>
        <p>
          Ms. Weixu Meng, 中国科学院博士。现任辉瑞资深主任科学家。 十五年抗体及生物医药研发。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Irene(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Irene Yuan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={ireneyuan} alt="Irene's Headshot" />
        <h4>Chief Executive Officer & Founder / Voltraware Semiconductor Co., LTD</h4>
        <p>
          Ms. Irene Yuan RELinkage 顧問公司執行長 ; 前 Voltraware IC設計公司創辨人，
          佳必琦股份有限公司執行副總及董事，政治大學科技創新管理碩士，世新大學兼課講師，
          近40 年資訊科技產業經營管理，業務開發，企業重整募資等經驗。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Rong(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rong Yue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={rongyue} alt="Rong's Headshot" />
        <h4>Lead engineer / Mentor Graphics</h4>
        <p>
        Mr. Rong Yue, 西门子研发主任工程师, 普度大学(Purdue)数学博士+計算机碩士, 
        有近三十年信息产业多种領域的软件研发经历。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Tachang(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ta-Chang Fu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="headshot" src={tachangfu} alt="Ta-Chang's Headshot" />
        <h4>Mechanical Engineering Technologist / Western Digital</h4>
        <p>
          Mr. Ta-Chang Fu (傅大章)，現任 Western Digital 數據中心專用硬碟機研發部技術主管，
          柏克萊加州大學機械工程博士，從事硬碟機研發27年經驗。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Shengming(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shengming Shan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="headshot"
          src={shengmingshan}
          alt="Shengming's Headshot"
        />
        <h4>CEO / Wireless Technology</h4>
        <p>
          Mr. Shengming Shan, Founder &amp; CEO of SWR Technology, Founder of I
          FLY YOUNG CCE, Founder of Creative Chinese, Board Director of Daniel
          Christian Academy, Engineering Director of Qualcomm, MSEE Stony Brook
          University, NY, USA，30 years of technical development and management
          in semiconductor and communication industry.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Star(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Star Gao
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="headshot"
          src={stargao}
          alt="Star Gao's Headshot"
        />
        <h4>农业国际组织管理咨询顾问/生物信息遗传育种专家</h4>
        <p>
          概览：信主21年，结婚20年，2女1子，工作19年 <br/>
          职场：农业国际组织管理咨询顾问 / 生物信息遗传育种专家 <br/>
          教育：农业博士&#40;&#39;04&#41;, 工商管理硕士&#40;&#39;22&#41;, XCC认证教练&#40;&#39;22&#41; <br/>
          教会：带领查经，组织大型庆祝活动 <br/>
          爱好：烹饪，美食，交友待客，跳舞，旅行 <br/>
          福地：职青家庭团契，青少年及父母 <br/>
          双职事奉：CalledToWork 导师，使徒领导力组长
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Gloria(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Gloria Li
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="headshot"
          src={gloriali}
          alt="Gloria's Headshot"
        />
        <h4>加州認證執照婚姻家庭諮商師</h4>
        <p>
          從事精神健康與全人康復領域工作二十多年，現就任政府部門，公家機關的工作經歷也有十多年餘.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Brian(props: JSX.IntrinsicAttributes & Omit<globalThis.Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode | undefined; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Brian Lee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="headshot"
          src={brianlee}
          alt="Brian's Headshot"
        />
        <h4>Research Scientist / Gilead Sciences</h4>
        <p>
          Brian has 15+ years of experience with upstream bioprocessing and 
          process development in the bio pharmaceutical industry. He is passionate 
          about science and technology as well as introducing STEM education to young
          children through summer camps to spark curiosity and promote sense of wonder.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Team = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);
  const [modalShow9, setModalShow9] = useState(false);
  const [modalShow10, setModalShow10] = useState(false);
  const [modalShow11, setModalShow11] = useState(false);
  const [modalShow12, setModalShow12] = useState(false);
  const [modalShow13, setModalShow13] = useState(false);
  const [modalShow14, setModalShow14] = useState(false);
  const [modalShow15, setModalShow15] = useState(false);
  const [modalShow16, setModalShow16] = useState(false);
  const [modalShow17, setModalShow17] = useState(false);
  const [modalShow18, setModalShow18] = useState(false);
  const [modalShow19, setModalShow19] = useState(false);
  const [modalShow20, setModalShow20] = useState(false);
  const [modalShow21, setModalShow21] = useState(false); //waiting on marcus white info
  const [modalShow22, setModalShow22] = useState(false);
  const [modalShow23, setModalShow23] = useState(false);
  const [modalShow24, setModalShow24] = useState(false);
  const [modalShow25, setModalShow25] = useState(false);

  return (
    <div className="all-content">
      <div className="content-wrap">
        <AppNavbar />
        <div className="blue-container">
          <Container>
            <div className="white-text">
              <Row>
                <Col md="4">
                  <img className="headings" src={logo} alt="cce logo" />
                </Col>
                <Col className="headings3" md="8">
                  <h1 className="headings2">Our Team</h1>
                  <h4>Overcome the barrier, to jump-start your career</h4>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="main-page">
          <Container>
            <Container>
              <h1 className="text-center">Mentors</h1>
              <h5 className="text-center">
                Click on mentors below to see their bios
              </h5>
            </Container>
            <Container>
              <Container>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow22(true)}>
                      <img
                        className="headshot"
                        src={shengmingshan}
                        alt="Shengming's Headshot"
                      />
                    </Button>
                    <h6>Shengming Shan</h6>
                    <p>CEO / Wireless Technology</p>
                    <Shengming
                      show={modalShow22}
                      onHide={() => setModalShow22(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow(true)}>
                      <img
                        className="headshot"
                        src={timothyma}
                        alt="Timothy's Headshot"
                      />
                    </Button>
                    <h6>Timothy Ma</h6>
                    <p>Business Development / Amazon</p>
                    <Timothy
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow2(true)}>
                      <img
                        className="headshot"
                        src={ninatsai}
                        alt="Nina's Headshot"
                      />
                    </Button>
                    <h6>Nina Tsai</h6>
                    <p>Data Science & Analytics / Google</p>
                    <Nina
                      show={modalShow2}
                      onHide={() => setModalShow2(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow3(true)}>
                      <img
                        className="headshot"
                        src={danielding}
                        alt="Daniel's Headshot"
                      />
                    </Button>
                    <h6>Dr. Daniel Ding</h6>
                    <p>Machine Learning in Software & Hardware / Samsung</p>
                    <Daniel
                      show={modalShow3}
                      onHide={() => setModalShow3(false)}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow5(true)}>
                      <img
                        className="headshot"
                        src={lijuhuang}
                        alt="Liju's Headshot"
                      />
                    </Button>
                    <h6>Liju Huang</h6>
                    <p>UX & Visual Design / Enterprise Software</p>
                    <Liju
                      show={modalShow5}
                      onHide={() => setModalShow5(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow6(true)}>
                      <img
                        className="headshot"
                        src={donaldcheng}
                        alt="Donald's Headshot"
                      />
                    </Button>
                    <h6>Dr. Donald Cheng</h6>
                    <p>Electronics & Optics / Amazon</p>
                    <Donald
                      show={modalShow6}
                      onHide={() => setModalShow6(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow7(true)}>
                      <img
                        className="headshot"
                        src={lindalee}
                        alt="Linda's Headshot"
                      />{" "}
                    </Button>
                    <h6>Linda Lee</h6>
                    <p>Corporate Debt Financing / Banking</p>
                    <Linda
                      show={modalShow7}
                      onHide={() => setModalShow7(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow8(true)}>
                      <img
                        className="headshot"
                        src={kunzan}
                        alt="Kun's Headshot"
                      />
                    </Button>
                    <h6>Dr. Kun Zan</h6>
                    <p>Machine Learning & Data Science / Expedia</p>
                    <Kun
                      show={modalShow8}
                      onHide={() => setModalShow8(false)}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow9(true)}>
                      <img
                        className="headshot"
                        src={stevexi}
                        alt="Steve's Headshot"
                      />
                    </Button>
                    <h6>Dr. Steve Xi</h6>
                    <p>Machine Learning & Fraud Detection / Facebook</p>
                    <Steve
                      show={modalShow9}
                      onHide={() => setModalShow9(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow10(true)}>
                      <img
                        className="headshot"
                        src={johncheung}
                        alt="John's Headshot"
                      />
                    </Button>
                    <h6>John Cheung</h6>
                    <p>Network Testing & Automation / Intel</p>
                    <John
                      show={modalShow10}
                      onHide={() => setModalShow10(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow11(true)}>
                      <img
                        className="headshot"
                        src={chinjenchiang}
                        alt="Chin-Jen's Headshot"
                      />
                    </Button>
                    <h6>Dr. Chin-Jen Chiang</h6>
                    <p>
                      Semiconductor Device Physics / Lawrence Livermore National
                      Laborator
                    </p>
                    <ChinJen
                      show={modalShow11}
                      onHide={() => setModalShow11(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow12(true)}>
                      <img
                        className="headshot"
                        src={bindu}
                        alt="Bindu's Headshot"
                      />
                    </Button>
                    <h6>Bindu Therthala</h6>
                    <p>Embedded Software Architecture / Wireless Technology</p>
                    <Bindu
                      show={modalShow12}
                      onHide={() => setModalShow12(false)}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow13(true)}>
                      <img
                        className="headshot"
                        src={paulpetrus}
                        alt="Paul's Headshot"
                      />
                    </Button>
                    <h6>Dr. Paul Petrus</h6>
                    <p>Network Infrastructure / Wireless Technology</p>
                    <Paul
                      show={modalShow13}
                      onHide={() => setModalShow13(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow14(true)}>
                      <img
                        className="headshot"
                        src={woojin}
                        alt="Woojin's Headshot"
                      />
                    </Button>
                    <h6>Woojin Kim</h6>
                    <p>Entrepreneur / E-Commerce</p>
                    <Woojin
                      show={modalShow14}
                      onHide={() => setModalShow14(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow15(true)}>
                      <img
                        className="headshot"
                        src={jackchen}
                        alt="Jack's Headshot"
                      />
                    </Button>
                    <h6>Dr. Jack Chen</h6>
                    <p>Oncology Research &amp; Development / Pfizer Inc</p>
                    <Jack
                      show={modalShow15}
                      onHide={() => setModalShow15(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow16(true)}>
                      <img
                        className="headshot"
                        src={sheanachen}
                        alt="Sheana's Headshot"
                      />
                    </Button>
                    <h6>Sheana Chen</h6>
                    <p>General Counsel &amp; Vice President / Diodes Inc</p>
                    <Sheana
                      show={modalShow16}
                      onHide={() => setModalShow16(false)}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow17(true)}>
                      <img
                        className="headshot"
                        src={weixumeng}
                        alt="Weixu's Headshot"
                      />
                    </Button>
                    <h6>Weixu Meng</h6>
                    <p>Senior Principal Scientist / Pfizer Inc</p>
                    <Weixu
                      show={modalShow17}
                      onHide={() => setModalShow17(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow18(true)}>
                      <img
                        className="headshot"
                        src={ireneyuan}
                        alt="Irene's Headshot"
                      />
                    </Button>
                    <h6>Irene Yuan</h6>
                    <p>
                      Chief Executive Officer &amp; Founder / Voltraware
                      Semiconductor Co., LTD
                    </p>
                    <Irene
                      show={modalShow18}
                      onHide={() => setModalShow18(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow19(true)}>
                      <img
                        className="headshot"
                        src={rongyue}
                        alt="Rong's Headshot"
                      />
                    </Button>
                    <h6>Rong Yue</h6>
                    <p>Lead engineer / Mentor Graphics</p>
                    <Rong
                      show={modalShow19}
                      onHide={() => setModalShow19(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow20(true)}>
                      <img
                        className="headshot"
                        src={tachangfu}
                        alt="Ta-Chang's Headshot"
                      />
                    </Button>
                    <h6>Ta-Chang Fu</h6>
                    <p>Mechanical Engineering Technologist / Western Digital</p>
                    <Tachang
                      show={modalShow20}
                      onHide={() => setModalShow20(false)}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link">
                      <img
                        className="headshot"
                        src={marcuswhite}
                        alt="Marcus's Headshot"
                      />
                    </Button>
                    <h6>Marcus White</h6>
                    <p>Design Strategist / Booz Allen Hamilton</p>
                    {/* <Sheana
                      show={modalShow16}
                      onHide={() => setModalShow16(false)}
                    /> */}
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow4(true)}>
                      <img
                        className="headshot"
                        src={kedimei}
                        alt="Kedi's Headshot"
                      />
                    </Button>
                    <h6>Kedi Mei</h6>
                    <p>Civil & Transportation Engineering / BKF Engineers</p>
                    <Kedi
                      show={modalShow4}
                      onHide={() => setModalShow4(false)}
                    />
                  </Col>
                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow23(true)}>
                      <img
                        className="headshot"
                        src={stargao}
                        alt="Star Gao's Headshot"
                      />
                    </Button>
                    <h6>Star Gao</h6>
                    <p>农业国际组织管理咨询顾问 / 生物信息遗传育种专家</p>
                    <Star
                      show={modalShow23}
                      onHide={() => setModalShow23(false)}
                    />
                  </Col>

                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow24(true)}>
                      <img
                        className="headshot"
                        src={gloriali}
                        alt="Gloria's Headshot"
                      />
                    </Button>
                    <h6>Gloria Li</h6>
                    <p>加州認證執照婚姻家庭諮商師</p>
                    <Gloria
                      show={modalShow24}
                      onHide={() => setModalShow24(false)}
                    />
                  </Col>
                  <hr></hr>
                  </Row>
                  <Row>

                  <Col sm="12" md="3" className="text-center">
                    <Button variant="link" onClick={() => setModalShow25(true)}>
                      <img
                        className="headshot"
                        src={brianlee}
                        alt="Brian's Headshot"
                      />
                    </Button>
                    <h6>Brian Lee</h6>
                    <p>Research Scientist / Gilead Sciences</p>
                    <Brian
                      show={modalShow25}
                      onHide={() => setModalShow25(false)}
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
