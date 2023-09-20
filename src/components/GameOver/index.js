import {Link} from 'react-router-dom'
import './index.css'

const GameOver = () => (
  <div className="gameOver-form-main-container">
    <h1 className="game-over-heading">YOU LOSE GAME OVER !</h1>
    <div className="game-over-avatar">
      <Link to="/game-level">
        <button type="button" className="game-over-button">
          Game Over
        </button>
      </Link>
    </div>
  </div>
)

export default GameOver
