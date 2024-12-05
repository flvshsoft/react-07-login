import React, { useEffect } from "react";
import { Layout, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem("authToken");
    if (!token) {
      // Jika tidak ada token, arahkan ke halaman login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Hapus token dan logout
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <Layout style={{ padding: "0" }}>
    
        <Card title="Dashboard" extra={<a onClick={handleLogout}>Logout</a>}>
          <p>Welcome to the Admin Dashboard2!</p>
        </Card>
    </Layout>
  );
};

export default Dashboard;
