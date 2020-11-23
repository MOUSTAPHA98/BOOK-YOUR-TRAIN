document.body.classList.add(localStorage.getItem("pageColor"));
metaThemeColor.setAttribute("content", (localStorage.getItem("pageTheme")));



var myNav = document.getElementById('mynav'),
    mybutton = document.getElementById("myBtn"),
    metaThemeColor = document.querySelector("meta[name=theme-color]"),
    mobBImgLg  = document.querySelector(".mob-b-img-lg"),
    mobRImgLg  = document.querySelector(".mob-r-img-lg"),
    mobGreenImgLg  = document.querySelector(".mob-green-img-lg"),
    mobGrayImgLg  = document.querySelector(".mob-gray-img-lg"),
    mobBImgS  = document.querySelector(".mob-b-img-s"),
    mobRImgS  = document.querySelector(".mob-r-img-s"),
    mobGreenImgS  = document.querySelector(".mob-green-img-s"),
    mobGrayImgS  = document.querySelector(".mob-gray-img-s"),
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





/*   =====   MENU FOR SMALL SCREEN   =====   */

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
        
/*
*
*
*
*
*
*/


/*   =====   CHANGE COLORS   =====   */

var settings = document.querySelector(".settings"),
    blueBtn = document.querySelector(".blue"),
    redBtn = document.querySelector(".red"),
    greenBtn = document.querySelector(".green"),
    grayBtn = document.querySelector(".gray");

    
modeBtn.onclick = function(){
    "use strict";
    settings.classList.toggle("expanded");
}




blueBtn.onclick = function(){
    "use strict";

    mobBImgLg.style.display = "block";
    mobRImgLg.style.display = "none";
    mobGreenImgLg.style.display = "none";
    mobGrayImgLg.style.display = "none";
    mobBImgS.style.display = "block";
    mobRImgS.style.display = "none";
    mobGreenImgS.style.display = "none";
    mobGrayImgS.style.display = "none";


    document.body.className = "loaded";
    document.body.classList.add(this.getAttribute("data-color"));
    metaThemeColor.setAttribute("content","#004A6B");
    var pageMod = localStorage.setItem("pageColor", this.getAttribute("data-color")),
        pageHeadTheme = localStorage.setItem("pageTheme", metaThemeColor.getAttribute("content"));
        console.log(metaThemeColor.getAttribute("content"));
        console.log(localStorage.getItem("pageTheme"));

}

redBtn.onclick = function(){
    "use strict";

    mobBImgLg.style.display = "none";
    mobRImgLg.style.display = "block";
    mobGreenImgLg.style.display = "none";
    mobGrayImgLg.style.display = "none";
    mobBImgS.style.display = "none";
    mobRImgS.style.display = "block";
    mobGreenImgS.style.display = "none";
    mobGrayImgS.style.display = "none";

    document.body.className = "loaded";
    document.body.classList.add(this.getAttribute("data-color"));
    metaThemeColor.setAttribute("content","#830209");
    var pageMod = localStorage.setItem("pageColor", this.getAttribute("data-color")),
        pageHeadTheme = localStorage.setItem("pageTheme", metaThemeColor.getAttribute("content"));
        console.log(metaThemeColor.getAttribute("content"));
        console.log(localStorage.getItem("pageTheme"));





}

greenBtn.onclick = function(){
    "use strict";
    metaThemeColor.setAttribute("content","#272F19");

    mobBImgLg.style.display = "none";
    mobRImgLg.style.display = "none";
    mobGreenImgLg.style.display = "block";
    mobGrayImgLg.style.display = "none";
    mobBImgS.style.display = "none";
    mobRImgS.style.display = "none";
    mobGreenImgS.style.display = "block";
    mobGrayImgS.style.display = "none";

    document.body.className = "loaded";
    document.body.classList.add(this.getAttribute("data-color"));
    var pageMod = localStorage.setItem("pageColor", this.getAttribute("data-color")),
        pageTheme = localStorage.setItem("pageTheme", metaThemeColor.getAttribute("content"));
        console.log(metaThemeColor.getAttribute("content"));
        console.log(localStorage.getItem("pageTheme"));





}

grayBtn.onclick = function(){
    "use strict";
    metaThemeColor.setAttribute("content","#151821");

    mobBImgLg.style.display = "none";
    mobRImgLg.style.display = "none";
    mobGreenImgLg.style.display = "none";
    mobGrayImgLg.style.display = "block";
    mobBImgS.style.display = "none";
    mobRImgS.style.display = "none";
    mobGreenImgS.style.display = "none";
    mobGrayImgS.style.display = "block";

    document.body.className = "loaded";
    document.body.classList.add(this.getAttribute("data-color"));
    var pageMod = localStorage.setItem("pageColor", this.getAttribute("data-color")),
        pageTheme = localStorage.setItem("pageTheme", metaThemeColor.getAttribute("content"));
        console.log(metaThemeColor.getAttribute("content"));
        console.log(localStorage.getItem("pageTheme"));




}





function getPresentColor() {
    
}

function changeThemeColor() {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", getPresentColor());
}

changeThemeColor();