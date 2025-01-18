import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../../App.css";
import AppNavbar from "../AppNavbar";
import Footer from "../Footer";
import AudioPlayer from "./AudioPlayer";

import logo from "../../assets/CCELogo_square.png";

class OfficeHoursAbout extends Component {
  render() {
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
                    <h1 className="headings">
                      Mandarin Office Hours <br />
                      溝通與職涯探索 職場問答時間
                    </h1>
                    <h4>Tune in to wisdom from CCE Mentors</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <div className="inner">
              <Button color="primary" href="/officehours">
                Office Hour Recordings
              </Button>
            </div>
            <h1 className="inner">About</h1>
            <div className="inner">
              <div>
                日光節約時間 (3/10-11/3/2024）
                <br />
                提前30分鐘
                <br />
                美西時間週一晚上Monday <br />
                8:30--9:30PM <br />
                北京/台灣時間週二中午Tuesday
                <br />
                11:30--12:00 等候神
                <br />
                12:00--12:30 職場問題回應 <br />
              </div>
              <div>
                冬令時間 (11/4/2024-3/8/2025)
                <br />
                美西時間週一晚上Monday
                <br /> 8--9PM <br />
                北京/台灣時間週二中午Tuesday
                <br />
                12:00--12:30 等候神
                <br />
                12:30--13:00 職場問題回應 <br />
                Zoom Meeting ID: 841 <br />
                0068 2160 Passcode: 042263
              </div>
            </div>
            <h1 className="inner">Speaker Bios</h1>
            <div className="inner">
              CCE職場問答講員介紹： <br /> <br />
              Mr. Shengming Shan, SWR Technology執行長， CCE
              創辦人，前高通(Qualcomm) 技術總監,
              紐約州立大學石溪分校電機碩士，30年半導體通訊無綫產業技術開發及經營管理{" "}
              <br />
              <br />
              Ms. Irene Yuan RELinkage 顧問公司執行長 ; 前 Voltraware
              IC設計公司創辨人，佳必琦股份有限公司執行副總及董事，政治大學科技創新管理碩士，世新大學兼課講師，近40
              年資訊科技產業經營管理，業務開發，企業重整募資等經驗。
              <br /> <br />
              Mr. Rong Yue, 西门子研发主任工程师,
              普度大学(Purdue)数学博士+計算机碩士,
              有近三十年信息产业多种領域的软件研发经历 <br /> <br />
              Ms. Nina Tsai, Google 數據科學部門負責人，前Meta 和eBay
              數據分析經理，加州州立大学富勒顿分校資訊系統碩士，22年跨產業商业分析，数据科学和經營管理經驗{" "}
              <br /> <br />
              Ms. Weixu Meng, 中国科学院博士。现任辉瑞资深主任科学家。
              十五年抗体及生物医药研发。
              <br /> <br />
              Mr. Ta-Chang Fu (傅大章)，現任 Western Digital
              數據中心專用硬碟機研發部技術主管，柏克萊加州大學機械工程博士，從事硬碟機研發27年經驗
            </div>
            <AudioPlayer />
            <div className="inner">
              <Button color="primary" href="/officehours">
                Next
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfficeHoursAbout;
