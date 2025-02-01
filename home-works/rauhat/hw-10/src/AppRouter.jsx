import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostId from "./pages/PostId";

const { Content } = Layout;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1677ff",
          },
        }}
      >
        <Layout>
          <Header />
          <Content
            style={{ padding: "0 50px", maxWidth: 1200, margin: "0 auto" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:postId" element={<PostId />} />
            </Routes>
          </Content>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
