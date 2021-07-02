
const apiURL2 =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3b8b61faf7fc9a18cc6acd753d197fcd";
fetch(apiURL2)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

    for (let i in forecast.list) {
      if (forecast.list[i].dt_txt.includes("18:00:00")) {
        let forecastbox = document.createElement("div");
        forecastbox.setAttribute("class", "fore-box");

        let dayofweek = document.createElement("div");
        dayofweek.setAttribute("class", "weekday");
        let dayOfWeek = new Date(forecast.list[i].dt_txt);
        let dayNum = dayOfWeek.getDay();
        let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayofweek.textContent = weekdays[dayNum];
        forecastbox.appendChild(dayofweek);

        let icon = document.createElement("img");
        const imagesrc =
          "https://openweathermap.org/img/w/" +
          forecast.list[i].weather[0].icon +
          ".png"; 
        const desc = forecast.list[i].weather.description; 
        icon.setAttribute("class", "weather-icon");
        icon.setAttribute("src", imagesrc); 
        icon.setAttribute("alt", desc);

        forecastbox.appendChild(icon);

        let temperature = document.createElement("p");
        temperature.setAttribute("class", "fore-temp");
        temperature.innerHTML = forecast.list[i].main.temp_max + "&deg;F";
        forecastbox.appendChild(temperature);
        document.querySelector(".forecast").appendChild(forecastbox);
      }
    }
  });