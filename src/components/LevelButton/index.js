import {Link} from 'react-router-dom'
import './index.css'

const levelButtonItem = props => {
  const {buttonDetails, setActiveBtnId} = props
  const {name, buttonStyle, level} = buttonDetails

  const onClickBtn = () => {
    setActiveBtnId(level)
  }

  return (
    <li className="button-styles">
      <Link to="/start-game">
        <button
          type="button"
          className={buttonStyle}
          data-testid={name}
          onClick={onClickBtn}
        >
          {name}
        </button>
      </Link>
    </li>
  )
}

export default levelButtonItem
