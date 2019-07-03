//khai bao
var slide = document.getElementsByClassName("slide");
var dot = document.getElementsByClassName("dots")
var bar = document.getElementsByClassName("time-bar");
var index = 0;
for (var i = 0; i < slide.length; i++) {
    if (slide[i].style.display = "block")
        slide[i].style.display = "none";
}
//load page
slide[index].style.display = "block";
//autoplay
setInterval(next, 10000);
//ham thuc thi
function setup(index, tmp) {
    slide[index].style.display = "block";
    slide[tmp].style.display = "none";
    dot[index].className += " active";
    dot[tmp].className = dot[tmp].className.replace(" active", "");
}
function next() {
    var tmp = index;
    index++;
    if (index == slide.length)
        index = 0;
    setup(index, tmp);
}
function pre() {
    var tmp = index;
    index--;
    if (index < 0)
        index = slide.length - 1;
    setup(index, tmp);
}
function jumpSlide(n) {
    var tmp = index;
    index = n;
    setup(index, tmp);
}
