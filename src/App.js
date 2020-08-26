import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route, Router, HashHistory, Link} from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import News from './views/News'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(h) {
    return (
      <div className='main'>
        <h1>saasadsdsad</h1>
          <HashRouter>
            <Switch>
              <Route component={Home} exact   path="/"></Route>
              <Route component={About} exact path="/about"></Route>
              <Route component={News} exact  path="/news"></Route>
            </Switch>
          </HashRouter>
      </div>
    )
  }
}


export default App;
