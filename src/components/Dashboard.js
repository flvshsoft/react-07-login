import React from "react";
import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Hapus status login
    navigate("/login"); // Redirect ke halaman login
  };

  return (
    <Layout>
      <Header
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "white", margin: 0 }}>Admin Dashboard</h2>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </Header>
      <Content style={{ padding: 24, minHeight: "calc(100vh - 134px)" }}>
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is the main area for admin tasks.</p>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Admin Dashboard ©{new Date().getFullYear()} Created by Flashsoft
        Indonesia
      </Footer>
    </Layout>
  );
};

export default Dashboard;
