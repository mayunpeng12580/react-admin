import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom'
//router
import Router from '../../router/index'
import '../../views/index/components/aside.scss'
//antd
import { Menu } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class AsideMenu extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    //子级菜单方法
    renderSubMenu = ({title, key, child}) => {
        return (
                    <SubMenu key={key} icon={<UserOutlined />} title={title}>
                        {
                            child && child.map((item) => {
                                return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                            })
                        }
                        
                    </SubMenu>
        )
    }

    //无子级菜单方法
    renderMenu = (firstItem) => {
        return (
            <Menu.Item key={firstItem.key}>
                <Link to={firstItem.key}>
                    {firstItem.title}
                </Link>
            </Menu.Item>
        )
    }

    render () {
        return (
           <Fragment>
               <h1 className="logo"><span>logo</span></h1>
               <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100% - 83px' }}
                    theme='dark'
                >
                    {
                        Router && Router.map((firstItem, index) => {
                            return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                        })
                    }
                    
                    
                    
                </Menu>
            </Fragment> 
        )
    }
}

export default AsideMenu