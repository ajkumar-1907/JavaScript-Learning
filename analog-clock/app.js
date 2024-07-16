let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mh = day.getMinutes() * 6;
    let sh = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + (mh/12)}deg)`;
    min.style.transform = `rotateZ(${mh}deg)`;
    sec.style.transform = `rotateZ(${sh}deg)`;
})
