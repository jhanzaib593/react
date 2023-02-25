
function App() {
  return (
    <>
   
<header className="bg-black pt-2 fixed-top">	
<div className="container">
    <div className="row ">
        
        <div className="">
            <nav className="navbar navbar-expand-md navbar-light header-navbar">
                <div className="header-img-2" id="logo" alt=""></div>
                
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="Data-Science-course.html">Data Science Course</a>
                            <a className="dropdown-item" href="Python-course.html">Python Course</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#founder">Founder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blogs.html">Blogs</a>
                        </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact-section">Contact</a>
                        </li>  
                        </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
</header>
    </>
    
  );
}

export default App;

