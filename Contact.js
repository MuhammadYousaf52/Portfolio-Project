let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Message = document.getElementById("Message");
let nameError = document.getElementById("error");
let messageError = document.getElementById("error-message");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (Name.value.trim().length < 4 || Name.value.trim().length > 20) {
        nameError.style.display = "block"
        return;
    }
    else if (Message.value.trim().length < 20) {
        messageError.style.display = "block"
    }
    else {
        nameError.style.display = "none"
        messageError.style.display = "none"
        form.submit();
    }
})

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".content ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle('show');
})