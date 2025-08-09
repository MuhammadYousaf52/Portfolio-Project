let view = document.getElementById("view");
let contact = document.getElementById("contact");

view.addEventListener("click",()=>{
    window.location.href = "Projects.html"
})
contact.addEventListener("click",()=>{
    window.location.href = "Contact.html"
})

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".content ul");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle('show');
})