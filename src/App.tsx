import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Webinar from "./components/Webinar";
import PastWebinar from "./components/PastWebinar";
import OfficeHours from "./components/officeHours/OfficeHours";
import Team from "./components/Team";
import Chronicles from "./components/Chronicles";
import Application from "./components/Application";
import Interview from "./components/Interview";
import FocusGroup from "./components/FocusGroup";

import OfficeHoursAbout from "./components/officeHours/OfficeHoursAbout";
import OfficeHours2 from "./components/officeHours/Oct2022Dec2022";
import OfficeHours3 from "./components/officeHours/Jan2023Mar2023";
import OfficeHours4 from "./components/officeHours/Apr2023Jun2023";
import OfficeHours5 from "./components/officeHours/Jul2023Sep2023";

import StemNotNerds from "./components/chronicles/StemNotNerds";
import ConstExposure from "./components/chronicles/ConstExposure";
import GoodTech from "./components/chronicles/GoodTech";
import ExploreRealWorld from "./components/chronicles/ExploreRealWorld";
import InternshipsAreOpportunities from "./components/chronicles/InternshipsAreOpportunities";
import PsychIsCalling from "./components/chronicles/PsychIsCalling";
import YouCanDoThis from "./components/chronicles/YouCanDoThis";
import DoSomethingYouLike from "./components/chronicles/DoSomethingYouLike";
import TheBiggestHappiness from "./components/chronicles/TheBiggestHappiness";
import CertificationHelps from "./components/chronicles/CertificationHelps";
import CommunicationIsKey from "./components/chronicles/CommunicationIsKey";
import BecomeStrongestPerson from "./components/chronicles/BecomeStrongestPerson";
import RemindYourselfMotivation from "./components/chronicles/RemindYourselfMotivation";
import FailEarly from "./components/chronicles/FailEarly";
import GoAheadAndAsk from "./components/chronicles/GoAheadAndAsk";
import EveryoneIsDifferent from "./components/chronicles/EveryoneIsDifferent";

import TagManager from "react-gtm-module";
import OfficeHours6 from "./components/officeHours/Oct2023Dec2023";
import OfficeHours7 from "./components/officeHours/Jan2024Mar2024";
import OfficeHours8 from "./components/officeHours/Apr2024Jun2024";
import OfficeHours9 from "./components/officeHours/Jul2024Sep2024";
import OfficeHours10 from "./components/officeHours/Oct2024Dec2024";
import OfficeHours11 from "./components/officeHours/Jan2025Mar2025";
import ProjectTransformation from "./components/ProjectTransformation";

const App = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KQB8XG7" });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/pastwebinar" element={<PastWebinar />} />
        <Route
          path="/officehoursabout"
          
         element={<OfficeHoursAbout />}
        />
        <Route path="/officehours" element={<OfficeHours />} />
        <Route path="/officehours2" element={<OfficeHours2 />} />
        <Route path="/officehours3" element={<OfficeHours3 />} />
        <Route path="/officehours4" element={<OfficeHours4 />} />
        <Route path="/officehours5" element={<OfficeHours5 />} />
        <Route path="/officehours6" element={<OfficeHours6 />} />
        <Route path="/officehours7" element={<OfficeHours7 />} />
        <Route path="/officehours8" element={<OfficeHours8 />} />
        <Route path="/officehours9" element={<OfficeHours9 />} />
        <Route path="/officehours10" element={<OfficeHours10 />} />
        <Route path="/officehours11" element={<OfficeHours11 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/chronicles" element={<Chronicles />} />
        <Route path="/application" element={<Application />} />
        <Route path="/focusgroup" element={<FocusGroup />} />
        <Route path="/stemnotnerds" element={<StemNotNerds />} />
        <Route path="/constexposure" element={<ConstExposure />} />
        <Route path="/goodtech" element={<GoodTech />} />
        <Route
          path="/explorerealworld"
          
         element={<ExploreRealWorld />}
        />
        <Route
          path="/internshipsareopportunities"
          
         element={<InternshipsAreOpportunities />}
        />
        <Route path="/psychiscalling" element={<PsychIsCalling />} />
        <Route path="/youcandothis" element={<YouCanDoThis />} />
        <Route
          path="/dosomethingyoulike"
          
         element={<DoSomethingYouLike />}
        />
        <Route
          path="/thebiggesthappiness"
          
         element={<TheBiggestHappiness />}
        />
        <Route
          path="/certificationhelps"
          
         element={<CertificationHelps />}
        />
        <Route
          path="/communicationiskey"
          
         element={<CommunicationIsKey />}
        />
        <Route
          path="/becomestrongestperson"
          
         element={<BecomeStrongestPerson />}
        />
        <Route path="/interview" element={<Interview />} />
        <Route
          path="/remindyourselfmotivation"
          
         element={<RemindYourselfMotivation />}
        />
        <Route path="/failearly" element={<FailEarly />} />
        <Route path="/goaheadandask" element={<GoAheadAndAsk />} />
        <Route
          path="/everyoneisdifferent"
          
         element={<EveryoneIsDifferent />}
        />
        <Route
          path="/projecttransformation"
          element={<ProjectTransformation />}
        />
        </Routes>
    </Router>
  );
};

export default App;
