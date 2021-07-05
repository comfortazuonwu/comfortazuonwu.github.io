const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=947ca8f837f28d9961098ed394e67efc&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;
  });