const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const wheatherimage = document.querySelector(".wheather-img");
const temperature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const wheather_body = document.querySelector(".wheather-body");

async function checkwheather(city) {
    const api_key = "3685af9fec18175cdba85117f84693bd"
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const responce = await fetch(`${Url}`);
    const data = await responce.json();
    console.log("Loading data:", data);

    if(data.cod === `404`){
        location_not_found.style.display = "flex";
        wheather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = "none";
    wheather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
    description.innerHTML = `${data.weather[0].description}`
    humidity.innerHTML = `${data.main.humidity}%`
    windspeed.innerHTML = `${data.wind.speed}Km/H`

    switch (data.weather[0].main) {
        case 'Clouds':
            wheatherimage.src = "/IMAGE/cloud.png";
            break;
        case 'Rain':
            wheatherimage.src = "/IMAGE/rain.png";
            break;
        case 'Clear':
            wheatherimage.src = "/IMAGE/clear.png";
            break;
        case 'Mist':
            wheatherimage.src = "/IMAGE/mist.png";
            break;
        case 'Snow':
            wheatherimage.src = "/IMAGE/snow.png";
            break;

    }

}

searchbtn.addEventListener('click', () => {
    checkwheather(inputbox.value);
})