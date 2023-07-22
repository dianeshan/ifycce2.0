import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  // form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [christian, setChristian] = useState("");
  const [gender, setGender] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [role, setRole] = useState("");
  const [group, setGroup] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [timeSlot2, setTimeSlot2] = useState("");
  const [timeSlot3, setTimeSlot3] = useState("");

  // submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    // our object to pass
    const form = {
      firstName,
      lastName,
      email,
      location,
      christian,
      gender,
      workplace,
      role,
      group,
      timeSlot,
      timeSlot2,
      timeSlot3,
    };

    console.log(form);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    console.log(content);

    // clearing form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setLocation("");
    setChristian("");
    setGender("");
    setWorkplace("");
    setRole("");
    setGroup("");
    setTimeSlot("");
    setTimeSlot2("");
    setTimeSlot3("");
  };

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
      <Form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="(Country, State/City)"
            required
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </Form.Group>
        <div className="mb-3">
          <Form.Label>Christian</Form.Label>
          <Form.Check
            name="christian"
            type="radio"
            label="Yes"
            required
            onChange={() => setChristian("Yes")}
            value="Yes"
          />
          <Form.Check
            name="christian"
            type="radio"
            label="No"
            required
            onChange={() => setChristian("No")}
            value="No"
          />
        </div>
        <div className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Check
            name="gender"
            type="radio"
            label="Male"
            required
            onChange={() => setGender("Male")}
            value="Male"
          />
          <Form.Check
            name="gender"
            type="radio"
            label="Female"
            required
            onChange={() => setGender("Female")}
            value="Female"
          />
        </div>
        <div className="mb-3">
          <Form.Label>職場類別 Type of Workplace</Form.Label>
          <Form.Check
            name="workplace"
            type="radio"
            label="教會 - Church"
            required
            onChange={() => setWorkplace("教會 - Church")}
            value="教會 - Church"
          />
          <Form.Check
            name="workplace"
            type="radio"
            label="私營企業 (非營利目的) - Not For Profit Business"
            required
            onChange={() =>
              setWorkplace("私營企業 (非營利目的) - Not For Profit Business")
            }
            value="私營企業 (非營利目的) - Not For Profit Business"
          />
          <Form.Check
            name="workplace"
            type="radio"
            label="私營企業 (營利目的) - For Profit Business"
            required
            onChange={() =>
              setWorkplace("私營企業 (營利目的) - For Profit Business")
            }
            value="私營企業 (營利目的) - For Profit Business"
          />
          <Form.Check
            name="workplace"
            type="radio"
            label="政府/公營企業 - Government/Public Enterprise"
            required
            onChange={() =>
              setWorkplace("政府/公營企業 - Government/Public Enterprise")
            }
            value="政府/公營企業 - Government/Public Enterprise"
          />
          <Form.Check
            name="workplace"
            type="radio"
            label="其他 - Others"
            required
            onChange={() => setWorkplace("其他 - Others")}
            value="其他 - Others"
          />
        </div>
        <div className="mb-3">
          <Form.Label>職場角色 Role</Form.Label>
          <Form.Check
            name="role"
            type="radio"
            label="自營 (無雇員) - Self-Employed (no employee)"
            required
            onChange={() =>
              setRole("自營 (無雇員) - Self-Employed (no employee)")
            }
            value="自營 (無雇員) - Self-Employed (no employee)"
          />
          <Form.Check
            name="role"
            type="radio"
            label="企業家 (有雇員) - Entrepreneur (with employee)"
            required
            onChange={() =>
              setRole("企業家 (有雇員) - Entrepreneur (with employee)")
            }
            value="企業家 (有雇員) - Entrepreneur (with employee)"
          />
          <Form.Check
            name="role"
            type="radio"
            label="經理人 (有上司下屬) - Manager"
            required
            onChange={() => setRole("經理人 (有上司下屬) - Manager")}
            value="經理人 (有上司下屬) - Manager"
          />
          <Form.Check
            name="role"
            type="radio"
            label="一綫人員 (有上司無下屬) - Individual Contributor"
            required
            onChange={() =>
              setRole("一綫人員 (有上司無下屬) - Individual Contributor")
            }
            value="一綫人員 (有上司無下屬) - Individual Contributor"
          />
          <Form.Check
            name="role"
            type="radio"
            label="其他 - Others"
            required
            onChange={() => setRole("其他 - Others")}
            value="其他 - Others"
          />
        </div>
        <div className="mb-3">
          <Form.Label>Group & years of working experience</Form.Label>
          <Form.Check
            name="group"
            type="radio"
            label="CP (Career Professional): >=10 years experience or >=30 years old"
            required
            onChange={() => setGroup("CP")}
            value="CP"
          />
          <Form.Check
            name="group"
            type="radio"
            label="CP Female (Career Professional Female): >=10 years experience or >=30 years old"
            required
            onChange={() => setGroup("CP Female")}
            value="CP Female"
          />
          <Form.Check
            name="group"
            type="radio"
            label="YP (Young Professionals):  0+ ~ 10 years experience"
            required
            onChange={() => setGroup("YP")}
            value="YP"
          />
          <Form.Check
            name="group"
            type="radio"
            label="YP Female (Young Professionals Female):  0+ ~ 10 years experience"
            required
            onChange={() => setGroup("YP Female")}
            value="YP Female"
          />
          <Form.Check
            name="group"
            type="radio"
            label="Pre-YP: College/Graduate Students prepared to join the marketplace"
            required
            onChange={() => setGroup("Pre-YP")}
            value="Pre-YP"
          />
        </div>
        {group === "CP" && (
          <div className="mb-3">
            <Form.Label>
              Time slots for CP (Choose max 3 time slots){" "}
            </Form.Label>
            <Form.Check
              name="timeslot"
              type="checkbox"
              label="CP (Career Professional): >=10 years experience or >=30 years old"
              required
              onChange={
                !timeSlot
                  ? () => setTimeSlot("slot")
                  : !timeSlot2
                  ? () => setTimeSlot2("slot")
                  : !timeSlot3
                  ? setTimeSlot3("slot")
                  : undefined
              }
              value="CP"
            />
            <Form.Check
              name="timeslot2"
              type="checkbox"
              label="CP Female (Career Professional Female): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot("CP Female")}
              value="CP Female"
            />
            <Form.Check
              name="timeslot3"
              type="checkbox"
              label="YP (Young Professionals):  0+ ~ 10 years experience"
              required
              onChange={() => setTimeSlot("YP")}
              value="YP"
            />
            <Form.Check
              name="timeslot4"
              type="checkbox"
              label="YP Female (Young Professionals Female):  0+ ~ 10 years experience"
              required
              onChange={() => setTimeSlot("YP Female")}
              value="YP Female"
            />
            <Form.Check
              name="timeslot5"
              type="checkbox"
              label="Pre-YP: College/Graduate Students prepared to join the marketplace"
              required
              onChange={() => setTimeSlot("Pre-YP")}
              value="Pre-YP"
            />
          </div>
        )}
        {group === "CP Female" && (
          <div className="mb-3">
            <Form.Label>
              Time slots for CP Female (Choose max 3 time slots)
            </Form.Label>
            <Form.Check
              name="timeslot"
              type="checkbox"
              label="CP (Career Professional): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot("CP")}
              value="CP"
            />
            <Form.Check
              name="timeslot2"
              type="checkbox"
              label="CP Female (Career Professional Female): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot2("CP Female")}
              value="CP Female"
            />
            <Form.Check
              name="timeslot3"
              type="checkbox"
              label="YP (Young Professionals):  0+ ~ 10 years experience"
              required
              onChange={() => setTimeSlot3("YP")}
              value="YP"
            />
          </div>
        )}
        {group === "YP" && (
          <div className="mb-3">
            <Form.Label>
              Time slots for YP (Choose max 3 time slots){" "}
            </Form.Label>
            <Form.Check
              name="timeslot"
              type="checkbox"
              label="CP (Career Professional): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot("CP")}
              value="CP"
            />
            <Form.Check
              name="timeslot2"
              type="checkbox"
              label="CP Female (Career Professional Female): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot("CP Female")}
              value="CP Female"
            />
            <Form.Check
              name="timeslot3"
              type="checkbox"
              label="YP (Young Professionals):  0+ ~ 10 years experience"
              required
              onChange={() => setTimeSlot("YP")}
              value="YP"
            />
            <Form.Check
              name="timeslot4"
              type="checkbox"
              label="YP Female (Young Professionals Female):  0+ ~ 10 years experience"
              required
              onChange={() => setTimeSlot("YP Female")}
              value="YP Female"
            />
            <Form.Check
              name="timeslot5"
              type="checkbox"
              label="Pre-YP: College/Graduate Students prepared to join the marketplace"
              required
              onChange={() => setTimeSlot("Pre-YP")}
              value="Pre-YP"
            />
          </div>
        )}
        {group === "YP Female" && (
          <div className="mb-3">
            <Form.Label>Time slots for YP Female</Form.Label>
            <Form.Check
              name="timeslot"
              type="checkbox"
              label="CP (Career Professional): >=10 years experience or >=30 years old"
              required
              onChange={() => setTimeSlot("CP")}
              value="CP"
            />
          </div>
        )}
        {group === "Pre-YP" && (
          <div className="mb-3">
            <Form.Label>Time slots for Pre-YP</Form.Label>
            <Form.Check
              name="timeslot"
              type="checkbox"
              label="Tuesday 5PM US Pacific / Wednesday 8AM Beijing/Taiwan"
              required
              onChange={() => setTimeSlot("Tuesday 5PM")}
              value="Tuesday 5PM"
            />
          </div>
        )}
        <br></br>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
