// src/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate("/game");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light'>
      <div className='p-4 bg-white shadow rounded text-center w-25'>
        <h2>Login</h2>
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
        <button className='btn btn-success w-100' onClick={handleLogin}>
          Login
        </button>
        <p className='mt-3'>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </div>
  );
}
