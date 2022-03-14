import React, { CSSProperties, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Badge, Layout, Menu } from 'antd'
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import Typing from './typing/pages/typing/Typing'
import Profile from './typing/pages/profiles/Profile'
import Signup from './typing/pages/signup/Signup'
import TypingTest from './typing/pages/TypingTest/TypingTest'
import Experiment from './typing/pages/experiment/Experiment'
import Dictionary from './dictionary/Dictionary'
import './styles.css'
import { useTranslation } from 'react-i18next'
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
import Flashcard from './flashcard/Flashcard'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const { Header, Content, Footer } = Layout

function App() {
  const { t, i18n } = useTranslation('common')
  const [language, setLanguage] = useState('mn')
  const [toggleCollapsed, setToggleCollapsed] = useState(false)

  const [sideMenuVisible, setSideMenuVisible] = useState(false)

  const menuItemStyle: CSSProperties = { color: 'white', fontSize: '20px' }
  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: '0px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '100%' }}>
              <Menu
                mode='horizontal'
                style={{
                  backgroundColor: '#fff',
                }}
              >
                <Link to='/'>
                  <Menu.Item
                    key='0'
                    style={{ color: 'white', paddingLeft: '0px' }}
                  >
                    <img
                      src='/Logo.png'
                      alt='imgLogo'
                      style={{
                        width: '64px',
                        height: '50px',
                        padding: '5px',
                        marginLeft: '18px',
                      }}
                    ></img>
                  </Menu.Item>
                </Link>
              </Menu>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Menu
                mode='horizontal'
                style={{
                  width: '150px',
                }}
              >
                {language === 'mn' ? (
                  <Menu.Item
                    key='setting:1'
                    onClick={() => {
                      i18n.changeLanguage('en')
                      setLanguage('en')
                    }}
                    >
                    <img
                      src='/english-dict-round-sign.png'
                      alt='imgEngFlag'
                      style={{
                        width: '64px',
                        height: '50px',
                        padding: '5px',
                        marginLeft: '18px',
                      }}
                    ></img>
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key='setting:2'
                    onClick={() => {
                      i18n.changeLanguage('mn')
                      setLanguage('mn')
                    }}
                  >
                    <img
                      src='/mongolia-dict-round-sign.png'
                      alt='imgMnFlag'
                      style={{
                        width: '64px',
                        height: '50px',
                        padding: '5px',
                        marginLeft: '18px',
                      }}
                    ></img>
                  </Menu.Item>
                )}
              </Menu>
            </div>
          </div>
        </Header>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}
        >
          <div
            id='mainMenuOnTheSide'
            style={{ width: '20%', minWidth: 200 }}
            onMouseEnter={() => setToggleCollapsed(false)}
            onMouseLeave={() => setToggleCollapsed(true)}
          >
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode='vertical'
              theme='light'
              inlineCollapsed={toggleCollapsed}
            >
              <Menu.Item
                key='1'
                style={menuItemStyle}
                icon={<PieChartOutlined />}
              >
                <Link to='/dictionary'>{t('menu.dictionary')}</Link>
              </Menu.Item>

              <Menu.Item
                key='2'
                style={menuItemStyle}
                disabled={true}
                icon={<DesktopOutlined />}
              >
                <Badge
                  count={t('menu.comingSoon')}
                  size='small'
                  offset={[12, -9]}
                  style={{
                    backgroundColor: 'white',
                    padding: '0px 5px ',
                    color: '#000',
                    fontSize: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  <Link to='/games'>{t('menu.games')}</Link>
                </Badge>
              </Menu.Item>

              <Menu.Item
                key='3'
                style={menuItemStyle}
                disabled={true}
                icon={<ContainerOutlined />}
              >
                <Badge
                  count={t('menu.comingSoon')}
                  size='small'
                  offset={[12, -9]}
                  style={{
                    backgroundColor: 'white',
                    padding: '0px 5px ',
                    color: '#000',
                    fontSize: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  <Link to='/myCourse'>{t('menu.myCourse')}</Link>
                </Badge>
              </Menu.Item>
              <Registration
                sideMenuVisible={sideMenuVisible}
                setSideMenuVisible={setSideMenuVisible}
              />
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
            </Routes>
          </Content>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          This dictionary is created by A+
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
