//scroll active
window.onscroll = function () { scrollPage() };
function active(a, b) {
    if (b == 1)
        a.className += " menu-active";
    if (b == 0)
        a.className = "";
}
function scrollPage() {
    var screen = document.documentElement.scrollTop;
    var sBody = document.body.scrollTop;
    var sElement = document.documentElement.scrollTop;
    var backTop = document.getElementById("back-top");
    var home = document.getElementById("t-home");
    var menu = document.getElementById("t-menu");
    var blog = document.getElementById("t-blog");
    var events = document.getElementById("t-events");
    var team = document.getElementById("t-team");
    var contact = document.getElementById("t-contact");

    //console.log(screen);

    if (sElement > 950 || sBody > 950)
        backTop.style.display = "block";
    else
        backTop.style.display = "none";

    if (sElement > 0 && sElement < 1700 || sBody > 0 && sBody < 1700)
        active(home, 1);
    else active(home, 0);

    if (sElement > 1700 && sElement < 5700 || sBody > 1700 && sBody < 5700)
        active(menu, 1);
    else active(menu, 0);

    if (sElement > 5700 && sElement < 7700 || sBody > 5700 && sBody < 7700)
        active(blog, 1);
    else active(blog, 0);

    if (sElement > 7700 && sElement < 8900 || sBody > 7700 && sBody < 8900)
        active(events, 1);
    else active(events, 0);

    if (sElement > 8900 && sElement < 10400 || sBody > 8900 && sBody < 10400)
        active(team, 1);
    else active(team, 0);
    if (sElement > 10400 || sBody > 10400)
        active(contact, 1);
    else active(contact, 0);
}
function shownav() {
    var nav = document.getElementById("togglenav");
    if (nav.className === "nav2")
        nav.className += " nav-reponsive";
    else
        nav.className = "nav2";
}
//Search
function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("m-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//Over Play
//   function overlay_on()
//   {
//       var elm=this.
//     document.getElementsByClassName("overlay").style.display = "block";
//   }
//   function overlay_off()
//   {
//     document.getElementsByClassName("overlay").style.display = "none";
//   }
var ovon = document.getElementsByClassName("overlay-on");
var i;

for (i = 0; i < ovon.length; i++) {
    ovon[i].addEventListener("click", function () {
        var overlay = this.nextElementSibling;
        overlay.style.display = "block";
        overlay.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    });
}
//zoom
// var oimg = document.getElementsByClassName("overlay-img")

// for (i = 0; i < oimg.length; i++) {
//     var p = this.parentNode;
//     var c = this.childNodes;
//     c[0].addEventListener("click",function()
//     {
//         if(p.style.height=="67%"&&p.style.width=="33%")
//         {
//             p.style.height="89%";
//             p.style.width="53%";
//         }
//         else
//         {
//             p.style.height="67%";
//             p.style.width="33%";
//         }
//     })
// }

// function showitem() {
//     var acc = document.getElementsByClassName("m-item");
//     var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// }
// function validDateForm() {
//     var name = document.forms["contactform"]["name"].value;
//     var email = document.forms["contactform"]["name"].value;

//     if (name == "") {
//         arlert("Please enter your name");
//         return false;
//         name.focus;
//     }
//     else if (name.length <= 3) {
//         arlert("Your name too short");
//         return false
//         name.focus;
//     }
//     else return true;

//     var email = document.getElementsByName('email');
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (!filter.test(email.value)) {
//         alert('Please enter a valid email address.\nExample@gmail.com');
//         email.focus;
//         return false;
//     }
//     else {
//         return true;
//     }