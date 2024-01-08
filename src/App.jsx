import { useState } from 'react';
import './App.css';
import Landing from './Pages/LandingPage/Landing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-black h-screen">
      <Landing />
    </div>
  );
}

export default App;
