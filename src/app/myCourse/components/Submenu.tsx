import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Submenu = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <Button
        type='primary'
        onClick={() => setCollapsed(!collapsed)}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
      >
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          <Link to='/myCourse/Dashboard'>Dashboard</Link>
        </Menu.Item>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Quizzes and Grades'>
          <Menu.Item key='2'>
          <Link to='/myCourse/Quizzes'>Quizzes</Link>
          </Menu.Item>
          <Menu.Item key='3'>
          <Link to='/myCourse/Grades'>Grades</Link>
          </Menu.Item>
        </SubMenu>
        
        <Menu.Item key='4' icon={<DesktopOutlined />}>
          <Link to='/myCourse/MyFiles'>My files</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<ContainerOutlined />}>
        <Link to='/myCourse/homework'>Homework</Link>
        </Menu.Item>
        
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Submenu
