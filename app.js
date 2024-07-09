 const apikey = "d3c487371c4e7cbbabd09b471e8817ee";
const apiurl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const weatherIcons = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcons.src = "snow.png";
    }
    else if(data.weather[0].main == "clear") {
        weatherIcons.src = "clear.png";
    }
    else if(data.weather[0].main == "rain") {
        weatherIcons.src = "rain.png";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value); 
})