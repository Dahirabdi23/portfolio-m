const about = document.querySelector('#about');
const aboutme = document.querySelector('.aboutme');
const project = document.querySelector('#project')
const proj = document.querySelector('.project')
const contact = document.querySelector('#contact')
const info = document.querySelector('.contact')
const nav = document.querySelector('.nav')
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
window.addEventListener('scroll', function(){
    const offset = window.pageYoffset;
    if (offset > 75 ) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll');
    }
})