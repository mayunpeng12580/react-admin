import React, { Component, Fragment} from 'react';

//css
import './index.scss'
//antd
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, VerifiedOutlined  } from '@ant-design/icons';
// 组件
import Code from '../../components/code/index'
class RegisterForm extends Component {
    constructor(){
        super();
        this.state = {
            username:''
        }
    }

    toggleForm = () => {
        this.props.switchForm("login");
      console.log(111)
    }

    render(){
        
        
        return (
            <Fragment>
                <div className='from-header'>
                        <h4 className="column">注册</h4>
                        <span onClick={this.toggleForm}>登录</span>
                    </div>
                    <div className="form-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined  className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                            name="passwords"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined  className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Code!' }]}
                        >
                            <Row gutter={13}>
                                <Col className="gutter-row" span={15}>
                                    <Input prefix={<VerifiedOutlined  className="site-form-item-icon" />} type="password" placeholder="Code" />
                                </Col>
                                <Col className="gutter-row" span={9}>
                                    <Code username={this.state.username}></Code> 
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="login-form-button">
                            注册
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                

                        </Fragment>
        )
    }
}

export default RegisterForm