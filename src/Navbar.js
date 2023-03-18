import React from 'react';
function Navbar(props) {
    return (
      <>
     
     <header className="header_wrapper" style={{backgroundColor:props.mode==='light'?'gray':'#c6c9d8bf'}}>
        <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode}`}>
            <div className="container d-flex justify-content-end">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-stream navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" style={{color:props.mode==='light'?'black':'#c6c9d8bf'}} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:props.mode==='light'?'black':'#c6c9d8bf'}}href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:props.mode==='light'?'black':'#c6c9d8bf'}}href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:props.mode==='light'?'black':'#c6c9d8bf'}}href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:props.mode==='light'?'black':'#c6c9d8bf'}} href="poem.html">Poems</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{color:props.mode==='light'?'black':'#c6c9d8bf'}} href="#videos">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color:props.mode==='light'?'black':'#c6c9d8bf'}} href ="/Blogs">Blogs</a>
                        </li>
                        <li className="nav-item mt-3 mt-lg-0">
                            <a  href="/">
                                <button className="main-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#Contact">Contact</button>  
                            </a>
                        </li>
                        <li className="pt-2">
                            <div class="m-check form-switch">
                                <input className="form-check-input f-c" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label p-1" htmFor="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'#c6c9d8bf'}}>Light Mode</label>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
      </>
      
    );
  }
  
  export default Navbar;
  
  