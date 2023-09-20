import {Link} from 'react-router-dom'
import './index.css'

const GameWon = () => (
  <div className="gameWon-form-main-container">
    <h1 className="game-won-heading">YOU WON GAME !</h1>
    <div className="game-won-avatar">
      <Link to="/game-level">
        <button type="button" className="game-won-button">
          Game Won
        </button>
      </Link>
    </div>
  </div>
)

export default GameWon
