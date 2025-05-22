// src/SignUp.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const newUser = { username, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Username already exists. Please choose another.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Now log in.");
    navigate("/login");
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light'>
      <div className='p-4 bg-white shadow rounded text-center w-25'>
        <h2>Signup</h2>
        <input
          className='form-control mb-3'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='form-control mb-3'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary w-100' onClick={handleSignup}>
          Sign Up
        </button>
        <p className='mt-3'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}
