import { useState } from 'react'
import './App.css'
import Background from './components/background/Background'
import Nav from './components/nav/Nav'
import Quiz from './components/quiz/Quiz'

function App() {

  const [isDark, setIsDark] = useState()

  function backgroundHandler(data) {
    setIsDark(data)
  }

  return (
    <div className="App">
      <Background dark={isDark} />
      <div className="app--cont">
        <Nav darkthemne={backgroundHandler} />
        <Quiz />
      </div>
    </div>
  )
}

export default App
