import { createContext, useContext, useState } from 'react';

// Create a new context for managing the game state
const BackgammonContext = createContext()

// Custom hook to access the game state and functions
export const useBackgammon = () => useContext(BackgammonContext);

// Provider component to wrap your app and provide the game state
export const BackgammonProvider = ({ children }) => {
  const [player, setPlayer] = useState(1) // Player 1 starts the game
  const [diceValues, setDiceValues] = useState([1, 1]) // Initial dice values
  const [player1Chips, setPlayer1Chips] = useState([0, 0]) // Positions of chips for player 1
  const [player2Chips, setPlayer2Chips] = useState([0, 0]) // Positions of chips for player 2

  // Function to roll the dice
  const rollDice = () => {
    // Generate random values for the dice (between 1 and 6)
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    // Update the dice values in the state
    setDiceValues([dice1, dice2]);
  }

  // Function to handle moving checkers
  const moveChecker = (checkerIndex, steps) => {
    // Logic for moving the checker based on the dice values
    // This part needs to be implemented based on the game rules
    console.log(`Moving checker ${checkerIndex} ${steps} steps`)
  }

  // Expose the game state and functions through the context
  const contextValue = {
    player,
    diceValues,
    player1Chips,
    player2Chips,
    rollDice,
    moveChecker,
  }

  return (
    <BackgammonContext.Provider value={contextValue}>
      {children}
    </BackgammonContext.Provider>
  )
}