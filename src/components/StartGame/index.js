import {Link} from 'react-router-dom'
import './index.css'

const StartGame = () => (
  <div className="start-game-container" data-testid="start-game-page">
    <img
      src="https://i.imgur.com/zCBNwBQ.jpg"
      alt="start-game"
      className="start-game-avatar"
    />
    <Link to="/easy-level">
      <button type="button" className="start-btn" data-test="start-button">
        Start Game
      </button>
    </Link>
  </div>
)

export default StartGame
