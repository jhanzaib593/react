import { useState } from 'react';
import './App.css';
import Navbar from  './Navbar.js'

function App() {
  const [mode, setMode] = useState ('bg-dark-blue');
  const toggleMode = () => {
    if(mode==='light'){
      setMode('bg-dark-blue');
      document.body.style.backgroundColor = '#091020';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Navbar mode={mode} toggleMode={toggleMode}/>
    
  );
}

export default App;
