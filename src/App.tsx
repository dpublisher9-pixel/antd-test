import { Routes, Route, useRoutes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import MenuList from "@/components/menuList";
import SiderTop from "@/components/siderTop";

import DashboardMain from "@/pages/dashboardMain";
import Notice from "@/pages/notice";

import SurveyInfo from "@/pages/edition/surveyInfo";
import LangugeInfo from "@/pages/edition/langugeInfo";

import CommonInfo from "@/pages/question/commonInfo";
import QuestionInfo from "@/pages/question/questionInfo";

// icons
import { MenuOutlined } from "@ant-design/icons";

import { ConfigProvider, Layout, Menu, theme, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#2563EB",
          },
        }}
      >
        <Layout id="survey">
          <Sider
            trigger={null}
            collapsedWidth="60"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <SiderTop collapsed={collapsed} setCollapsed={setCollapsed} />
            <MenuList />
          </Sider>
          <Layout className="page-layout">
            <Routes>
              <Route path="/" element={<DashboardMain />} />
              <Route path="/notice" element={<Notice />} />

              <Route path="/edition/surveyInfo" element={<SurveyInfo />} />
              <Route path="/edition/langugeInfo" element={<LangugeInfo />} />

              <Route path="/question/commonInfo" element={<CommonInfo />} />
              <Route path="/question/questionInfo" element={<QuestionInfo />} />
            </Routes>
            <Footer />
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;
