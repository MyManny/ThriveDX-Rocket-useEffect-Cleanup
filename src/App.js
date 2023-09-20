import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher.jsx'

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

  const handleChange = (e) => {
    setRocketName(e.target.value)
  }
 

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setLaunch(!launch)}>
        {launch ? "Abort" : "Start"}
        </button>
      {launch ? <RocketLauncher /> : null}
    </main>
  );
}

export default App;