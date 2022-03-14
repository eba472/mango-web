import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'

import { useTranslation } from 'react-i18next'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import MainMenu from './components/menu/MainMenu'
import Games from './games/Games'
import ChooseLevel from './games/games/snake/ChooseLevel'
import Rule from './games/games/snake/gameRule/Rule'
import SnakePlay from './games/games/snake/playground/level1'
import MyCourse from './myCourse/MyCourse'
import Dashboard from './myCourse/dashboard/Dashboard'
import Quizzes from './myCourse/gradesAndQuizzes/Quizzes'
import Grades from './myCourse/gradesAndQuizzes/Grades'
import MyFiles from './myCourse/myFiles/MyFiles'
import Homework from './myCourse/homework/Homework'
import Dictionary from './dictionary/Dictionary'
import { Content } from 'antd/lib/layout/layout'
import Registration from './components/header/registration/Registration'
import './styles.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'
import { signOut } from 'firebase/auth'

const { Header, Footer } = Layout
const auth = firebase.auth()
function App() {
  const { t, i18n } = useTranslation('common')
  const [language, setLanguage] = useState('mn')
  const [user] = useAuthState(auth as any)
  console.log('user', user)
  console.log('user?.displayName', user?.displayName)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  const googleSignout = () => {
    signOut(auth)
    console.log('user :>> ', user)
  }
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
                <Menu.Item key='1'>
                  {!user ? (
                    <span onClick={signInWithGoogle}>
                      Please sign in with Google here!
                    </span>
                  ) : (
                    <span>{'Welcome ' + user?.displayName + '!        '}</span>
                  )}
                </Menu.Item>
                <Menu.Item key='2'>
                  {user && (
                    <span
                      style={{ color: 'blue' }}
                      onClick={() => googleSignout()}
                    >
                      Sign out
                    </span>
                  )}
                </Menu.Item>
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
                    {t('menu.english')}
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key='setting:2'
                    onClick={() => {
                      i18n.changeLanguage('mn')
                      setLanguage('mn')
                    }}
                  >
                    {t('menu.mongolian')}
                  </Menu.Item>
                )}
              </Menu>
            </div>
          </div>
        </Header>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MainMenu />
          <Content
            className='site-layout'
            style={{ padding: '0px', marginTop: 64, width: '80%' }}
          >
            <Routes>
              <Route path='dictionary' element={<Dictionary />} />
              <Route path='register' element={<Registration />} />
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
