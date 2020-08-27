import React, {Fragment} from 'react';

import { Switch } from 'react-router-dom'

import User from '../../views/user/index'
import UserAdd from '../../views/user/add'
//私有组件
import PrivateRoute from '../privateRouter/index'
class ContainerMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Fragment>
            <Switch>
                <PrivateRoute path="/index/user/list" component={User}  exact ></PrivateRoute>
                <PrivateRoute path="/index/user/add" component={UserAdd}  exact></PrivateRoute>
            </Switch>
        </Fragment>
    )
  }
}


export default ContainerMain;
