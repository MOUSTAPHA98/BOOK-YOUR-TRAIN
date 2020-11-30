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
    modeBtn = document.querySelector(".themes");




window.onscroll = function () { 
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
            menu.classList.add("expanded")
        }

/* CLOSE */
var menuCloseBtn = document.getElementById("fa-times");
        menuCloseBtn.onclick = function(){
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

var settings = document.querySelector(".theme-settings"),
    theme01 = document.querySelector(".theme-01"),
    theme02 = document.querySelector(".theme-02"),
    theme03 = document.querySelector(".theme-03"),
    theme04 = document.querySelector(".theme-04"),
    themeBtn = document.querySelectorAll(".theme-btn");

    
modeBtn.onclick = function(){
    settings.classList.toggle("expanded");
}

themeBtn.forEach(element => {
    element.onclick = changeThemeColor;
});

// theme01.onclick = function(){
//     metaThemeColor.setAttribute("content","#004A6B");

//     mobBImgLg.style.display = "block";
//     mobRImgLg.style.display = "none";
//     mobGreenImgLg.style.display = "none";
//     mobGrayImgLg.style.display = "none";
//     mobBImgS.style.display = "block";
//     mobRImgS.style.display = "none";
//     mobGreenImgS.style.display = "none";
//     mobGrayImgS.style.display = "none";

// }

// theme02.onclick = function(){
//     metaThemeColor.setAttribute("content","#830209");

//     mobBImgLg.style.display = "none";
//     mobRImgLg.style.display = "block";
//     mobGreenImgLg.style.display = "none";
//     mobGrayImgLg.style.display = "none";
//     mobBImgS.style.display = "none";
//     mobRImgS.style.display = "block";
//     mobGreenImgS.style.display = "none";
//     mobGrayImgS.style.display = "none";
   
// }

// theme03.onclick = function(){
//     metaThemeColor.setAttribute("content","#272F19");

//     mobBImgLg.style.display = "none";
//     mobRImgLg.style.display = "none";
//     mobGreenImgLg.style.display = "block";
//     mobGrayImgLg.style.display = "none";
//     mobBImgS.style.display = "none";
//     mobRImgS.style.display = "none";
//     mobGreenImgS.style.display = "block";
//     mobGrayImgS.style.display = "none";

// }

// theme04.onclick = function(){
//     metaThemeColor.setAttribute("content","#151821");

//     mobBImgLg.style.display = "none";
//     mobRImgLg.style.display = "none";
//     mobGreenImgLg.style.display = "none";
//     mobGrayImgLg.style.display = "block";
//     mobBImgS.style.display = "none";
//     mobRImgS.style.display = "none";
//     mobGreenImgS.style.display = "none";
//     mobGrayImgS.style.display = "block";

// }



//  ===========   FUNCTIONS   =============  //

function changeThemeColor() {

    metaThemeColor.setAttribute("content", this.getAttribute("data-theme"));
    document.body.classList.remove("theme01-mod", "theme02-mod", "theme03-mod", "theme04-mod");
    document.body.classList.add(this.getAttribute("data-color"));
    pageMod = localStorage.setItem("pageColor", this.getAttribute("data-color"));
    pageHeadTheme = localStorage.setItem("pageTheme", metaThemeColor.getAttribute("content"));

}