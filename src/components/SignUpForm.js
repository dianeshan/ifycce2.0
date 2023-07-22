import { Button } from "reactstrap";

const SignUpForm = () => {
  return (
    <div className="container">
      <br></br>
      <h1>職場工作坊 (Monthly Focus Group Meeting)</h1>
      <div>
        <h2>About</h2>
        <div>
          你對工作的定義及態度是什麼？是義務？還是熱情？是懐才不遇？還是實現夢想？你想了解如何在工作中如何活出自己的命定，在家庭裏如何創造傳家的價值嗎？
        </div>
        <br></br>
        <div>
          不論現在你工作及生活中的光景如何，誠摯邀請你參加2023年9月-2024年6月
          職場工作坊一月一次的綫上分組聚會，在導師精心的帶領下，一起重新審視工作的價值，轉換我們的心態，快樂工作享受生活。本聚會由愛飛揚溝通與職涯探索平臺
          (I FLY YOUNG CCE)贊助,參加者無需繳費.
          <br></br>
          每月一次聚會主題：
          <br></br>
          1. 問對的問題 <br></br>
          2. 發現恩賜1 <br></br>
          3. 發現恩賜2 <br></br>
          4. 發現恩賜3 <br></br>
          5. 發現恩賜4 <br></br>
          6. 發現恩賜5 <br></br>
          7. 能力與興趣 <br></br>
          8. 換跑道 <br></br>
          9. 時間（金錢）管理1 <br></br>
          10. 時間管理2
        </div>
        <br></br>
        <div>
          What is your meaning of working? Is it just a financial obligation? Or
          is it a dream? Do you want to know how to live out your destiny at
          work, and create the legacy to pass down to the generations?
        </div>
        <br></br>
        <div id="signupform">
          No matter what your current circumstances are at work and/or in life,
          we sincerely invite you to join our Monthly Focus Group Meeting
          between Sep. 2023 and June 2024 to re-examine the value of work and to
          be happy with what you have while working at what you want. The
          meeting is sponsored by I FLY YOUNG CCE, so attendees can sign up free
          of charge. <br></br> The following topics are the focus in our monthly
          meeting:<br></br>
          1. Ask the right questions <br></br>
          2. Discover your talents 1 <br></br>
          3. Discover your talents 2 <br></br>
          4. Discover your talents 3 <br></br>
          5. Discover your talents 4 <br></br>
          6. Discover your talents 5 <br></br>
          7. Capability and the passion <br></br>
          8. Change career path <br></br>
          9. Time and money management 1 <br></br>
          10. Time management 2
        </div>
        <br></br>
        <div>
          <h2>Groups 分組</h2>
          <div className="pb-3">
            <h5>CP (Career Professional General) 職場專業組:</h5>
            {">"}=10 years experience or {">"}=30 years old
            <br></br>
            十年(含)以上工作經驗， 或大於30歲
          </div>
          <div className="pb-3">
            <h5>CP Female (Career Professional Female) 職場專業女性組:</h5>
            {">"}=10 years experience or {">"}=30 years old
            <br></br>
            十年(含)以上工作經驗， 或大於30歲
            <br></br>
            Female only 限女性
          </div>
          <div className="pb-3">
            <h5>YP (Young Professional) 職場青年組:</h5>
            0+ ~ 10 years experience
            <br></br>
            少於十年工作經驗
          </div>
          <div className="pb-3">
            <h5>YP Female (Young Professional Female) 職場青年女性組:</h5>
            0+ ~ 10 years experience
            <br></br>
            少於十年工作經驗
            <br></br>
            Female only 限女性
          </div>
          <div className="pb-3">
            <h5>Pre-YP 職場預備組:</h5>
            College/Graduate Students prepared to join the marketplace
            <br></br>
            預備進入職場的大學或研究生
          </div>
        </div>
      </div>
      <br></br>
      <div className="pb-5">
        <Button
          color="info"
          target="_blank"
          href="https://bit.ly/cceify-focusgroup-reg"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
