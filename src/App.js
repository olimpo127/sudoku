import './App.css';
import React, { useState } from 'react';

const initialGrid = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0]
];

const SudokuGame = () => {
  const [grid, setGrid] = useState(initialGrid);

  const validateInput = (row, col, value) => {
    // Check for duplicate in the same row
    for (let c = 0; c < 9; c++) {
      if (grid[row][c] === value) {
        return false;
      }
    }

    // Check for duplicate in the same column
    for (let r = 0; r < 9; r++) {
      if (grid[r][col] === value) {
        return false;
      }
    }

    return true;
  };

  const handleCellChange = (row, col, value) => {
    if (validateInput(row, col, value)) {
      const newGrid = [...grid];
      newGrid[row][col] = value;
      setGrid(newGrid);
    } else {
      alert('Duplicate number in the same row or column!');
    }
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <input
            type="number"
            className="cell"
            key={colIndex}
            value={cell !== 0 ? cell : ''}
            onChange={(e) =>
              handleCellChange(rowIndex, colIndex, parseInt(e.target.value) || 0)
            }
          />
        ))}
      </div>
    ));
  };

  return <div className="sudoku">{renderGrid()}</div>;
};

export default SudokuGame;
