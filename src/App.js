import React from 'react';
import MainComponent from './Components/MainComponent' ;
import Navigation from './Components/Navigation'
import Home from './pages/Home'



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
      <Route exact path="/" component={Home} />
      <Route path="/MainComponent" component={MainComponent} />
    </Router>
  );
}

export default App;
