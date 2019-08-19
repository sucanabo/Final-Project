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
    // bar.className.replace("time-run");
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
function move() {
    var elem = document.getElementById("time-bar");   
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
