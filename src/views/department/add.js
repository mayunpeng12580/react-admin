import React, { Component} from 'react';

//antd
import { Form, Input, Button, message, InputNumber, Radio} from 'antd'

//新增部门接口
import { DepartmentAddApi } from '../../api/department'
class DepartmentAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            formLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 15 }
            },
            loading: false
        }
    }

    onSubmit = (values) => {

        
        console.log(values)
        if(!values.name) {
            message.error('部门名称不能为空！！！');
            return false;
        }

        if(!values.number || values.number === 0) {
            message.error('人员数量不能为0！！！');
            return false;
        }

        if(!values.content) {
            message.error('人员数量不能为0！！！');
            return false;
        }
        this.setState({
            loading: true
        })

        DepartmentAddApi(values)
        .then(res => {
            message.success('添加成功！！！')
            this.setState({
                loading: false
            })
        })
        .catch(err => {
            this.refs.form.resetFields();
            message.error('添加失败！！！')
            console.log(err)
            this.setState({
                loading: false
            })
        })
    }

    render (){
        return (
            <Form ref='form' onFinish={this.onSubmit} {...this.state.formLayout}>
                <Form.Item label="部门名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="人员数量" name="number">
                    <InputNumber defaultValue={0} min={0} max={100} />
                </Form.Item>
                <Form.Item label="禁启用" name="status">
                <Radio.Group defaultValue={true}>
                    <Radio value={false}>禁用</Radio>
                    <Radio value={true}>启用</Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item label="描述" name="content">
                    <Input.TextArea  />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' loading={this.state.loading} htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default DepartmentAdd