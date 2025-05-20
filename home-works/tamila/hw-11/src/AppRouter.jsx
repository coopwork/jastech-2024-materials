import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { Layout, Menu, Typography, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const AppRouter = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MailOutlined style={{ fontSize: '24px', color: 'white', marginRight: '10px' }} />
          <Typography.Title level={3} style={{ color: 'white', flex: 1 }}>Posts</Typography.Title>
          <Space>
            <Menu mode="horizontal" theme="dark" selectable={false}>
              <Menu.Item key="home">
                <Link to="/" style={{ color: 'inherit' }}>Home</Link>
              </Menu.Item>
            </Menu>
          </Space>
        </div>
      </Header>
      <Layout style={{ padding: '0 50px', marginTop: '64px' }}>
        <Content style={{ padding: '24px', minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:postId' element={<PostId />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppRouter;
