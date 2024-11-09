import React, { useState, useEffect } from "react";
import "../App.css";

const generateBoard = (difficulty) => {
    const completeBoard = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const blankCells = difficulty === "easy" ? 20 : difficulty === "medium" ? 40 : 55;

    const board = completeBoard.map((row) => [...row]);
    let blanks = 0;

    while (blanks < blankCells) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (board[row][col] !== "") {
            board[row][col] = "";
            blanks++;
        }
    }

    return board;
};

const Sudoku = () => {
    const [difficulty, setDifficulty] = useState("easy");
    const [board, setBoard] = useState(generateBoard(difficulty));

    useEffect(() => {
        setBoard(generateBoard(difficulty));
    }, [difficulty]);

    const handleChange = (row, col, value) => {
        const newBoard = board.map((r, i) =>
            r.map((cell, j) => (i === row && j === col ? value : cell))
        );
        setBoard(newBoard);
    };

    const resetBoard = () => setBoard(generateBoard(difficulty));

    return (
        <div>
            <h2>Sudoku Game</h2>
            <div>
                <label>Select Difficulty: </label>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className="board">
                {board.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((cell, j) => (
                            <input
                                key={j}
                                type="text"
                                maxLength="1"
                                value={cell}
                                onChange={(e) => handleChange(i, j, e.target.value)}
                                className={cell ? "preset" : ""}
                                readOnly={cell !== ""}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={resetBoard} className="reset-button">Reset</button>
        </div>
    );
};

export default Sudoku;
