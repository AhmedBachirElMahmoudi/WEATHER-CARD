const apiKey = "0ff478ad7be2d2170a935b4f677732d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkweather(city) {
    if (!city.trim()) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";

        const weatherType = data.weather[0].main;
        const weatherIcon = {
            Clouds: "images/clouds.png",
            Rain: "images/rain.png",
            Drizzle: "images/drizzle.png",
            Mist: "images/mist.png",
            Snow: "images/snow.png",
            Clear: "images/clear.png"
        };

        document.querySelector(".weather-icon").src = weatherIcon[weatherType] || "images/default.png";
        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        alert("Error: " + error.message);
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkweather(city);
});


console.log(7 - "7");
