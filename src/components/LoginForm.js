import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Contoh validasi sederhana
    const { username, password } = values;
    if (username === "admin" && password === "admin123") {
      message.success("Login successful!");
      localStorage.setItem("isAuthenticated", true); // Simpan status login
      navigate("/dashboard"); // Redirect ke dashboard
    } else {
      message.error("Invalid username or password!");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2 style={{ textAlign: "center" }}>Admin Login</h2>
      <Form name="login" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
