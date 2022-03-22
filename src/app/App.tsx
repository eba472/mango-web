import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app'
import MainMenu from './components/menu/MainMenu'
import Games from './games/Games'
import ChooseLevel from './games/games/snake/ChooseLevel'
import Rule from './games/games/snake/gameRule/Rule'
import SnakePlay from './games/games/snake/playground/level1'
import { Content } from 'antd/lib/layout/layout'
import Registration from './components/header/registration/Registration'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import MyCourseNav from './myCourse/MyCourseNav'
import ContactUs from './contactUs/ContactUs'
import './styles.css'
import DictionaryMenu from './dictionary/DictionaryMenu'
import FrontPage from './components/frontPage/FrontPage'

const { Header, Footer } = Layout
const auth = firebase.auth()
const usePersistedState = (name: string, defaultValue: any) => {
  const [value, setValue] = React.useState(defaultValue)
  const nameRef = React.useRef(name)

  React.useEffect(() => {
    try {
      const storedValue = localStorage.getItem(name)
      if (storedValue !== null) setValue(storedValue)
      else localStorage.setItem(name, defaultValue)
    } catch {
      setValue(defaultValue)
    }
  }, [])

  React.useEffect(() => {
    try {
      localStorage.setItem(nameRef.current, value)
    } catch {}
  }, [value])

  React.useEffect(() => {
    const lastName = nameRef.current
    if (name !== lastName) {
      try {
        localStorage.setItem(name, value)
        nameRef.current = name
        localStorage.removeItem(lastName)
      } catch {}
    }
  }, [name])

  return [value, setValue]
}

function App() {
  const { t, i18n } = useTranslation('common')
  const [language, setLanguage] = usePersistedState('language', [
    { name: 'mn' },
  ])
  const [user] = useAuthState(auth as any)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  const googleSignout = () => {
    signOut(auth)
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
                    <span style={{ color: 'black' }} onClick={signInWithGoogle}>
                      {t('TopBar.signInMessage')}
                    </span>
                  ) : (
                    <span style={{ color: 'black' }}>
                      {t('TopBar.welcome') +
                        ' ' +
                        user?.displayName +
                        '!        '}
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item key='2'>
                  {user && (
                    <span
                      style={{ color: 'black' }}
                      onClick={() => googleSignout()}
                    >
                      {t('TopBar.signOut')}
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MainMenu />
          <Content
            className='site-layout'
            style={{
              padding: '0px',
              marginTop: 64,
              width: '80%',
              margin: '80px 40px',
            }}
          >
            <Routes>
              <Route path='/' element={<FrontPage />} />
              <Route path='dict/*' element={<DictionaryMenu />} />
              <Route path='contact-us' element={<ContactUs />} />
              <Route path='register' element={<Registration />} />
              <Route path='games' element={<Games />} />
              <Route path='games/snake' element={<ChooseLevel />} />
              <Route path='games/snake/level1' element={<Rule />} />
              <Route path='games/snake/level1/play' element={<SnakePlay />} />
              <Route path='myCourseNav/*' element={<MyCourseNav />} />
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
