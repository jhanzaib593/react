import { useState } from 'react';
import './App.css';
import Navbar from  './Navbar.js'
import Contant from './Contant.js';
import Blog from './Blog.js'
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Footer.js';

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
    <>
    {/* <Route>
      <Routes>
          <Route path="/" element={<Navbar mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/" element={<Contant/>} />
          <Route path="/" element={<About mode={mode} toggleMode={toggleMode}/>} />
      </Routes>
    </Route> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {/* <Contant/>
    <About mode={mode} toggleMode={toggleMode}/> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contant mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route path='/Blogs' exact element={<Blog/>}></Route>
          
      </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  );
}

export default App;
