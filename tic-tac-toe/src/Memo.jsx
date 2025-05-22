import React, { useState } from "react";
import Login from "./Login";

export default function Memo() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <div className='bg-primary text-white p-3 d-flex justify-content-between align-items-center position-relative'>
        <div className='d-flex align-items-center gap-2'>
          <img
            src='https://img.icons8.com/color/48/000000/trophy.png'
            alt='Game Logo'
            width='40'
            height='40'
          />
          <h4 className='m-0'>Tic Tac Toe</h4>
        </div>

        {/* Menu Button */}
        <div className='position-relative'>
          <button className='btn btn-light fw-bold px-3' onClick={toggleMenu}>
            Menu
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className='position-absolute end-0 mt-2 bg-white border rounded shadow p-2 text-dark z-1'>
              <button className='btn btn-outline-primary w-100 mb-2'>
                Statistics
              </button>
              <button className='btn btn-outline-success w-100 mb-2'>
                Login
              </button>
              <button className='btn btn-outline-warning w-100 mb-2'>
                SignUp
              </button>
              <button className='btn btn-outline-dark w-100'>Owner</button>
              <button className='btn btn-outline-dark w-100'>High Score</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
