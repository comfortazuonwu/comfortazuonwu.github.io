const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=947ca8f837f28d9961098ed394e67efc&units=imperial"

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

  const preston = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(preston)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {

      if (towns[i].name === "Preston") {

        let event = document.createElement('section');

        let first = document.createElement('p')
        let second = document.createElement('p')
        let third = document.createElement('p')

        first.textContent = `${towns[i].events[0]} `;
        second.textContent = `${towns[i].events[1]} `;
        third.textContent = `${towns[i].events[2]} `;

        event.append(first);
        event.append(second);
        event.append(third)

        document.querySelector('div.events').appendChild(event);
      }

    };

  });