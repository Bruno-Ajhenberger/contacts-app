import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import ContactTablePage from "./pages/ContactTablePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactsProvider } from "./store/context/ContactsContext";
import React from "react";
import { AuthProvider } from "./Authentication/AuthContext";
import RequireAuth from "./Authentication/RequireAuth";

const App = () => {
  return (
    <ContactsProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LogIn />} />
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
                  <ContactTablePage />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ContactsProvider>
  );
};

export default App;
