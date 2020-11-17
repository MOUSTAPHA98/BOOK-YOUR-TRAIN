var myNav = document.getElementById('mynav'),
    mybutton = document.getElementById("myBtn");

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 )
    {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
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




var modeBtn = document.querySelector(".colors"),
    settings = document.querySelector(".settings"),
    darkBtn = document.querySelector(".dark"),
    lightBtn = document.querySelector(".light");
    modeBtn.onclick = function(){
        "use strict";
        settings.classList.toggle("expanded");
    }

darkBtn.onclick = function(){
    "use strict";
    document.body.classList.remove("light-mod")
    document.body.classList.add("dark-mod")
}

lightBtn.onclick = function(){
    "use strict";
    document.body.classList.remove("dark-mod")
    document.body.classList.add("light-mod")
}