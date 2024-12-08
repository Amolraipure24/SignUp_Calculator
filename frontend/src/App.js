import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registers from "./components/Registers";
import Login from "./components/Login";
import Calculator from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated");
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/register" element={<Registers to="/register" />} />

          <Route path="/login" element={<Login to="/register" />} />

          <Route
            path="/calculator"
            element={
              isAuthenticated ? <Calculator /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
