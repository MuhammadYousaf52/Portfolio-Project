
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".content ul");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle('show');
})