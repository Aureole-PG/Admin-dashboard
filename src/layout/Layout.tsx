
import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './style.css'
const { Header, Content, Sider } = Layout

type LayoutComponet={
  url: string
}

const AdminLayout: React.FC<LayoutComponet> = ({ children, url }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="sm"
        collapsedWidth="50"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        // trigger={null}
      >
        <div className="my-logo">
          Logo
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={`${url}`}>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={`${url}/inventory`}>
                Inventary
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to={`${url}/users`}>
                users
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to={`${url}/items`}>Items</Link>
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">Uwu</Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
