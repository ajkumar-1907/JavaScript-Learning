let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qr-img");
let inputBox = document.getElementById("input-box");

const generateQR = () => {
    if(inputBox.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    

    imgBox.classList.add("show-img");
    }
}