
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
    if (validUser) {
      alert("Login successful!");
      onLogin(); 
      navigate("/task-manager"); 
    } else {
      alert("Invalid username or password");
    }
  };
const onClick =()=>{
  navigate("/signup")
}
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button> <span>Donot have an account? <a onClick={onClick} href="#">Click Here</a></span>
      </form>
    </div>
  );
};

export default Login;
