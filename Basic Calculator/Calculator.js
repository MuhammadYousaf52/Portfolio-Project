const buttons = document.querySelectorAll(".btn");
const displayText = document.querySelector(".display-text");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
buttons.forEach(buttons => {
    buttons.addEventListener("click", function () {
         const value = this.textContent;
const lastChar = displayText.textContent.slice(-1);
        // Count parentheses
        const openCount = (displayText.textContent.match(/\(/g) || []).length;
        const closeCount = (displayText.textContent.match(/\)/g) || []).length;
        // Prevent adding extra ')'
        if (value === ")" && closeCount >= openCount) {
            return; // Do nothing instead of appending
        }
        if(displayText.textContent === "" && /[+\*/%]/.test(value)) return;
        if (/[+\-*/%(]/.test(lastChar) && /[+\-*/%)]/.test(value)) return;
        displayText.textContent += value;
    });
})
equal.addEventListener("click", () => {
    try {
        // Sanitize leading zeros (e.g., 0005 → 5)
        let expression = displayText.textContent.replace(/\b0+(\d)/g, '$1');
        displayText.textContent = eval(expression);
    } catch {
        displayText.textContent = "Error";
    }
})
clear.addEventListener("click", () => {
    displayText.textContent = "";
})
