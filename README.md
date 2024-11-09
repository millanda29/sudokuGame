# Sudoku Game

A simple Sudoku game built with React and Vite. This mini-game includes a 9x9 Sudoku board with adjustable difficulty levels. Players can fill in missing numbers, select a difficulty, and reset the board to a new configuration.

## Features

- **Difficulty Levels**: Choose between Easy, Medium, and Hard difficulties, each with a different number of blank cells.
- **Random Sudoku Board**: Generates a new, partially-filled board based on the selected difficulty level.
- **User Input**: Players can enter numbers in blank cells.
- **Reset Button**: Resets the board to a new configuration based on the selected difficulty.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/millanda29/sudokuGame
   cd sudokuGame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173/` (or the URL provided in the terminal).

## Project Structure

- **`App.jsx`**: Main application component, renders the title and Sudoku board.
- **`Sudoku.jsx`**: Contains the Sudoku board logic, including random board generation, difficulty selection, number input handling, and reset functionality.
- **`App.css`**: Basic styles for the board layout and components.

## Usage

1. Select a difficulty level from the dropdown menu (Easy, Medium, Hard).
2. Fill in missing numbers in the blank cells.
3. Click the "Reset" button to generate a new board with the current difficulty.

## Future Improvements

This project can be enhanced with:
- Sudoku validation rules to check for correct entries.
- Timer to track completion time.
- Scoreboard or save feature to record progress.
- Enhanced difficulty settings and game logic for more challenging puzzles.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

This README should now provide clear guidance on how to set up, run, and use the enhanced Sudoku game project. Let me know if there are more details you'd like to include!