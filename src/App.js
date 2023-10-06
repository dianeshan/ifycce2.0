import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import TagManager from "react-gtm-module/dist/TagManager";
import OfficeHours6 from "./components/officeHours/Oct2023Dec2023";

const App = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KQB8XG7" });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/webinar" exact={true} component={Webinar} />
        <Route path="/pastwebinar" exact={true} component={PastWebinar} />
        <Route
          path="/officehoursabout"
          exact={true}
          component={OfficeHoursAbout}
        />
        <Route path="/officehours" exact={true} component={OfficeHours} />
        <Route path="/officehours2" exact={true} component={OfficeHours2} />
        <Route path="/officehours3" exact={true} component={OfficeHours3} />
        <Route path="/officehours4" exact={true} component={OfficeHours4} />
        <Route path="/officehours5" exact={true} component={OfficeHours5} />
        <Route path="/officehours6" exact={true} component={OfficeHours6} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/chronicles" exact={true} component={Chronicles} />
        <Route path="/application" exact={true} component={Application} />
        <Route path="/focusgroup" exact={true} component={FocusGroup} />
        <Route path="/stemnotnerds" exact={true} component={StemNotNerds} />
        <Route path="/constexposure" exact={true} component={ConstExposure} />
        <Route path="/goodtech" exact={true} component={GoodTech} />
        <Route
          path="/explorerealworld"
          exact={true}
          component={ExploreRealWorld}
        />
        <Route
          path="/internshipsareopportunities"
          exact={true}
          component={InternshipsAreOpportunities}
        />
        <Route path="/psychiscalling" exact={true} component={PsychIsCalling} />
        <Route path="/youcandothis" exact={true} component={YouCanDoThis} />
        <Route
          path="/dosomethingyoulike"
          exact={true}
          component={DoSomethingYouLike}
        />
        <Route
          path="/thebiggesthappiness"
          exact={true}
          component={TheBiggestHappiness}
        />
        <Route
          path="/certificationhelps"
          exact={true}
          component={CertificationHelps}
        />
        <Route
          path="/communicationiskey"
          exact={true}
          component={CommunicationIsKey}
        />
        <Route
          path="/becomestrongestperson"
          exact={true}
          component={BecomeStrongestPerson}
        />
        <Route path="/interview" exact={true} component={Interview} />
        <Route
          path="/remindyourselfmotivation"
          exact={true}
          component={RemindYourselfMotivation}
        />
        <Route path="/failearly" exact={true} component={FailEarly} />
        <Route path="/goaheadandask" exact={true} component={GoAheadAndAsk} />
        <Route
          path="/everyoneisdifferent"
          exact={true}
          component={EveryoneIsDifferent}
        />
      </Switch>
    </Router>
  );
};

export default App;
