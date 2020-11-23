$(window).on('load', function(){
    "use strict";
    $("body").addClass("loaded");
    document.body.classList.add(localStorage.getItem("pageColor"));
    metaThemeColor.setAttribute("content", localStorage.getItem("pageTheme"));
});