import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing my components
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
