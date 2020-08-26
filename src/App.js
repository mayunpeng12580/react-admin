import React from 'react';
<<<<<<< HEAD
import './App.scss';
import { HashRouter, Switch, Route, Router, HashHistory, Link} from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import News from './views/News'
=======
import { HashRouter, Switch, Route, Router, HashHistory, Link} from 'react-router-dom'

import Login from './views/login/index'
>>>>>>> cde2442d7df9e127fb3570f14dd423d9cc710b89


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(h) {
    return (
      <div className='main'>
<<<<<<< HEAD
        <h1>saasadsdsad</h1>
          <HashRouter>
            <Switch>
              <Route component={Home} exact   path="/"></Route>
              <Route component={About} exact path="/about"></Route>
              <Route component={News} exact  path="/news"></Route>
=======
          <HashRouter>
            <Switch>
              <Route component={Login} exact   path="/"></Route>
>>>>>>> cde2442d7df9e127fb3570f14dd423d9cc710b89
            </Switch>
          </HashRouter>
      </div>
    )
  }
}


export default App;
