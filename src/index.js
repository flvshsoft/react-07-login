import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router


// Render the App component inside the 'root' div in index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);