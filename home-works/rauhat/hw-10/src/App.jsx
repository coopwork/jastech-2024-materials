import React from "react";
import { ConfigProvider } from "antd";
import AppRouter from "./AppRouter";
import "antd/dist/reset.css";
import "./index.css";

const App = () => (
  <ConfigProvider>
    <AppRouter />
  </ConfigProvider>
);

export default App;
