var metaThemeColor = document.querySelector("meta[name=theme-color]");

$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');},1000);
        metaThemeColor.setAttribute("content","#004A6B");
    });