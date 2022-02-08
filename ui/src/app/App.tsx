import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './styles.css';

const { Header, Content, Footer } = Layout;
import './styles.css';
import Typing from './pages/typing/Typing';
import Profile from './pages/profiles/Profile';
import Signup from './pages/signup/Signup';
import TypingTest from './pages/TypingTest/TypingTest';
import Experiment from './pages/experiment/Experiment';

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
          }}
        >
          <Menu
            style={{ backgroundColor: '#e76f51' }}
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Link to="/">
              <Menu.Item key="0" style={{ color: 'white', fontSize: '20px' }}>
                My Logo
              </Menu.Item>
            </Link>
            <Link to="/dic">
              <Menu.Item key="1" style={{ color: 'white', fontSize: '20px' }}>
                Dictionary
              </Menu.Item>
            </Link>
            <Link to="/typing">
              <Menu.Item key="2" style={{ color: 'white', fontSize: '20px' }}>
                Typing
              </Menu.Item>
            </Link>
            <Link to="/games">
              <Menu.Item key="3" style={{ color: 'white', fontSize: '20px' }}>
                Games
              </Menu.Item>
            </Link>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Routes>
            <Route path="typing" element={<Typing />}>
              <Route path="profile" element={<Profile />} />
              <Route path="signup" element={<Signup />} />
              <Route path="TypingTest" element={<TypingTest />} />
              <Route path="experiment" element={<Experiment />} />
            </Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
