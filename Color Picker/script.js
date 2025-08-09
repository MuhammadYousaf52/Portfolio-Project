const previewBox = document.querySelector(".preview-box");
const inputColor = document.querySelector("#color");
const HEX = document.querySelector("#HEX-value");
const RGB = document.querySelector("#RGB-value");
const CopyHEX = document.querySelector(".CHEX");
const CopyRGB = document.querySelector(".CRGB");
function hexToRGB(hex) {
    hex = hex.replace("#", "");
    if (hex.length !== 6) return "";
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
function rgbToHex(rgb) {
    // Extract numbers from rgb string using regex
    const result = rgb.match(/\d+/g);
    if (!result || result.length < 3) return "";

    let r = parseInt(result[0]).toString(16).padStart(2, "0");
    let g = parseInt(result[1]).toString(16).padStart(2, "0");
    let b = parseInt(result[2]).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;
}

previewBox.style.backgroundColor = inputColor.value

inputColor.addEventListener("input", () => {
    previewBox.style.backgroundColor = inputColor.value
    HEX.value = inputColor.value
    RGB.value = hexToRGB(inputColor.value)
})
HEX.addEventListener("input", () => {
    previewBox.style.backgroundColor = HEX.value
    RGB.value = hexToRGB(HEX.value);
    inputColor.value = HEX.value
})

RGB.addEventListener("input", () => {
    previewBox.style.backgroundColor = RGB.value
    HEX.value = rgbToHex(RGB.value);
    let hex = rgbToHex(RGB.value)
    if(hex) {
        HEX.value = hex
        inputColor.value = hex;
    }

})

CopyHEX.addEventListener("click", () => {
    if (HEX.value.trim() !== "") {
        navigator.clipboard.writeText(HEX.value);
        let original = HEX.value;
        HEX.value = "Copied!";
        setTimeout(() => HEX.value = original, 1500);
    }
});

// ✅ Copy RGB
CopyRGB.addEventListener("click", () => {
    if (RGB.value.trim() !== "") {
        navigator.clipboard.writeText(RGB.value);
        let original = RGB.value;
        RGB.value = "Copied!";
        setTimeout(() => RGB.value = original, 1500);
    }
});