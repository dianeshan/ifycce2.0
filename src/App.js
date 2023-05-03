import React, { Component, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Webinar from "./components/Webinar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CustomerList from './components/CustomerList';
// import CustomerEdit from './components/CustomerEdit';
import Chronicles from "./components/Chronicles";
import PastWebinar from "./components/PastWebinar";
import Team from "./components/Team";
import StemNotNerds from "./chronicles/StemNotNerds";
import ConstExposure from "./chronicles/ConstExposure";
import GoodTech from "./chronicles/GoodTech";
import ExploreRealWorld from "./chronicles/ExploreRealWorld";
import InternshipsAreOpportunities from "./chronicles/InternshipsAreOpportunities";
import PsychIsCalling from "./chronicles/PsychIsCalling";
import YouCanDoThis from "./chronicles/YouCanDoThis";
import DoSomethingYouLike from "./chronicles/DoSomethingYouLike";
import TheBiggestHappiness from "./chronicles/TheBiggestHappiness";
import Application from "./components/Application";
import CertificationHelps from "./chronicles/CertificationHelps";
import CommunicationIsKey from "./chronicles/CommunicationIsKey";
import Interview from "./components/Interview";
import BecomeStrongestPerson from "./chronicles/BecomeStrongestPerson";
import RemindYourselfMotivation from "./chronicles/RemindYourselfMotivation";
import TagManager from "react-gtm-module/dist/TagManager";
import FailEarly from "./chronicles/FailEarly";
import GoAheadAndAsk from "./chronicles/GoAheadAndAsk";
import EveryoneIsDifferent from "./chronicles/EveryoneIsDifferent";
import OfficeHours from "./components/OfficeHours";

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
        <Route path="/officehours" exact={true} component={OfficeHours} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/chronicles" exact={true} component={Chronicles} />
        <Route path="/application" exact={true} component={Application} />
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
