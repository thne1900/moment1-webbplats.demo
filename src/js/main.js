//Javascript function that enables the hamburger menu to be activated at the press of a button.
"use strict";
document.getElementById("menu-hamburger").addEventListener("click",function(){
    const links=document.getElementById("links");

    links.classList.toggle("active");

});