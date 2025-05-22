// src/Game.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className='btn btn-outline-primary border border-dark fw-bold fs-3 p-0'
      style={{ width: "60px", height: "60px" }}
    >
      {value}
    </button>
  );
}

function Board({ Player1, Player2 }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = squares.every((sq) => sq !== null) && !winner;
  const currentPlayer = isXNext ? Player1 : Player2;
  const winningPlayer = winner === "X" ? Player1 : Player2;

  function handleClick(i) {
    if (squares[i] || winner) return;

    const nextSquares = [...squares];
    nextSquares[i] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light gap-2'>
      {winner ? (
        <div className='alert alert-success fw-bold fs-4 text-center w-50'>
          🎉 Congratulations!{" "}
          <span className='text-uppercase'>{winningPlayer}</span> wins!
        </div>
      ) : isDraw ? (
        <div className='alert alert-warning fw-bold fs-4 text-center w-50'>
          🤝 It's a draw!
        </div>
      ) : (
        <div className='alert alert-info fw-semibold fs-5 text-center w-50'>
          Next Player: <span className='text-uppercase'>{currentPlayer}</span>
        </div>
      )}
      <div className='d-flex gap-2'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='d-flex gap-2'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='d-flex gap-2'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <button onClick={resetGame} className='btn btn-danger fw-bold mt-3'>
        🔄 Reset Game
      </button>
    </div>
  );
}

export default function Game() {
  const [Player1, setPlayer1] = useState("");
  const [Player2, setPlayer2] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    if (Player1 && Player2) {
      setGameStarted(true);
    } else {
      alert("Please enter both players' names.");
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light'>
      {!gameStarted ? (
        <div className='text-center p-4 bg-white shadow rounded'>
          <h2 className='mb-4'>Enter Player Names</h2>
          <input
            type='text'
            placeholder='Enter Player 1 Name'
            className='form-control mb-3'
            value={Player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter Player 2 Name'
            className='form-control mb-3'
            value={Player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button onClick={handleStart} className='btn btn-success'>
            Start Game
          </button>
        </div>
      ) : (
        <Board Player1={Player1} Player2={Player2} />
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
