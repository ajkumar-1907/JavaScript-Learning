const button = document.getElementById('button');
const result = document.getElementById("result");

const colorPicker = async () => {
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();
    result.value = sRGBHex;
    result.style.backgroundColor = sRGBHex;
}

const getContrastingColor = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
};

button.addEventListener("click", colorPicker);