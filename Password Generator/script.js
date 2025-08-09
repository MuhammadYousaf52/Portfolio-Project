const generatedPassword = document.querySelector(".password-generated");

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = ["!", "@", "#", "$", "%", "&"];



let password = document.getElementById("Generate");
password.addEventListener("click", function getPassword() {

    let lc = document.getElementById("s-char").checked;
    let uc = document.getElementById("l-char").checked;
    let num = document.getElementById("number").checked;
    let sc = document.getElementById("sp-char").checked;
    let len = parseInt(document.getElementById("password-length").value);

    let passwordCharacter = []
    

    if(len<8 || len>16 ){
        generatedPassword.innerHTML = "Not valid range";
        return;
    }
    if(lc){
        passwordCharacter.push(...lowerCase)
    }
    if(uc){
        passwordCharacter.push(...upperCase)
    }
    if(num){
        passwordCharacter.push(...numbers)
    }
    if(sc){
        passwordCharacter.push(...specialCharacters)
    }

    if(passwordCharacter.length === 0){
        generatedPassword.innerHTML = "Please check atleast one box"
        return;
    }

let finalPassword = ""
    for (let index = 0; index < len; index++) {
        let randomindex = Math.floor(Math.random()* passwordCharacter.length);
        finalPassword += passwordCharacter[randomindex]   
    }
    generatedPassword.innerHTML = finalPassword;
});

let copyBtn = document.getElementById("Copy");
copyBtn.addEventListener("click", function(){
    
    let passwordText = generatedPassword.textContent;
    if(!passwordText || passwordText.includes("Valid") || passwordText.includes("check")){
        alert("Not Valid To Copy")
        return;
    }
    navigator.clipboard.writeText(passwordText)
    .then(()=>{
        generatedPassword.innerHTML = "Copied to Clipboard"
        let originalPassword = passwordText
        setTimeout(() => {
            generatedPassword.innerHTML = originalPassword
        }, 1500);
    })
    .catch(()=>{
        alert("Failed to copy password.");
    });
})
