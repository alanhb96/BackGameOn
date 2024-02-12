import { useBackgammon } from '../providers/BackgammonProvider'
import '../backgammonBoard.css'
import Dice from './dice'

const BackgammonBoard = () => {
  const { diceValues } = useBackgammon(); // Access game state using the custom hook

  // Render a single space with chips
  const renderSpace = (index, color, player1, player2) => (
    <div key={index} className="space" style={{ backgroundColor: color }}>
      {player1 && <div className="chip player1" />}
      {player2 && <div className="chip player2" />}
    </div>
  )

  // Render a row of spaces
  const renderRow = (rowIndex) => (
    <div className="row" key={rowIndex}>
      {Array.from({ length: 6 }, (_, index) => renderSpace(rowIndex * 6 + index, '#F5DEB3', false, false))}
    </div>
  )

  // Render the entire board
  const renderBoard = () => (
    <div className="backgammon-board">
      <div className="board-side">
        {Array.from({ length: 2 }, (_, index) => renderRow(index))}
      </div>
      <div className="board-side">
        {Array.from({ length: 2 }, (_, index) => renderRow(index + 2))}
      </div>
    </div>
  )

  return (
    <div className="backgammon-board-container">
      {renderBoard()}
      <Dice />
    </div>
  )
}

export default BackgammonBoard