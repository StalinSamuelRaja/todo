import { useState } from 'react';
import './App.css'; // This should include your custom styles, if any
import Home from './home'; // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Dev's... :)</h1>
      <button className="btn btn-primary">Test Button</button>
      <Home />
    </>
  );
}

export default App;
