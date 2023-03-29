import React from 'react'
import gallery1 from '../img/gallery/26725919934_6f5b91b782_o.jpg'
import gallery2 from '../img/gallery/26726172533_41e17727f5_o.jpg'
import gallery3 from '../img/gallery/27332957515_40dbfc8de9_o.jpg'
import gallery4 from '../img/gallery/27448533583_abb9cca58f_o.jpg'
import gallery5 from '../img/gallery/27451516593_49647454f5_o.jpg'
import gallery6 from '../img/gallery/27467679974_9f728cb10b_o.jpg'




// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }
function Gallery(props) {
    return (
      <>
 <section className="gallery_wrapper">
    <div className="container pt-5">
        <h2 className="text-center">Gallery</h2>
        <div className="text-center">
            {/* <!-- <p className="">These pictures are for the awards: </p> --> */}
            <p className="">Best Undergraduate Research Presentation Award, May 2016
                Annual Statistical Society of Canada Student Conference </p>
            <p className="h5 text-light pb-3">“Research: Comparing Different Missing Data Methods.”</p>
            <span id="dots"></span>
            <span id="more" className="">
                <p className="h5">Team Leader, Won 1st Prize for the Case Study Competition May 2016
                Statistical Society of Canada Annual Conference, “What Predicts Sustainability of Canadian Charities?”</p>
                <p>● Used machine learning methods for feature selection and classNameification to predict which charities would succeed or go
                    bankrupt using the tax return data provided by the CRA of all 23,000 Canadian charities.</p>
                <p>● Used an innovative clustering method to group successful charities into different types which allowed deep and actionable
                    insights for charities to improve their operations.</p>
                <p>● As team leader presented our techniques and solution to over 20 people as well as 4 judges at the conference.</p>
            </span>
            <button className="main-btn rounded" onclick="myFunction()" id="myBtn">Read more</button>
        </div>
        <div className="row pt-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery1} height="250px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery2} height="250px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery3} height="250px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery4} height="250px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery5} height="250px"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-3 g-img">
                <img alt='' src={gallery6} height="250px"/>
            </div>      
        </div>
    </div>
  </section>

      </>
      
    );
  }
  
  export default Gallery;
  
  