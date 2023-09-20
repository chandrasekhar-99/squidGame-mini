import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import DifficultyLevel from './components/DifficultyLevel'
import StartGame from './components/StartGame'
import EasyGame from './components/EasyGame'
import MediumGame from './components/MediumGame'
import HardGame from './components/HardGame'
import GameOver from './components/GameOver'
import GameWon from './components/GameWon'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RegistrationForm} />
      <Route path="/game-level" component={DifficultyLevel} />
      <Route path="/easy-level" component={EasyGame} />
      <Route path="medium-level" component={MediumGame} />
      <Route path="hard-level" component={HardGame} />
      <Route path="/start-game" component={StartGame} />
      <Route path="/game-over" component={GameOver} />
      <Route path="/game-won" component={GameWon} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
