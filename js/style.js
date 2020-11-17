var myNav = document.getElementById('mynav'),
    mybutton = document.getElementById("myBtn"),
    modeBtn = document.querySelector(".colors");
    

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 )
    {
        myNav.classList.add("nav-colored");
        modeBtn.style.display = "none";
         myNav.classList.remove("nav-transparent");
        modeBtn.style.display = "none";

    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        modeBtn.style.display = "block";
    }
    
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      mybutton.style.display = "block";
    } 
    
    else {
      mybutton.style.display = "none";
    }
};


function topFunction() {
  document.documentElement.scrollTop = 0;
}





/* MENU */
/* OPEN */
var menuOpenBtn = document.getElementById("fa-bars"),
    menu = document.getElementById("menu");
        menuOpenBtn.onclick = function(){
            "use strict";
            menu.classList.add("expanded")
        }
/* CLOSE */
var menuCloseBtn = document.getElementById("fa-times");
        menuCloseBtn.onclick = function(){
            "use strict";
            menu.classList.remove("expanded")
        };




var settings = document.querySelector(".settings"),
    blueBtn = document.querySelector(".blue"),
    redBtn = document.querySelector(".red");
    modeBtn.onclick = function(){
        "use strict";
        settings.classList.toggle("expanded");
    }

blueBtn.onclick = function(){
    "use strict";
    document.body.classList.remove("red-mod")
    document.body.classList.add("blue-mod")
}

redBtn.onclick = function(){
    "use strict";
    document.body.classList.remove("blue-mod")
    document.body.classList.add("red-mod")
}