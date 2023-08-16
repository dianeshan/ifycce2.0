import { Button } from "reactstrap";

const SignUpForm = () => {
  return (
    <div className="container">
      <br></br>
      <div className="comment-name">
        The official sign up for 2023 CCE Focus Group has closed. You can still
        leave your information, and we will notify you if seats become
        available.
      </div>
      <br></br>
      <h1>職場工作坊 (Monthly Focus Group Meeting)</h1>
      <div>
        <div className="comment-name">
          你對工作的定義及態度是什麼？是義務？還是熱情？是懐才不遇？還是實現夢想？你想了解如何在工作中如何活出自己的命定，在家庭裏如何創造傳家的價值嗎？
        </div>
        <br></br>
        <div className="comment-name">
          不論現在你工作及生活中的光景如何，誠摯邀請你參加2023年9月-2024年6月
          職場工作坊一月一次的綫上分組聚會，在導師精心的帶領下，一起重新審視工作的價值，轉換我們的心態，快樂工作享受生活。本聚會由愛飛揚溝通與職涯探索平臺
          (I FLY YOUNG CCE)贊助,參加者無需繳費.
        </div>
        <br></br>
        <div className="comment-name">
          每月一次聚會主題包含 : 問對的問題,發現恩賜,能力與興趣, 換跑道,
          時間/金錢管理.
        </div>
        <br></br>
        <div className="comment-name">
          What is your meaning of working? Is it just a financial obligation? Or
          is it a dream? Do you want to know how to live out your destiny at
          work, and create the legacy to pass down to the generations?
        </div>
        <br></br>
        <div className="comment-name">
          No matter what your current circumstances are at work and/or in life,
          we sincerely invite you to join our Monthly Focus Group Meeting
          between Sep. 2023 and June 2024 to re-examine the value of work and to
          be happy with what you have while working at what you want. The
          meeting is sponsored by I FLY YOUNG CCE, so attendees can sign up free
          of charge.
        </div>
        <br></br>
        <div className="comment-name">
          The monthly meeting will cover the topics like: “Ask the right
          questions”, “Discover your talents”, "Capability and Passion”,
          “Changing career path”, "Time/Money Management".
        </div>
        <br></br>
        <div>
          <Button color="info" target="_blank" href="/team" className="btn-lg">
            導師介紹 Focus Group Leader Bios
          </Button>
        </div>
        <br></br>
        <div>
          <h2>Groups 分組</h2>
          <div className="pb-3">
            <h5>
              <b>CP (Career Professional General) 職場專業組</b>
            </h5>
            &emsp;&emsp;Over 10 years of experience or over 30 years old
            <br></br>
            &emsp;&emsp;十年(含)以上工作經驗， 或大於30歲
          </div>
          <div className="pb-3">
            <h5>
              <b>CP Female (Career Professional Female) 職場專業女性組</b>
            </h5>
            &emsp;&emsp;Over 10 years of experience or over 30 years old female
            <br></br>
            &emsp;&emsp;十年(含)以上工作經驗， 或大於30歲 限女性
          </div>
          <div className="pb-3">
            <h5>
              <b>YP (Young Professional) 職場青年組</b>
            </h5>
            &emsp;&emsp;0 to 10 years of experience
            <br></br>
            &emsp;&emsp;少於十年工作經驗
          </div>
          <div className="pb-3">
            <h5>
              <b>YP Female (Young Professional Female) 職場青年女性組</b>
            </h5>
            &emsp;&emsp;0 to 10 years of experience female
            <br></br>
            &emsp;&emsp;少於十年工作經驗 限女性
          </div>
          <div className="pb-3">
            <h5>
              <b>Pre-YP 職場預備組</b>
            </h5>
            &emsp;&emsp;College/Graduate Students prepared to join the
            marketplace
            <br></br>
            &emsp;&emsp;預備進入職場的大學或研究生
          </div>
        </div>
      </div>
      <br></br>
      <div className="pb-5 text-center">
        <Button
          color="info"
          target="_blank"
          className="btn-lg"
          href="https://bit.ly/cceify-focusgroup-reg"
        >
          Keep me informed
        </Button>
        <div>
          The official sign up for 2023 CCE Focus Group has closed. You can
          still leave your information, and we will notify you if seats become
          available.
        </div>
        <div>Questions? Email us at cce.info@iflyyoung.com</div>
      </div>
    </div>
  );
};

export default SignUpForm;
