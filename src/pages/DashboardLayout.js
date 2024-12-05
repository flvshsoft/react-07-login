// src/layouts/DashboardLayout.js
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: 0 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ padding: "0 20px" }}>
            <h2>Admin Dashboard</h2>
          </div>
        </Header>

        <Content style={{ padding: "20px" }}>
          <div style={{ background: "#fff", padding: "24px", minHeight: 280 }}>
            {children} {/* Render the dashboard content */}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Flashsoft Indonesia
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
