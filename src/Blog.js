import React from 'react'


function Blog(props) {
    return (
      <>
      {/* <!-- Main heading --> */}
      <section className="blog_wrapper">
          <div className="container">
              <h2><span>Thoughts,</span> stories and ideas by the Faizan</h2>
              <p className="pt-3 pb-5">A beautiful way to share stories with your growing audience.</p>
              <button className="modal-btn">Contact us</button>
          </div>
      </section>
      {/* <!-- Main heading end --> */}
  
      {/* <!--Categories section--> */}
      <section className="categories_wrapper">
          <div className="container">
              <p className="h2 text-light fw-bold fst-italic">Categories</p>
              <div className="row pt-5" id="myBtnContainer">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn active" onclick="filterSelection('all')">
                      <div className="categories_blog">
                          
                          <div className="blog-text">
                              <p className="h5 fw-bolder pb-4">Show All</p>
                            
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn " onclick="filterSelection('Git')">
                      <div className="categories_blog">
                         
                          <div className="blog-text">
                              <p>Git & GitHub</p>
                              <p className="h5 fw-bolder" style={{margin: `-15px 0px -4px`}}>Blog main tittle</p>
                              <p>Sub Tittle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onclick="filterSelection('Python')">
                      <div className="categories_blog">
                          
                          <div className="blog-text">
                              <p>Python</p>
                              <p className="h5 fw-bolder" style={{margin: `-15px 0px -4px`}}>Blog main tittle</p>
                              <p>Sub Tittle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onclick="filterSelection('R language')">
                      <div className="categories_blog">
                          
                          <div className="blog-text">
                              <p>R language</p>
                              <p className="h5 fw-bolder" style={{margin: `-15px 0px -4px`}}>Blog main tittle</p>
                              <p>Sub Tittle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onclick="filterSelection('SQL')">
                      <div className="categories_blog">
                          
                          <div className="blog-text">
                              <p>SQL</p>
                              <p className="h5 fw-bolder" style={{margin: `-15px 0px -4px`}}>Blog main tittle</p>
                              <p>Sub Tittle</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!--Categories section end--> */}
  
    
      </>
      
    );
  }
  
  export default Blog;
  
  