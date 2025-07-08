import { Link} from 'react-router-dom';
// import {Menu } from 'antd';
import {
  QuestionCircleOutlined,
  LoginOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Layout,Menu } from 'antd';
const { Header, Sider, Content } = Layout;
function SideBar(){


    return (
        <Sider trigger={null} collapsible>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: 
                <Link to={"/about"}>
                  <QuestionCircleOutlined />
                </Link>,
              label: 'About',
            },
            {   
              key: '2',
              icon: 
              <Link to={"/privacy"}>
                <LockOutlined />,
              </Link>,
              label: 'Privacy',
            },
            {
              key: '3',
              icon:
              <Link to={"/users"}>
                  <UserOutlined />,
              </Link> ,
              label: 'Users',
            },
            {
              key: '4',
              icon:
              <Link to={"/login"}>
                  <LoginOutlined />,
              </Link> ,
              label: 'Login',
            },
           {
    key: '5',
    icon: <UserAddOutlined />,
    label: <Link to="/register">Register</Link>,
  },
            {
    key: '6',
    icon: <TableOutlined />,
    label: <Link to="/user-table">User Table</Link>,
  },
          ]}
        />
      </Sider>
    )
}

export default SideBar;