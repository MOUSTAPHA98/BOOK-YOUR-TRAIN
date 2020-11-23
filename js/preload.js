$(document).ready(function(){
    "use strict";
    metaThemeColor.setAttribute("content", localStorage.getItem("pageTheme"));
});

$(window).on('load', function(){
    "use strict";
    $("body").addClass("loaded");
    metaThemeColor.setAttribute("content", localStorage.getItem("pageTheme"));

});