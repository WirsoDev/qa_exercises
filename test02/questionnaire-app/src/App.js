import './App.css';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="app--cont">
        <Nav />
        <Quiz />
      </div>
    </div>
  );
}

export default App;
