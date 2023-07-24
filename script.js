var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick = function(){

    //to change the width of the sidebar on click

    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}