


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.username === userDetails.username)) {
      alert("Username already exists");
      return;
    }
    users.push({
      username: userDetails.username,
      password: userDetails.password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign-up successful!");
    navigate("/login"); 
  };
const onClick =()=>{
  navigate("/login")
}
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userDetails.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userDetails.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button><span>Already have an account? <a onClick={onClick} href="#">Click Here</a></span>
      </form>
    </div>
  );
};

export default SignUp;
