const apiKey = "4c6bbe0b6731122ca418279a864b22a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km / h";
    document.querySelector(".weather-condition").innerHTML = data.weather[0].main

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloud.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sunny.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/haze.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})