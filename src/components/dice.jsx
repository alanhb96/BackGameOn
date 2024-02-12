import { useBackgammon } from '../providers/BackgammonProvider';
import '../backgammonBoard.css';

// Import dice images
import dice1Img from '../assets/dice1.png';
import dice2Img from '../assets/dice2.png';
import dice3Img from '../assets/dice3.png';
import dice4Img from '../assets/dice4.png';
import dice5Img from '../assets/dice5.png';
import dice6Img from '../assets/dice6.png';

const Dice = () => {
  const { diceValues, rollDice } = useBackgammon(); // Access game state and functions using the custom hook

  // Map dice value to corresponding image
  const getDiceImage = (value) => {
    switch (value) {
      case 1:
        return dice1Img;
      case 2:
        return dice2Img;
      case 3:
        return dice3Img;
      case 4:
        return dice4Img;
      case 5:
        return dice5Img;
      case 6:
        return dice6Img;
      default:
        return null;
    }
  }

  return (
    <div className="dice-container">
      <button onClick={rollDice}>Roll Dice</button>
      <div className="dice">{diceValues[0] && <img src={getDiceImage(diceValues[0])} alt={`Dice ${diceValues[0]}`} />}</div>
      <div className="dice">{diceValues[1] && <img src={getDiceImage(diceValues[1])} alt={`Dice ${diceValues[1]}`} />}</div>
    </div>
  )
}

export default Dice