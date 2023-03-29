import React from 'react'
import '../components/slider.css';
import poem1 from '../img/poem/WhatsApp Image 2023-01-14 at 12.21.35 PM.jpeg'
import p1 from '../img/poem/poem 1.png'
import p2 from '../img/poem/poem 2.png'





const $ = window.$;
$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})

  $(document).ready(function()
{

   
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:6000,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:1},
                    575:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1199:{items:6}
                }
            });

            if($('.bbb_viewed_prev').length)
            {
                var prev = $('.bbb_viewed_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_viewed_next').length)
            {
                var next = $('.bbb_viewed_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });

function Poem(props) {
    return (
      <>

<section className="search pt-5">
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="search-text px-2">
              <p className="">
                <span><a className="text-light" href="/#">Home</a></span> /
                <span><a className="text-light" href="/#">Poem</a></span>
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <form className="search-left px-2">
              <input type="search" placeholder="search" className="w-75 py-2 px-3 rounded"/>
            </form>
          </div>
        </div>
      </div>
    </section>  

    <section className="poem-card">
      <div className="container py-5 px-4 rounded">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 poem-card-img">
            <img alt='' src={poem1} className="rounded w-100"/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 poem-card-text">
            <h1>Poetry</h1>
            <p className="p-4">Find your voice and share your words with the world. Write about what matters to you - be it politics, love or social issues - in a way that's never been done before. Express yourself in a way that only poetry can!</p>
          </div>
        </div>
        <div className="content pt-5">   
          <h2 className="text-dark text-center">Latest Poem</h2>
            <div className="site-section bg-left-half mb-5">
              <div className="container owl-2-style pt-5">
                <div className="owl-carousel owl-2">
                  <div className="media-29101">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <a href="/#"><img src={p1} alt='' className="rounded img-fluid"/></a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2">
                        <h3 className="mb-1"><a href="/#" className="text-dark">The Screaming Earth</a></h3>
                        <p style={{fontSize: `12px;`}}>Faizan Khalid Mohsin</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-29101">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <a href="/#"><img src={p1} alt='' className="rounded img-fluid"/></a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2">
                        <h3 className="mb-1"><a href="/#" className="text-dark">What You Are Seeking</a></h3>
                        <p style={{fontSize: `12px;`}}>Faizan Khalid Mohsin</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-29101">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <a href="/#"><img src={p1} alt='' className="rounded img-fluid"/></a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2">
                        <h3 className="mb-1"><a href="/#" className="text-dark">The Screaming Earth</a></h3>
                        <p style={{fontSize: `12px;`}}>Faizan Khalid Mohsin</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-29101">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <a href="/#"><img src={p1} alt='' className="rounded img-fluid"/></a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2">
                        <h3 className="mb-1"><a href="/#" className="text-dark">The Screaming Earth</a></h3>
                        <p style={{fontSize: `12px;`}}>Faizan Khalid Mohsin</p>
                      </div>
                    </div>
                  </div>
                  <div className="media-29101">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <a href="/#"><img src={p2} alt='' className="rounded img-fluid"/></a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-2">
                        <h3 className="mb-1"><a href="/#" className="text-dark">The Screaming Earth</a></h3>
                        <p style={{fontSize: `12px;`}}>Faizan Khalid Mohsin</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
        
              </div>
            </div>
        </div>
        <div className="card-poem pt-3">
          <h2 className="text-dark text-center"><span>P</span>oem</h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="row pt-5">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-3" data-bs-toggle="modal" data-bs-target="#card-poem-1">
                  <div className="card-poem-1 h-100 rounded pb-2" >
                    <img alt='' src={p1} className="w-100 rounded-top"/>
                    <h3 className="text-dark px-4 pt-3">The Screaming Earth</h3>
                    <p className="px-4">Rub my face with dirt</p><br/>
                    <p className="px-4">Author: Faizan Khalid Mohsin</p><br/>                  
                    <a href='/#' className="px-4 pt-5 modal-btn-poem" >Read</a>             

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="card-poem-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">The Screaming Earth</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-4">
                                <img alt='' src={p1} className="w-100 rounded-top pb-3"/>
                                <p>Rub my face with dirt,</p>
                                <p> Such is the cleansing I am worth,</p>
                                <p> Deface my face with black and white sand,</p>                         
                                <p>  And then rub it upon my right hand,</p>                               
                                <p>For when I bow down in humble prostration,</p>                               
                                <p> The earth screams, you defile me with your prostrations,</p>                               
                                <p>   You perpetually forget your place,</p>
                                <p> And in brief, moments when you remember, you simply prostate</p>
                                <p className="poem-cont-text fw-bold">Author: Faizan Khalid Mohsin - Poem inspired by the poetry of Hazrat Sheikh 
                                    Fakhr-al-Din Iraqi RA & Syed Amjid HaiderAbadi Deccani RA<br/>
                                    Composed: April 19, 2021<br/>
                                    Image created by Faizan Khalid Mohsin using Blender</p>
                                    
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Modal --> */}
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-3">
                  <div className="card-poem-1 h-100 rounded pb-2">
                    <img alt='' src={p2} className="w-100 rounded-top"/>
                    <h3 className="text-dark px-4 pt-3">What You Are Seeking</h3>
                    <p className="px-4">| have come from the beyond</p>
                    <p className="px-4">Author: Faizan Khalid Mohsin</p><br/>                 
                    <a href='/#' className="px-4 modal-btn-poem" data-bs-toggle="modal" data-bs-target="#card-poem-2">Read</a>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="card-poem-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">What You Are Seeking</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-4">
                                <img alt='' src={p2} className="w-100 rounded-top"/>
                              <p>| have come from the beyond,</p>
                              <p> My search has been life long,</p>
                              <p>  My steps determined, seeking,</p>
                              <p> Filled with pain of searching,</p>
                              <p> You think | will let go, when | simply know,</p>
                              <p> What | am, and what | wish to be.</p>
                              <p> When | know,</p>
                              <p> What | am seeking, is also seeking me.</p>
                                  
                              <p className="poem-cont-text fw-bold">Author: Faizan Khalid Mohsin<br/>
                                  Composed on: Friday, April 9, 2021<br/>                                  
                                  Image Created  by Faizan Khalid Mohsin using Blender</p>                                  
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>    
                      {/* <!-- Modal --> */}
                  </div>
                </div>                
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-3">
                  <div className="card-poem-1 h-100 rounded pb-2">
                    <img alt='' src={p1} className="w-100 rounded-top"/>
                    <h3 className="text-dark px-4 pt-3">Hidden in Silence</h3>
                    <p className="px-4">Many secrets are hidden within silence.</p>
                    <p className="px-4">Author: Faizan Khalid Mohsin</p> 
                    <a href='/#' className="px-4 modal-btn-poem" data-bs-toggle="modal" data-bs-target="#card-poem-3">Read</a>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="card-poem-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">The Screaming Earth</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-4">
                              <img alt='' src={p1} className="w-100 rounded-top pb-3"/>
                              <p>Many secrets are hidden within silence.</p>
                              <p> We only need to become quite to find them.</p>                                    
                              <p className="poem-cont-text fw-bold">Author: Faizan Khalid Mohsin<br/>
                                Composed on: Thursday, April 1, 2021
                                  
                              </p>                                    
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Modal --> */}

                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-3">
                  <div className="card-poem-1 h-100 rounded pb-2">
                    <img alt='' src={p1} className="w-100 rounded-top"/>
                    <h3 className="text-dark px-4 pt-3">What You Are Seeking</h3>
                    <p className="px-4">| have come from the beyond,</p>
                    <p className="px-4">Author: Faizan Khalid Mohsin</p>                   
                    <a href='/#' className="px-4 modal-btn-poem" data-bs-toggle="modal" data-bs-target="#card-poem-2">Read</a>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="card-poem-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">What You Are Seeking</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body px-4">
                              <img alt='' src={p1} className="w-100 rounded-top pb-3"/>
                              <p>| have come from the beyond,</p>
                              <p> My search has been life long,</p>
                              <p>  My steps determined, seeking,</p>
                              <p> Filled with pain of searching,</p>
                              <p> You think | will let go, when | simply know,</p>
                              <p> What | am, and what | wish to be.</p>
                              <p> When | know,</p>
                              <p> What | am seeking, is also seeking me.</p>
                                  
                              <p className="poem-cont-text fw-bold">Author: Faizan Khalid Mohsin<br/>

                                  Composed on: Friday, April 9, 2021<br/>
                                  
                                  Image Created  by Faizan Khalid Mohsin using Blender</p>
                                  
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>    
                      {/* <!-- Modal --> */}

                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 pt-5">
              <div className="catalogue-poem position-sticky" style={{top: `6em;`}}>
                <h3 className="text-dark">Popular Tags</h3>
                <div className="tag-poem pt-4 px-3">
                  <a href="/#">My story</a>
                  <a href="/#">Tree</a>
                  <a href="/#">Nature</a>
                  <a href="/#">Earth</a>
                  <a href="/#">Love</a>
                  <a href="/#">Moon</a>
                </div>
                <h3 className="text-dark pt-5">Catalogue</h3>
                <div className="tag-poem1 pt-3 px-3">
                  <a href="/#">A</a>
                  <a href="/#">B</a>
                  <a href="/#">C</a>
                  <a href="/#">D</a>
                  <a href="/#">E</a>
                  <a href="/#">F</a>
                  <a href="/#">G</a>
                  <a href="/#">H</a>
                  <a href="/#">I</a>
                  <a href="/#">j</a>
                  <a href="/#">k</a>
                  <a href="/#">l</a>
                  <a href="/#">m</a>
                  <a href="/#">n</a>
                  <a href="/#">o</a>
                  <a href="/#">p</a>
                  <a href="/#">q</a>
                  <a href="/#">r</a>
                  <a href="/#">s</a>
                  <a href="/#">t</a>
                  <a href="/#">U</a>
                  <a href="/#">v</a>
                  <a href="/#">w</a>
                  <a href="/#">x</a>
                  <a href="/#">y</a>
                  <a href="/#">z</a>
                </div>
                <div className="poem-like pt-5">
                  <iframe title='myFrame' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
                   width="340" height="130" style={{border:`none`, overflow:`hidden`}}  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div> 
              </div>
              
              </div>
            </div>

          </div>
              

        </div>
    </section>
      </>
      
    );
  }
  
  export default Poem;
  
  