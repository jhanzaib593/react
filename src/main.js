import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';

//  Header Scroll
// let nav = document.querySelector(".navbar");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// } 

//  nav hide 
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function (a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })


/*$('.button').click(function() {
    $('.label').html(function(i, val) { 
      return val*1+0.5
    });
});*/



//  js for blog categories
   ("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

   function w3AddClass(element, name) {
     var i, arr2; 
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
     }
   }

 function w3RemoveClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     while (arr1.indexOf(arr2[i]) > -1) {
       arr1.splice(arr1.indexOf(arr2[i]), 1);     
     }
   }
   element.className = arr1.join(" ");
 }

//  Add active class to the current button (highlight it)
 var btnContainer = document.getElementById("myBtnContainer");
 var btns = btnContainer.getElementsByClassName("btn");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function(){
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }
//  js for blog categories










