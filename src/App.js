import React from 'react';
import tata from './tata-transparent.png';
import './App.css';
import { gsap } from "gsap";

function App() {
  const headerRef = React.useRef();
  React.useEffect(() => {
    gsap.to(headerRef.current, { rotation: "+=360" });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={tata} className="App-logo" alt="logo" ref={headerRef}/>
        <p>Trying out greensock + React!</p>
      </header>
    </div>
  );
}

export default App;
