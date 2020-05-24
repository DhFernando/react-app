import React from 'react';
import MainComponent from './Components/MainComponent' ;
import Navigation from './Components/Navigation'
import ReduxPractice from './Components/ReduxPractice'
import Home from './pages/Home'
import Test1 from './pages/test/Test1'
import Test2 from './pages/test/Test2'
import reduxAttemp2 from './Components/reduxAttemp2'

// import {Provider} from 'react-redux'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MainComponent" component={MainComponent} />
        <Route path="/Test1" component={Test1} />
        <Route path="/Test2" component={Test2} />
        <Route path="/ReduxPractice" component={ReduxPractice} />
        <Route path="/reduxAttemp2" component={reduxAttemp2} />
      </Switch>
    </Router>
  );
}

export default App;
