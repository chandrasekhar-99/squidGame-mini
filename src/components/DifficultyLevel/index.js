import {Component} from 'react'
import LevelButton from '../LevelButton'
import './index.css'

const levelButtonsList = [
  {
    id: 0,
    name: 'Easy',
    buttonStyle: 'easy-button',
    level: 'easy-level',
  },
  {
    id: 2,
    name: 'Medium',
    buttonStyle: 'medium-button',
    level: 'medium-level',
  },
  {
    id: 3,
    name: 'Hard',
    buttonStyle: 'hard-button',
    level: 'hard-level',
  },
]

class DifficultyLevel extends Component {
  state = {
    activeBtnId: levelButtonsList[0].level,
  }

  setActiveTabId = level => {
    this.setState({activeBtnId: level})
  }

  render() {
    const {activeBtnId} = this.state
    return (
      <div className="level-container">
        <h1 className="heading">Select Difficulty Level</h1>
        <ul className="button-container">
          {levelButtonsList.map(eachButton => (
            <LevelButton
              key={eachButton.id}
              buttonDetails={eachButton}
              setActiveBtnId={this.setActiveBtnId}
              isActive={activeBtnId === eachButton.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DifficultyLevel
