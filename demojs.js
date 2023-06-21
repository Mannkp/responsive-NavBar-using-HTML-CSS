const displayLinks = document.querySelector(".bars"); 
const navLinks = document.querySelector(".links-container");

displayLinks.addEventListener('click' , ()=>{
    // if(displayLinks.classList.contains(''))
    navLinks.classList.toggle('show-links');
})