import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import {  Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React, { useState } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Dashboard from './tabs/Dashboard'
import Quizzes from './tabs/gradesAndQuizzes/Quizzes'
import MyFiles from './tabs/myFiles/MyFiles'
import Homework from './tabs/homework/Homework'
import Grades from './tabs/gradesAndQuizzes/Grades'
import HomeworkModal from './tabs/homework/HomeworkModal'

const MyCourseNav = () => {
  const { t } = useTranslation("common");
  const [current, setCurrent] = useState("Dashboard");
  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      
      <Menu
        // defaultSelectedKeys={['current']}
        defaultOpenKeys={['sub1']}

        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          margin: "50px 0px 40px",
          display: "flex",
          justifyContent: "center",
        }}
      >

        <Menu.Item key='Dashboard' icon={<PieChartOutlined />}>
          <Link to={`myCourseNav/Dashboard`}>{t("MySourse.dashboard")}</Link>
        </Menu.Item>
        <SubMenu key='QuizzesandGrades' icon={<MailOutlined />} title={t("MySourse.QuizzesandGrades")} style={{ marginTop:'16px' }}>
          <Menu.Item key='Quizzes'>
          <Link to={`myCourseNav/Quizzes`}>{t("MySourse.quizzes")}</Link>
          </Menu.Item>
          <Menu.Item key='Grades'>
          <Link to={`myCourseNav/Grades`}>{t("MySourse.grades")}</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='MyFiles' icon={<DesktopOutlined />}>
          <Link to={`myCourseNav/MyFiles`}>{t("MySourse.myFile")}</Link>
        </Menu.Item>
        <Menu.Item key='homework' icon={<ContainerOutlined />}>
        <Link to={`myCourseNav/homework`}>{t("MySourse.homework")}</Link>
        </Menu.Item>
       
      </Menu>
      <Routes>
        <Route path={`myCourseNav/Dashboard`} element={<Dashboard />} />
        <Route path={`myCourseNav/Quizzes`} element={<Quizzes />} />
        <Route path={`myCourseNav/Grades`} element={<Grades />} />
        <Route path={`myCourseNav/MyFiles`} element={<MyFiles />} />
        <Route path={`myCourseNav/homework`} element={<Homework />} />
      </Routes> 
      {/* <Outlet /> */}

    </div>
  )
}

export default MyCourseNav
