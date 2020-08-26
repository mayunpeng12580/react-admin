<<<<<<< HEAD
import React, { Component } from "react";

=======
import React, { Component, Fragment  } from "react";
import { Button } from 'antd';
>>>>>>> cde2442d7df9e127fb3570f14dd423d9cc710b89

class Home extends Component {
    constructor(){
        super();
        this.state = {}
    }

    render () {
        return (
<<<<<<< HEAD
            <div>HOME</div>
=======
            <Fragment>
                HOME
                <Button type="primary">Primary Button</Button>
            </Fragment>
>>>>>>> cde2442d7df9e127fb3570f14dd423d9cc710b89
        )
    }
}

export default Home