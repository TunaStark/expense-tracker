import { Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp";
import { Breadcrumb, Layout, Menu } from 'antd';



function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Expences</Menu.Item>
            <Menu.Item key="3">Catch Up</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>
        <Routes>

          <Route path="/register" element={<SignUp />} />
        </Routes>

      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Expanse Tracker ©2022 Created by Tuna Güralp with Love
      </Footer>
    </Layout>
  );
}

export default App;
