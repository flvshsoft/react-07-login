import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      // Jika tidak ada token, arahkan ke halaman login
      navigate("/dashboard");
    }
  }, [navigate]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Send login request to your API
      const response = await axios.post("http://localhost:4000/auth/login", {
        username: values.username,
        password: values.password,
      });

      // Simulate storing the token from the response
      const token = response.data.token;
      localStorage.setItem("authToken", token); // Save token in localStorage

      setLoading(false);
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (error) {
      setLoading(false);
      message.error("Login failed. Please try again."); // Show error message
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
