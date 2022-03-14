import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Badge, Layout, Menu } from 'antd'
import { ContainerOutlined, DesktopOutlined, GlobalOutlined, PieChartOutlined } from '@ant-design/icons'
import Typing from './typing/pages/typing/Typing'
import Profile from './typing/pages/profiles/Profile'
import Signup from './typing/pages/signup/Signup'
import TypingTest from './typing/pages/TypingTest/TypingTest'
import Experiment from './typing/pages/experiment/Experiment'
import Dictionary from './dictionary/Dictionary'
import './styles.css'
import { useTranslation } from 'react-i18next'
import SubMenu from 'antd/lib/menu/SubMenu'
import Games from './games/Games'
import Registration from './components/header/registration/Registration'
import ChooseLevel from './games/games/snake/ChooseLevel'
import Rule from './games/games/snake/gameRule/Rule'
import SnakePlay from './games/games/snake/playground/level1'
import MyCourse from './myCourse/MyCourse'
import Dashboard from './myCourse/dashboard/Dashboard'
import Quizzes from './myCourse/gradesAndQuizzes/Quizzes'
import Grades from './myCourse/gradesAndQuizzes/Grades'
import MyFiles from './myCourse/myFiles/MyFiles'
import Homework from './myCourse/homework/Homework'



import { Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer } = Layout

function App() {
  const { t, i18n } = useTranslation('common')

  const [toggleCollapsed, setToggleCollapsed] = useState(false)


  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: '#e76f51',
            padding: '0px',
          }}
        >

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '100%' }} >
              <Menu
                mode='horizontal'
                style={{
                  backgroundColor: '#e76f51',
                }}>
                <Link to='/'>
                  <Menu.Item
                    key='0'
                    style={{ color: 'white', paddingLeft: '0px' }}
                  >
                    <img
                      src='/Logo.png'
                      alt='imgLogo'
                      style={{ width: '64px', height: '50px', padding: '5px', marginLeft: '10px' }}
                    ></img>
                  </Menu.Item>
                </Link>

              </Menu>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Menu
                mode='horizontal'
                style={{
                  backgroundColor: '#e76f51',
                  width: '200px',
                }}
              >
                <SubMenu
                  style={{ color: 'white', fontSize: '20px' }}
                  key='SubMenu'
                  icon={<GlobalOutlined />}
                  title={t('menu.changeLanguage')}
                >
                  <Menu.Item
                    key='setting:1'
                    onClick={() => i18n.changeLanguage('en')}
                  >
                    {t('menu.english')}
                  </Menu.Item>
                  <Menu.Item
                    key='setting:2'
                    onClick={() => i18n.changeLanguage('mn')}
                  >
                    {t('menu.mongolian')}
                  </Menu.Item>
                </SubMenu>
              </Menu>
              <Registration />
            </div>
          </div>

        </Header>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <div id="mainMenuOnTheSide" style={{ width: '30%' }}>
            <Button type="primary" onClick={() => setToggleCollapsed(!toggleCollapsed)} style={{ marginBottom: 16 }}>
              {React.createElement(toggleCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>

            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={toggleCollapsed}
            >


              <Menu.Item key='1' style={{ color: 'white', fontSize: '20px' }} icon={<PieChartOutlined />}>
                <Link to='/dictionary'>{t('menu.dictionary')}</Link>
              </Menu.Item>

              <Menu.Item key='2' style={{ color: 'white', fontSize: '20px' }} disabled={true} icon={<DesktopOutlined />}>
                <Badge count={t('menu.coming soon')} size="small" offset={[12, -9]} style={{ backgroundColor: "white", padding: '0px 5px ', color: '#000', fontSize: '8px', fontWeight: 'bold' }} >
                  <Link to='/games' >{t('menu.games')}</Link>
                </Badge>
              </Menu.Item>

              <Menu.Item key='3' style={{ color: 'white', fontSize: '20px' }} disabled={true} icon={<ContainerOutlined />}>
                <Badge count={t('menu.coming soon')} size="small" offset={[12, -9]} style={{ backgroundColor: "white", padding: '0px 5px ', color: '#000', fontSize: '8px', fontWeight: 'bold' }} >
                  <Link to='/myCourse'>{t('menu.myCourse')}</Link>
                </Badge>
              </Menu.Item>


              {/* <Menu.Item key='4' style={{ color: 'white', fontSize: '20px' }}>
                  <Link to='/typing'>{t('menu.typing')}</Link>
                </Menu.Item> */}
            </Menu>
          </div>
          <Content
            className='site-layout'
            style={{ padding: '0px', marginTop: 64, width: '70%' }}
          >
            <Routes>
              <Route path='dictionary' element={<Dictionary />} />

              <Route path='games' element={<Games />} />
              <Route path='games/snake' element={<ChooseLevel />} />
              <Route path='games/snake/level1' element={<Rule />} />
              <Route path='games/snake/level1/play' element={<SnakePlay />} />

              <Route path='myCourse' element={<MyCourse />}>
                <Route path='dashBoard' element={<Dashboard />} />
                <Route path='quizzes' element={<Quizzes />} />
                <Route path='grades' element={<Grades />} />
                <Route path='MyFiles' element={<MyFiles />} />
                <Route path='homework' element={<Homework />} />



              </Route>

              <Route path='typing' element={<Typing />}>
                <Route path='profile' element={<Profile />} />
                <Route path='logIn' element={<Signup />} />
                {/* <Route path='signup' element={<Signup />} /> */}
                <Route path='TypingTest' element={<TypingTest />} />
                <Route path='experiment' element={<Experiment />} />
              </Route>
            </Routes>
          </Content>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          Mango inc created by us!
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
