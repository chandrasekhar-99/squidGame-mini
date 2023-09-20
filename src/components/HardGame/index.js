import {useState, useEffect} from 'react'
import {ImStopwatch} from 'react-icons/im'
import {useHistory} from 'react-router-dom'

import './index.css'

const HardGame = () => {
  const [currentColor, setCurrentColor] = useState('#ff5733') // Initial color
  const [nextColor, setNextColor] = useState('#33ff57') // Second color
  const [seconds, setSeconds] = useState(40)
  const [score, setScore] = useState(0)

  const history = useHistory()

  console.log(nextColor)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1)
      } else {
        clearInterval(timer) // Stop the timer when it reaches 0 seconds
        history.push('/game-over')
      }
    }, 1000) // Update every 1 second (1000 milliseconds)

    return () => clearInterval(timer) // Clean up the timer when the component unmounts
  }, [history, seconds, score])

  useEffect(() => {
    const timer = setInterval(() => {
      // Generate a random number between 0 and 1
      const randomValue = Math.random()

      // Set the background color based on the random number
      setCurrentColor(randomValue < 0.5 ? '#ff5733' : '#33ff57')
      setNextColor(randomValue < 0.5 ? '#33ff57' : '#ff5733')
    }, 1000) // Change color every 1 second

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer)
  }, [])

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: currentColor,
  }

  useEffect(() => {
    let timerInterval

    if (score === 25 && seconds === 0) {
      // Redirect to Game Won page
      history.push('/game-won')
    } else if (seconds <= 0) {
      // Redirect to Game Over page
      history.push('/game-over')
    }

    // Clean up the timer interval when the component unmounts
    return () => clearInterval(timerInterval)
  }, [score, seconds, history])

  const handleBoxClick = () => {
    if (currentColor === '#33ff57') {
      // User clicked on the green box, earn a point
      setScore(score + 1)
    } else if (currentColor === '#ff5733') {
      // User clicked on the red box, redirect to another page
      history.push('/game-over')
    }
  }

  return (
    <div className="main-container" data-testid="game">
      <nav className="nav-bar">
        <img
          src="https://imgur.com/RoRmIsW.jpg"
          alt="nav-logo"
          className="top-image"
        />
        <ul className="score-div">
          <li className="score-name">
            <p className="score-name-word">Score:</p>
            <p className="score">{score}</p>
          </li>
          <li className="score-name">
            <ImStopwatch className="timer-icon" />
            <p className="time">{seconds} sec</p>
          </li>
        </ul>
      </nav>
      <div className="content-div">
        <div
          role="button"
          tabIndex={0}
          style={boxStyle}
          onClick={handleBoxClick}
        >
          <p className="box-text">Click Box To Earn Points</p>
        </div>
      </div>
    </div>
  )
}

export default HardGame
