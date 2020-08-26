import React from 'react';

import { HashRouter, Switch, Route, Router, HashHistory, Link} from 'react-router-dom'

import Login from './views/login/index'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(h) {
    return (
      <div className='main'>

          <HashRouter>
            <Switch>
              <Route component={Login} exact   path="/"></Route>
            </Switch>
          </HashRouter>
      </div>
    )
  }
}


export default App;
