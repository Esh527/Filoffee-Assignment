
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import TaskManager from "./Components/TaskManager";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user"); 
  };

  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/task-manager" />
              )
            }
          />

         
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUp />
              ) : (
                <Navigate to="/task-manager" />
              )
            }
          />

          
          <Route
            path="/task-manager"
            element={
              isAuthenticated ? (
                <TaskManager onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
