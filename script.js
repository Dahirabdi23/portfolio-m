var about = document.querySelector('#about');
var aboutme = document.querySelector('.aboutme');
var project = document.querySelector('#project')
var proj = document.querySelector('.project')
var contact = document.querySelector('#contact')
var info = document.querySelector('.contact')
about.addEventListener("click", function(){
    aboutme.style.display = "block";
})
project.addEventListener("click", function(){
    proj.style.display = "block";
    //aboutme.style.visibility = "hidden";
    //info.style.visibility = "hidden";
    
})
contact.addEventListener("click", function(){
    info.style.display = "block";
    //aboutme.style.visibility = "hidden";
    //proj.style.visibility = "hidden";
})