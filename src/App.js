import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import HomeLayout from "./pages/HomeLayout";
import DashboardLayout from "./pages/DashboardLayout";

import DynamicBreadcrumb from "./components/DynamicBreadcrumb";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Routes>
      {/* Home layout */}
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/about"
        element={
          <HomeLayout>
            <About />
          </HomeLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <HomeLayout>
            <Contact />
          </HomeLayout>
        }
      />
      {/* Dashboard layout */}
      <Route path="/login" element={<Login />} /> {/* Login without layout */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default App;
