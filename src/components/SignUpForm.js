import { Button, Table } from "reactstrap";

const SignUpForm = () => {
  return (
    <div className="container">
      <br></br>
      <div className="comment-name">
        Don't miss out! Registration for Focus Group 2024-25 season opens
        8/17/2024 ~ 8/24/2024.
      </div>
      <br></br>
      <h1>焦點小組 (Monthly Focus Group Meeting)</h1>
      <div>
        <div className="comment-name">
          你對工作的定義及態度是什麼？是義務？還是熱情？是懐才不遇？還是實現夢想？你想了解如何在工作中如何活出自己的命定，在家庭裏如何創造傳家的價值嗎？
        </div>
        <br></br>
        <div className="comment-name">
          不論現在你工作及生活中的光景如何，誠摯邀請你參加2024年9月-2025年6月
          焦點小組一月一次的綫上聚會，在導師精心的帶領下，一起重新審視工作的價值，轉換我們的心態，快樂工作享受生活。本聚會由愛飛揚溝通與職涯探索平臺
          (I FLY YOUNG CCE)贊助,參加者無需繳費.
        </div>
        <br></br>
        <div className="comment-name">
          每月一次聚會主題包含 : 問對的問題,發現恩賜,能力與興趣, 換跑道,
          時間/金錢管理,職場人際關係 (設立界限, 得到老闆的支持,
          成爲公司,老闆,同事的祝福)
        </div>
        <br></br>
        <div className="comment-name">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=5T8BtfgZ-tM&list=PLQTND4OzgUVQfTRGbjAvXqWEY7A9w6Uz_&index=7"
          >
            2024年焦點小組的見證
          </a>
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
          between September 2024 and June 2025 to re-examine the value of work
          and to be happy with what you have while working at what you want. The
          meeting is sponsored by I FLY YOUNG CCE, so attendees can sign up free
          of charge.
        </div>
        <br></br>
        <div className="comment-name">
          The monthly meeting will cover the topics like: “Ask the right
          questions”, “Discover your talents”, "Capability and Passion”,
          “Changing career path”, "Time/Money Management", Workplace
          interpersonal relationships (setting boundaries, getting support from
          your boss, being a blessing to the company, boss, and colleagues)
        </div>
        <br></br>
        <div className="comment-name">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=5T8BtfgZ-tM&list=PLQTND4OzgUVQfTRGbjAvXqWEY7A9w6Uz_&index=7"
          >
            Testimonials from the 2024 Focus Group
          </a>
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
          <Table striped>
            <thead>
              <tr>
                <th>組別</th>
                <th>資格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>第一年焦點小組 Year 1 Focus Group</td>
                <td>第一次參加者 First-time participant</td>
              </tr>
              <tr>
                <td>第二年焦點小組 Year 2 Focus Group</td>
                <td>
                  已完成2023-24年度的參加者 Returning participant who attended
                  the 2023-24 season
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <br></br>
      <div className="pb-5 text-center">
        <Button
          color="info"
          target="_blank"
          className="btn-lg"
          href="https://forms.office.com/r/MdhUvuDegL"
        >
          報名 Sign up for 2024-25 Season
        </Button>
        <div>Registration open 8/17/2024 ~ 8/24/2024</div>
        <div>Any Questions? Email us at cce.info@iflyyoung.com</div>
      </div>
    </div>
  );
};

export default SignUpForm;
