import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom'

import Login from './views/login/index'
import Index from './views/index/index'

//私有组件
import PrivateRoute from './components/privateRouter/index'
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
              <PrivateRoute component={Index} exact   path="/index"></PrivateRoute>
            </Switch>
          </HashRouter>
      </div>
    )
  }
}


export default App;
