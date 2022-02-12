import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { GlobalOutlined, UserAddOutlined } from '@ant-design/icons'
import Typing from './typing/pages/typing/Typing'
import Profile from './typing/pages/profiles/Profile'
import Signup from './typing/pages/signup/Signup'
import TypingTest from './typing/pages/TypingTest/TypingTest'
import Experiment from './typing/pages/experiment/Experiment'
import Dictionary from './dictionary/Dictionary'
import './styles.css'
import { useTranslation } from 'react-i18next'
import SubMenu from 'antd/lib/menu/SubMenu'
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
                  disabled
                  key='3'
                  style={{ color: 'white', fontSize: '20px' }}
                >
                  <Link to='/games'>{t('menu.games')}</Link>
                </Menu.Item>

                <Menu.Item
                  disabled
                  key='4'
                  style={{ color: 'white', fontSize: '20px' }}
                >
                  <Link to='/pronunciation'>{t('menu.pronunciation')}</Link>
                </Menu.Item>
                <Menu.Item
                  disabled
                  key='5'
                  style={{ color: 'white', fontSize: '20px' }}
                >
                  <Link to='/grammer'>{t('menu.grammer')}</Link>
                </Menu.Item>
                <Menu.Item
                  disabled
                  key='6'
                  style={{ color: 'white', fontSize: '20px' }}
                >
                  <Link to='/idioms'>{t('menu.idioms')} </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Menu
                mode='horizontal'
                style={{
                  backgroundColor: '#e76f51',
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
                    English
                  </Menu.Item>
                  <Menu.Item
                    key='setting:2'
                    onClick={() => i18n.changeLanguage('mn')}
                  >
                    Mongolian
                  </Menu.Item>
                </SubMenu>
              </Menu>
              <UserAddOutlined
                style={{
                  marginRight: '20px',
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
