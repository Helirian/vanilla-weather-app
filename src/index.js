function displayTemperature(response) {
    console.log(response.data);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.wind.speed;
}
let apiKey = "81c95f81174bafa543a7ffc89b06ec2a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);