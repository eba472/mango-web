import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu, Input, Space } from 'antd';
import './styles.css';
import { UserAddOutlined } from '@ant-design/icons';


const onSearch = (value: string ) => console.log(value);
import Search from './Search'


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
            padding: '0px',
          }}
        >
          <Menu
            style={{ backgroundColor: '#e76f51' }}
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
          <div className='container' style={{ display:'flex', justifyContent:'space-between' }}>
           <div>
            <Link to="/">
              <Menu.Item key="0" style={{ color: 'white', paddingLeft: '0px' }}>
                <img src="/Mango.png" alt="imgLogo" style={{ width: '64px', height: '64px' }} ></img>
              </Menu.Item>
            </Link>
            </div>
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
            <Link to="/pronunciation">
              <Menu.Item key="4" style={{ color: 'white', fontSize: '20px' }}>
                Pronunciation
              </Menu.Item>
            </Link>
            <Link to="/grammer">
              <Menu.Item key="5" style={{ color: 'white', fontSize: '20px' }}>
                Grammer
              </Menu.Item>
            </Link>
            <Link to="/idioms">
              <Menu.Item key="6" style={{ color: 'white', fontSize: '20px' }}>
                Idioms
              </Menu.Item>
            </Link>
            
           <div>
           <UserAddOutlined style={{ color: 'white', fontSize: '40px', paddingTop: '0.8%' }} />
           </div>
           </div>
          </Menu>
        </Header>


        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
       
       <Space direction="vertical" style={{ width:'450px', backgroundColor:'#e76f51', paddingLeft:'80px' }}>
              <Search placeholder="input search word" onSearch={onSearch} enterButton />
            </Space>,
           
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
