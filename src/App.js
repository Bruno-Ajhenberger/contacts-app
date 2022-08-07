import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import ContactTable from "./pages/ContactTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactsContextProvider } from "./store/ContactsContext";
import LandingPage from "./pages/LandingPage";
import React from "react";
import { AuthProvider } from "./components/Authentication/AuthContext";
import RequireAuth from "./components/Authentication/RequireAuth";

const App = () => {
  return (
    <ContactsContextProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/contact-table"
              element={
                <RequireAuth>
                  <ContactTable />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ContactsContextProvider>
  );
};

export default App;
