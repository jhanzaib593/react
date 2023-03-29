import { useState } from 'react';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from  './Navbar.js';
import Contant from './Contant.js';
import Blog from './Blog.js';
import Footer from './Footer.js';
import Poem from './components/Poem';
import Gallery from './components/Gallery';


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
    <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path='/' element={<Contant mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route path='/Blogs' exact element={<Blog/>}></Route>
          <Route path='/Poem' exact element={<Poem/>}></Route>
          <Route path='/Gallery' exact element={<Gallery/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
