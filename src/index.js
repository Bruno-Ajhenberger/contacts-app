import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import ContactTable from "./pages/ContactTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsersContextProvider } from "./store/users-context";
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact-table" element={<ContactTable />} />
      </Routes>
    </Router>
  </UsersContextProvider>
);
