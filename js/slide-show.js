//khai bao
var slide = document.getElementsByClassName("slide");
var dot = document.getElementsByClassName("dots")
var index = 0;
for (var i = 0; i < slide.length; i++) {
    if (slide[i].style.display = "block")
        slide[i].style.display = "none";
}
//load page
slide[index].style.display = "block";
move();
//autoplay
setInterval(next, 10000);
//ham thuc thi
function setup(index, tmp) {
    slide[index].style.display = "block";
    slide[tmp].style.display = "none";
    dot[index].className += " active";
    dot[tmp].className = dot[tmp].className.replace(" active", "");
    var elem = document.getElementById("time-bar");
}
function next() {
    var tmp = index;
    index++;
    if (index == slide.length)
        index = 0;
    setup(index, tmp);
    move();

}

function pre() {
    var tmp = index;
    index--;
    if (index < 0)
        index = slide.length - 1;
    setup(index, tmp);
    move();
}
function jumpSlide(n) {
    if (n=index) {
        var tmp=n+1;
        setup(n,tmp);
    }
    else {
        var tmp = index;
        index = n;
        setup(index, tmp);
    }
    move();
}
function fa(a)
{
  if(a.addEventListener("click",function(){return 1})==1)
    return 1;
  else 
    return 0;
}
function move() {
    var elem = document.getElementById("time-bar");   
    var width = 1;
    var id = setInterval(frame, 100);
    var next=document.getElementsByClassName("next");
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      }
      // else if(fa(next)==1)
      // {
      //   width.style.width="100%";
      // }
      else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("team-slides");
  var dots = document.getElementsByClassName("dots-2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}