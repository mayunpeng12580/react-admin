import React, { Component, Fragment} from 'react';

//antd
import { Form, Input, Button, Table, Switch, message } from 'antd';

//api
import { GetList, Delete } from '../../api/department'
class DepartmentIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {title: '部门名称', dataIndex: 'name', key:'name'},
                {title: '禁启用', dataIndex: 'status', key:'status',render: (text, rowData)=> { return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status} />}},
                {title: '人员数量', dataIndex: 'number', key:'number'},
                {title: '操作', dataIndex: 'operation', key:'operation', width: '215px', 
                    render: (text, rowData) => {
                        return (
                            <div className="inline-button">
                                <Button type='primary'>编辑</Button>
                                <Button onClick={()=>this.onHandleDelete(rowData.id)}>删除</Button>
                            </div>
                        )
                    }
                },
                
            ],
            dataSource: [
                {
                    id: '1',
                    name: '张三',
                    number: '200',
                    status: true,
                },
                {
                    id: '2',
                    name: '张三',
                    number: '200',
                    status: false,
                },
            ],
            pageNumber:1,
            pageSize:10,
            keyWork:'',
            //复选框数据
            selectedRowKeys: []

        }

        
    }
      
        onFinish = values => {
          console.log('Finish:', values);
            this.setState({
                keyWork: values.departmentname,
                pageNumber:1,
                pageSize:10,
            })
            this.loadData(values);
        };

        //删除
        onHandleDelete = (id) => {
            console.log(id)
            Delete(id)
            .then(res => {
                message.success('删除失败！！！')
                this.loadData();
            })
            .catch(err => {
                console.log(err)
                message.error('删除失败！！！')
            })
        }

        //生命周期挂载完成
        componentDidMount(){
            this.loadData();
        }

        loadData = () => {
            const requestData = {
                pageNumber: this.state.pageNumber,
                pageSize: this.state.pageSize
            }
            if (this.state.keyWork){
                requestData.name = this.state.keyWork
            }
            GetList(requestData)
            .then(res => {

            })
            .catch( err => {
                console.log(err)
            })
        }

        //复选框方法
        onCheckbox = (selectedRowKeys) => {
            console.log(selectedRowKeys)
            this.setState({
                selectedRowKeys
            })
        }

    render (){
        const {columns, dataSource} = this.state
        const rowSelection = {
            onChange: this.onCheckbox
        }
        return (
            <Fragment>
                <Form  name="horizontal_login" layout="inline" onFinish={this.onFinish}>
                    <Form.Item
                    label="部门名称"
                    name="departmentname"
                    >
                        <Input placeholder="请输入部门名称" />
                    </Form.Item>
                    
                    <Form.Item shouldUpdate>
                        {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            搜索
                        </Button>
                        )}
                    </Form.Item>
                    </Form>
                    <div className="table-wrap">
                    <Table rowSelection={rowSelection} rowKey='id' bordered columns={columns} dataSource={dataSource}>

                    </Table>
                    </div>
            </Fragment>
        )
    }
}

export default DepartmentIndex