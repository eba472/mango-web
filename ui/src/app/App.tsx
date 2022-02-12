import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import Typing from './typing/pages/typing/Typing'
import Profile from './typing/pages/profiles/Profile'
import Signup from './typing/pages/signup/Signup'
import TypingTest from './typing/pages/TypingTest/TypingTest'
import Experiment from './typing/pages/experiment/Experiment'
import Dictionary from './dictionary/Dictionary'
import './styles.css'
import { useTranslation } from 'react-i18next'
const { Header, Content, Footer } = Layout

function App() {
  const { t, i18n } = useTranslation('common')
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
            <div style={{ width: '100%' }}>
              <Menu
                mode='horizontal'
                style={{
                  backgroundColor: '#e76f51',
                }}
              >
                <Link to='/'>
                  <Menu.Item
                    key='0'
                    style={{ color: 'white', paddingLeft: '0px' }}
                  >
                    <img
                      src='/Mango.png'
                      alt='imgLogo'
                      style={{ width: '64px', height: '64px' }}
                    ></img>
                  </Menu.Item>
                </Link>
                <Menu.Item key='1' style={{ color: 'white', fontSize: '20px' }}>
                  <Link to='/dictionary'>{t('menu.dictionary')}</Link>
                </Menu.Item>
                <Menu.Item key='2' style={{ color: 'white', fontSize: '20px' }}>
                  <Link to='/typing'>{t('menu.typing')}</Link>
                </Menu.Item>

                <Menu.Item
                  key='3'
                  style={{ color: 'white', fontSize: '20px' }}
                  disabled
                >
                  <Link to='/games'>Games</Link>
                </Menu.Item>

                <Menu.Item
                  key='4'
                  style={{ color: 'white', fontSize: '20px' }}
                  disabled
                >
                  <Link to='/pronunciation'>Pronunciation</Link>
                </Menu.Item>
                <Menu.Item
                  key='5'
                  style={{ color: 'white', fontSize: '20px' }}
                  disabled
                >
                  <Link to='/grammer'>Grammer</Link>
                </Menu.Item>
                <Menu.Item
                  key='6'
                  style={{ color: 'white', fontSize: '20px' }}
                  disabled
                >
                  <Link to='/idioms'>Idioms</Link>
                </Menu.Item>
              </Menu>
            </div>
            <div style={{ marginRight: '20px', width: '150px' }}>
              <button onClick={() => i18n.changeLanguage('mn')}>mn</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
              <UserAddOutlined
                style={{
                  color: 'white',
                  fontSize: '40px',
                  paddingTop: '0.8%',
                }}
              />
            </div>
          </div>
        </Header>

        <Content
          className='site-layout'
          style={{ padding: '0px', marginTop: 64 }}
        >
          <Routes>
            <Route path='dictionary' element={<Dictionary />} />
            <Route path='typing' element={<Typing />}>
              <Route path='profile' element={<Profile />} />
              <Route path='signup' element={<Signup />} />
              <Route path='TypingTest' element={<TypingTest />} />
              <Route path='experiment' element={<Experiment />} />
            </Route>
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Mango inc created by us!
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
