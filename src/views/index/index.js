import React, { Component} from 'react';

//css
import './layout.scss'

// 侧边栏组件
import Aside from './components/aside'

import ContainerMain from '../../components/containerMain/index'

//anted
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){
        return (
            <Layout className="layout-wrap">
                <Sider widt="250px">
                    <Aside ></Aside>
                </Sider>
                <Layout>
                    <Header className="layout-header">Header</Header>
                    <Content className="layout-content">
                        <ContainerMain />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Index

