import React from 'react'
let imgs = [
    'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2017/03/git-1.png',
  ];
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
    {/* <section className="categories_wrapper">
        <div className="container">
            <p className="h2 text-light fw-bold fst-italic">Categories</p>
            <div className="row pt-5" id="myBtnContainer">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn active" onClick={filterSelection('all')}>
                    <div className="categories_blog">
                        <img alt=' '  src="" 
                        className="w-100" height="300"/>
                        <div className="blog-text">
                            <p className="h5 fw-bolder pb-4">Show All</p>
                         
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn " onClick={filterSelection('Git')}>
                    <div className="categories_blog">
                        <img alt=' ' src="" 
                        className="w-100" height="300"/>
                        <div className="blog-text">
                            <p>Git & GitHub</p>
                            <p className="h5 fw-bolder" style={{margin:`-15px 0px -4px;`}}>Blog main tittle</p>
                            <p>Sub Tittle</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onClick={filterSelection('Python')}>
                    <div className="categories_blog">
                        <img alt=' ' src="" 
                        className="w-100" height="300"/>
                        <div className="blog-text">
                            <p>Python</p>
                            <p className="h5 fw-bolder" style={{margin:`-15px 0px -4px;`}}>Blog main tittle</p>
                            <p>Sub Tittle</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onClick={filterSelection('R language')}>
                    <div className="categories_blog">
                        <img alt=' ' src="" 
                        className="w-100" height="300"/>
                        <div className="blog-text">
                            <p>R language</p>
                            <p className="h5 fw-bolder" style={{margin:`-15px 0px -4px;`}}>Blog main tittle</p>
                            <p>Sub Tittle</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 pt-4 btn" onClick={filterSelection('SQL')}>
                    <div className="categories_blog">
                        <img alt=' ' src="" 
                        className="w-100" height="300"/>
                        <div className="blog-text">
                            <p>SQL</p>
                            <p className="h5 fw-bolder" style={{margin:`-15px 0px -4px;`}}>Blog main tittle</p>
                            <p>Sub Tittle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!--Categories section end--> */}

    {/* <!--Post section--> */}

    <section className="post_wrapper">
        <div className="container">
            <h2 className="fst-italic">Post</h2>  
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-4 filterDiv Git">
                    <div className="post_blog">
                        <img alt=' ' src={imgs[0]} 
                        className="w-100 post_img" height="400"/>
                        <div className="post-author">
                            <img alt=' ' src="images/portfolio/bg-image.jpg" width="40" height="40"/>
                        </div>
                        <div className="post_categories px-3 py-4">
                            <a href="/#" className="text-decoration-none">Git & GitHub</a>
                        </div>
                        <p className="h4 fw-bold post_text">Share views and connect with an audience.</p>
                        <p className="">Blogs provide many writers and thought leaders with an outlet to share information and their views with a wide audience. Blogging is an effective way to raise awareness about a subject or product and to build an online community around it.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-4 filterDiv Python">
                    <div className="post_blog">
                        <img alt=' ' src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?crop=4:3" 
                        className="w-100 post_img" height="400"/>
                        <div className="post-author">
                            <img alt=' ' src="images/portfolio/bg-image.jpg" width="40" height="40"/>
                        </div>
                        <div className="post_categories px-3 py-4">
                            <a href="/#" className="text-decoration-none">Python</a>
                        </div>
                        <p className="h4 fw-bold post_text">Share views and connect with an audience.</p>
                        <p className="">Blogs provide many writers and thought leaders with an outlet to share information and their views with a wide audience. Blogging is an effective way to raise awareness about a subject or product and to build an online community around it.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-4 filterDiv R language">
                    <div className="post_blog">
                        <img alt=' ' src="https://miro.medium.com/max/990/0*l9-9V7yetcbz-YKC.jpg" 
                        className="w-100 post_img" height="400"/>
                        <div className="post-author">
                            <img alt=' ' src="images/portfolio/bg-image.jpg" width="40" height="40"/>
                        </div>
                        <div className="post_categories px-3 py-4">
                            <a href="/#" className="text-decoration-none">R language</a>
                        </div>
                        <p className="h4 fw-bold post_text">Share views and connect with an audience.</p>
                        <p className="">Blogs provide many writers and thought leaders with an outlet to share information and their views with a wide audience. Blogging is an effective way to raise awareness about a subject or product and to build an online community around it.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-4 filterDiv SQL">
                    <div className="post_blog">
                        <img alt=' ' src="https://blog.servermania.com/wp-content/uploads/2020/07/iStock-1188511715.jpg" 
                        className="w-100 post_img" height="400"/>
                        <div className="post-author">
                            <img alt=' ' src="images/portfolio/bg-image.jpg" width="40" height="40"/>
                        </div>
                        <div className="post_categories px-3 py-4">
                            <a href="/#" className="text-decoration-none">SQL</a>
                        </div>
                        <p className="h4 fw-bold post_text">Share views and connect with an audience.</p>
                        <p className="">Blogs provide many writers and thought leaders with an outlet to share information and their views with a wide audience. Blogging is an effective way to raise awareness about a subject or product and to build an online community around it.</p>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    {/* <!--Post section end--> */}
      </>
      
    );
  }
  
  export default Blog;
  
  