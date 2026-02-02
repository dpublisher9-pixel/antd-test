import { Routes, Route, useRoutes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// 메뉴
import MenuList from './components/MenuList';
import Home from "./pages/home"
import Notice from "./pages/notice";
import Transfer from "./pages/transfer";
import Result from "./pages/result";


// routes 설정
// const routes = useRoutes([
//   { path: '/', element: <Home /> },
//   { path: '/notice', element: <Notice /> },
//   { path: '/transfer', element: <Transfer /> },
//   { path: '/result', element: <Result /> },
//   { 
//     path: '*', 
//     element: <div style={{ padding: '20px' }}>404: 페이지를 찾을 수 없습니다.</div> 
//   }
// ]);

// icons
import {
  AppstoreOutlined,
  MailOutlined,
  DesktopOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  UnderlineOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  MessageFilled,
  FileDoneOutlined,
  CarryOutOutlined,
  PartitionOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
} from '@ant-design/icons'

import { ConfigProvider, Layout, Menu, theme, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function App() {

  return (
    <>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#2563EB',
        }
      }}
    >
      <Layout id='survey'>
        <Sider trigger={null}>
          <MenuList />
        </Sider>
        <Layout>
          <Routes>
            <Route path="/notice" element={<Notice />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/result" element={<Result />} />
          </Routes>
          <Footer>
            test layout
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
      
    </>
  )
}

export default App
