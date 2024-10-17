import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);

  
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello, My name is ira!</h1>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCounter}>Increase</button>
    </div>
  );
}

export default App;
