const apiURL3 =
  "https://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=-111.3960&units=imperial&appid=947ca8f837f28d9961098ed394e67efc";
fetch(apiURL3)
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
        temperature.innerHTML = forecast.list[i].main.temp_max.toFixed(0) + "&deg;F";
        forecastbox.appendChild(temperature);
        document.querySelector(".forecast").appendChild(forecastbox);
      }
    }
  });
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0403&lon=-111.4021&appid=947ca8f837f28d9961098ed394e67efc&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('high-temp').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity.toFixed(0);
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0);
  });

const fishhaven = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(fishhaven)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const towns = jsonObject['towns'];       

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Fish Haven") {
                
                let event = document.createElement('section');

                let first = document.createElement('p');
                let second = document.createElement('p');
                let third = document.createElement('p');
                let fourth = document.createElement('p')
                 
                first.textContent = `${towns[i].events[0]} `;
                second.textContent = `${towns[i].events[1]} `;
                third.textContent = `${towns[i].events[2]} `;
                fourth.textContent = `${towns[i].events[3]} `;
                
                event.append(first);
                event.append(second);
                event.append(third)
                event.append(fourth)

                document.querySelector('div.events').appendChild(event);
            }    
        };

    });