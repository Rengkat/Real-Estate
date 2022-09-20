import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./Contexts/AppContext";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ContextProvider>
);
