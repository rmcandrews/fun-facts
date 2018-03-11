import React, { Component } from 'react';
import AppNav from 'components/AppNav';
import { Route, HashRouter, Redirect} from "react-router-dom";

import Facts from 'scenes/Facts/Facts';
import FactChecker from 'scenes/FactChecker/FactChecker';
import NLPTraining from 'scenes/NLPTraining/NLPTraining';
import Stats from 'scenes/Stats/Stats';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppNav>
          <Route exact path="/" render={() => <Redirect to="/facts"/>} />
          <Route path="/facts" component={Facts}/>
          <Route path="/stats" component={Stats}/>
          <Route path="/fact-checker" component={FactChecker}/>
          <Route path="/nlp-training" component={NLPTraining}/>
        </AppNav>
      </HashRouter>
    );
  }
}

export default App;