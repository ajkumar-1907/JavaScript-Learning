let randomCode = ""

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;
};




const button = document.getElementById('btn');
button.addEventListener("click", getColor);

getColor();



const colorCopy = () => {
    navigator.clipboard.writeText(randomCode);
    alert(randomCode + " has been copied to your clipboard.");
}

const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", colorCopy);