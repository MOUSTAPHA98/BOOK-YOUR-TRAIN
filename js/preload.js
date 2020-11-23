// var metaThemeColor = document.querySelector("meta[name=theme-color]");

$(document).ready(function(){
    "use strict";
    metaThemeColor.setAttribute("content", localStorage.getItem("pageTheme"));

});

$(window).on('load', function(){
    "use strict";
    $("body").addClass("loaded");
});