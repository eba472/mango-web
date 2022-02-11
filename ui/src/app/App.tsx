import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './styles.css';
import { UserAddOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
import './styles.css';
import Typing from './pages/typing/Typing';
import Profile from './pages/profiles/Profile';
import Signup from './pages/signup/Signup';
import TypingTest from './pages/TypingTest/TypingTest';
import Experiment from './pages/experiment/Experiment';
import Dictionary from './dictionary/Dictionary';

function App() {
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
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{
                  backgroundColor: '#e76f51',
                }}
              >
                <Link to="/">
                  <Menu.Item
                    key="0"
                    style={{ color: 'white', paddingLeft: '0px' }}
                  >
                    <img
                      src="/Mango.png"
                      alt="imgLogo"
                      style={{ width: '64px', height: '64px' }}
                    ></img>
                  </Menu.Item>
                </Link>
                <Link to="/dic">
                  <Menu.Item
                    key="1"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Dictionary
                  </Menu.Item>
                </Link>
                <Link to="/typing">
                  <Menu.Item
                    key="2"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Typing
                  </Menu.Item>
                </Link>
                <Link to="/games">
                  <Menu.Item
                    key="3"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Games
                  </Menu.Item>
                </Link>
                <Link to="/pronunciation">
                  <Menu.Item
                    key="4"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Pronunciation
                  </Menu.Item>
                </Link>
                <Link to="/grammer">
                  <Menu.Item
                    key="5"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Grammer
                  </Menu.Item>
                </Link>
                <Link to="/idioms">
                  <Menu.Item
                    key="6"
                    style={{ color: 'white', fontSize: '20px' }}
                  >
                    Idioms
                  </Menu.Item>
                </Link>
              </Menu>
            </div>
            <div style={{ marginRight: '20px' }}>
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
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Routes>
            <Route path="dic" element={<Dictionary />} />
            <Route path="typing" element={<Typing />}>
              <Route path="profile" element={<Profile />} />
              <Route path="signup" element={<Signup />} />
              <Route path="TypingTest" element={<TypingTest />} />
              <Route path="experiment" element={<Experiment />} />
            </Route>
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Mango inc created by us!
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
