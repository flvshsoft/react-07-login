import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
