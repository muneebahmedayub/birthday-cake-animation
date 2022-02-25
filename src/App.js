import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Cake from './components/Cake/Cake';

function App() {
  const [confettiFlag, setConfettiFlag] = useState(false)
  const [textOpacity, setTextOpacity] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setConfettiFlag(true)
      setTextOpacity(true)
    }, 6500)
  }, [])
  return (
    <div className="App">
      {confettiFlag && <Confetti style={{ zIndex: -10, opacity: 0.6 }} />}
      <Cake />
      <div style={{ opacity: textOpacity }} className="text">
        <h1>Happy Birthday!</h1>
        <p>Happiest 16th Birthday Zain Ali!</p>
        <p>Many many happy returns of the day!</p>
        <p>I wish that the coming year will be the best year of your life!</p>
      </div>
    </div>
  );
}

export default App;
