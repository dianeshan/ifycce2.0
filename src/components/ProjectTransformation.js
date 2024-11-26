import { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import logo from "../images/CCELogo_square.png";

class ProjectTransformation extends Component {
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
                    <h1 className="headings">CCE Project Transformation</h1>
                    <h4>Are you ready to transform?</h4>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="main-page">
            <Container>
              <div className="row">
                <div className="col sm12">
                  <h2>
                    <strong>主旨 Purpose</strong>
                  </h2>
                  <p>
                    裝備“有負擔在職場上服事的基督徒”轉化你的職場成爲佳美之地
                    Equip “Christians who have the burden to serve in the
                    workplace” to transform your workplace into a beautiful
                    place
                  </p>
                </div>
              </div>
            </Container>
            <Container>
              <div className="row">
                <div className="col sm12">
                  <h2>
                    <strong>期間 Duration: </strong>
                    <span>2024.09 – 2025.06</span>
                  </h2>
                  <h2>
                    <strong>形式 Format: </strong>
                  </h2>
                  <span>
                    每月一次60分鐘線上會議）+ 每月8小時以上的實際操作 Monthly 60
                    minute online meeting + 8 hours/month operation
                  </span>
                </div>
              </div>
            </Container>
          </div>

          <Container>
            <div className="row">
              <div className="col sm12">
                <h2>
                  <strong>預期成果 Expected Outcome</strong>
                </h2>
                <p>
                  幫助你學習使用CCE的資源,在一年之内,在你所在的工作場合/同事/朋友中開始一個佳美之地小組，每個人至少提交一份有關職場服事的見證
                  Help you learn to use CCE's resources. Within one year, start
                  a Project Transformation group among your colleagues/friends.
                  Everyone submits at least one testimony about workplace
                  ministry.
                </p>
                <p>
                  透過參加佳美之地計劃培訓，您將學習如何使用
                  CCE職場問答時間的材料,
                  規劃並開始與朋友或工作中認識的同事開始一個新的定期聚會。By
                  attending the Project Transformation training, you will learn
                  how to use the CCE weekly office hour material to start a new
                  series of recurring meetings with your friends/colleagues
                  at/known through work.
                </p>
                <p>
                  CCE職場問答時間的錄音{" "}
                  <a
                    href="/officehours"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office hours
                  </a>
                </p>
                <p>
                  這些材料提供了實用且符合聖經原則的指導，幫助人們應對工作場所的挑戰。因此，它適合使用於基督徒或是慕道友之間的小組討論。The
                  material provides practical and biblical guidance to help
                  people address workplace challenges. Therefore, it is suitable
                  for use in leading group discussion among Christians, as well
                  as Seekers.
                </p>
              </div>
            </div>
          </Container>

          <div className="main-page">
            <Container>
              <h3>
                <strong>
                  這個培訓適合我嗎？如果您能回答以下所有問題，則本訓練適合您
                  <br></br>Does this training suit me? If you can answer all of
                  the following questions below, this training is meant for you:
                </strong>
              </h3>
              <p>
                1.
                請描述您想/有負擔與哪些人開始一個新的定期聚會（年齡層、工作經驗年資、您是如何認識他們的…）Please
                describe the people with whom you have burden/would like to
                start a group meeting (age group, years of work experience, how
                do you know them...)
              </p>
              <p>
                2. 請瀏覽CCE職場問答時間的錄音並選定至少 3
                個您認為適合小組會議/討論的主題。 （請寫下錄音日期和主題）Please
                browse through the CCE Office Hour recordings and identify at
                least 3 topics that you see suitable for your group
                meeting/discussion. (Please write down the recording dates and
                topics)
              </p>
              <p>
                3. 您以前參加過 CCE 焦點小組嗎？Have you attended CCE focus
                groups before?
              </p>
            </Container>

            <Container>
              <div className="row">
                <div className="col sm12">
                  <p>
                    如果您之前參加過 CCE
                    焦點小組，將會非常有幫助。如果沒有，請同時報名 參加 2024-5
                    CCE 焦點小組。報名網站:{" "}
                    <a
                      href="/focusgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Focus group
                    </a>{" "}
                    <br></br>It would be very helpful if you've attended CCE
                    focus group before. If not, please also sign up for 2024-5
                    CCE focus group.
                  </p>
                  <p>
                    有任何問題 請電郵 Email if any questions:
                    cce.info@iflyyoung.com{" "}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectTransformation;
