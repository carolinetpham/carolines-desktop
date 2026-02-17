import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import FoldersPage from "./Folders/index";
import LoginPage from "./Components/LoginForm";
import PageTracker from "./Components/PageTracker";

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("username") || null
  );

  // Load username from localStorage on startup
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Handle login and store username in localStorage
  const handleLogin = (name: string) => {
    console.log("Logging in as:", name);
    setUsername(name);
    localStorage.setItem("username", name);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <div className="App">
      <HashRouter>
        <PageTracker />
        <Routes>
          {/* Login Page */}
          <Route
            path="/LoginPage/*"
            element={<LoginPage onLogin={handleLogin} />}
          />

          {/* Folders Page */}
          <Route
            path="/FoldersPage/*"
            element={
              username ? (
                <FoldersPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/LoginPage" />
              )
            }
          />

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/LoginPage" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
