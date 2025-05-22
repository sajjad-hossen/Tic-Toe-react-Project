// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Login";
import Game from "./Game";
import Signup from "./SignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={user ? <Navigate to='/game' /> : <Navigate to='/login' />}
        />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route
          path='/game'
          element={user ? <Game /> : <Navigate to='/login' />}
        />
      </Routes>
    </Router>
  );
}

export default App;
