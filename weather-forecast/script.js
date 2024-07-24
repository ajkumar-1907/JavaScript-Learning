const API_KEY = '842c3859f777a149a2266fd70abf9b44'; 
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        weather.innerHTML = `<h2>${error.message}</h2>`;
    }
};

const showWeather = (data) => {
    if (data.code === "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        </div>
        <div>
            <h2>${Math.floor(data.main.temp)} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
        <div class="other-info">
            <div class="wind-box">
                <i class="fa-solid fa-wind"></i>
                Wind: ${data.wind.speed} m/s
            </div>
            <div class="pressure-box">
                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                Pressure: ${data.main.pressure} hPa
            </div>
            <div class="uv-box">
                <i class="fa-solid fa-sun"></i>
                Humidity: ${data.main.humidity}%
            </div>
            <div class="visibility-box">
                <i class="fa-solid fa-eye"></i>
                Visibility: ${data.visibility / 1000} km
            </div>
        </div>
    `;
};

form.addEventListener("submit", function(event) {
    getWeather(search.value);
    event.preventDefault();
});
