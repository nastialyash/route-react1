import './App.css'
import About from './components/About'
//import Menu from './components/Menu'
import Privacy from './components/Privacy'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Layout, theme } from 'antd';
import { useState } from 'react'
import Login from './components/Login'
import SideBar from './components/SideBar'
import UserList from './components/UserList'
import UserTable from './components/UserTable'
import Register from './components/Register'
const { Header, Sider, Content } = Layout;




const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <SideBar/>
      <Layout>
    
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            minWidth: '80vw',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/privacy" element={<Privacy/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/users' element={<UserList/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/user-table" element={<UserTable/>}/>
               <Route path="*" element={<h2>Page not found</h2>}/>
               {/* <About/>
               <Privacy/> */}
            </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};


export default App
