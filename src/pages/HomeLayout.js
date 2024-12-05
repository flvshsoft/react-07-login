// src/layouts/HomeLayout.js
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "20px" }}>
        <div style={{ background: "#fff", padding: "24px", minHeight: 280 }}>
          {children} {/* Render the page content */}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Flashsoft Indonesia
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
