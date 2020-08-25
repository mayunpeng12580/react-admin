import React, { Component, Fragment  } from "react";
import { Button } from 'antd';

class Home extends Component {
    constructor(){
        super();
        this.state = {}
    }

    render () {
        return (
            <Fragment>
                HOME
                <Button type="primary">Primary Button</Button>
            </Fragment>
        )
    }
}

export default Home