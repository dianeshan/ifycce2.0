import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Webinar from './components/Webinar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CustomerList from './components/CustomerList';
// import CustomerEdit from './components/CustomerEdit';
import Chronicles from './components/Chronicles';
import PastWebinar from './components/PastWebinar';
import Team from './components/Team';
import StemNotNerds from './chronicles/StemNotNerds';
import ConstExposure from './chronicles/ConstExposure';
import GoodTech from './chronicles/GoodTech';
import ExploreRealWorld from './chronicles/ExploreRealWorld';
import PsychIsCalling from './chronicles/PsychIsCalling';
import InternshipsAreOpportunities from './chronicles/InternshipsAreOpportunities';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/webinar' exact={true} component={Webinar} />
          <Route path='/pastwebinar' exact={true} component={PastWebinar} />
          <Route path='/team' exact={true} component={Team} />
          <Route path='/chronicles' exact={true} component={Chronicles} />
          <Route path='/stemnotnerds' exact={true} component={StemNotNerds} />
          <Route path='/constexposure' exact={true} component={ConstExposure} />
          <Route path='/goodtech' exact={true} component={GoodTech} />
          <Route path='/explorerealworld' exact={true} component={ExploreRealWorld} />
          <Route path='/internshipsareopportunities' exact={true} component={InternshipsAreOpportunities} />
          <Route path='/psychiscalling' exact={true} component={PsychIsCalling} />
        </Switch>
      </Router>
    )
  }
}

export default App;
