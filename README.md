# Sudoku Game 🧩🎮

A simple yet engaging Sudoku game built with React and Vite. This mini-game includes a 9x9 Sudoku board with adjustable difficulty levels. Players can fill in missing numbers, select a difficulty, and reset the board to a new configuration. Challenge your brain and improve your problem-solving skills! 🤯

## Features ✨

- **Difficulty Levels**: Choose between **Easy**, **Medium**, and **Hard** difficulties, each with a different number of blank cells. 🎯
- **Random Sudoku Board**: Generates a new, partially-filled board based on the selected difficulty level. 🔄
- **User Input**: Players can enter numbers in blank cells. 🖊️
- **Reset Button**: Resets the board to a new configuration based on the selected difficulty. 🔄🔢

## Project Setup 🛠️

### Prerequisites ⚙️

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)

### Installation 📝

1. **Clone the repository**:
   ```bash
   git clone https://github.com/millanda29/sudokuGame
   cd sudokuGame
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:5173/` (or the URL provided in the terminal).

## Project Structure 🏗️

Here’s an overview of the key components:

- **`App.jsx`**: Main application component that renders the title and Sudoku board. 📜
- **`Sudoku.jsx`**: Contains the logic for generating the Sudoku board, handling user input, difficulty selection, and reset functionality. 🎲
- **`App.css`**: Contains the styles for the board layout and components. 🎨

## Usage 🕹️

1. **Select a difficulty level** from the dropdown menu (Easy, Medium, Hard). 🎮
2. **Fill in missing numbers** in the blank cells. ✍️
3. **Click the "Reset" button** to generate a new board with the current difficulty. 🔄

## Future Improvements 🚀

Here are some features that could be added to enhance the game experience:

- **Sudoku Validation**: Implement validation rules to check for correct entries and provide feedback. ✅❌
- **Timer**: Add a timer to track completion time. ⏱️
- **Scoreboard**: Implement a scoreboard to record and track progress over time. 🏆
- **Advanced Difficulty Settings**: Introduce more challenging puzzles with more complex game logic. 💡

## License 📝

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to contribute, improve, or modify the game! 🎉

---
