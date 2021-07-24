const weather = "https://api.openweathermap.org/data/2.5/onecall?lat=34.0195&lon=-118.4912&units=imperial&daily&alerts&appid=947ca8f837f28d9961098ed394e67efc"

fetch(weather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.current.temp.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.current.humidity.toFixed(0);
    document.getElementById('currently').textContent = jsObject.current.weather[0].main;
    
  });

  /*const forecast ="https://api.openweathermap.org/data/2.5/onecall?lat=34.0195&lon=-118.4912&units=imperial&daily&appid=947ca8f837f28d9961098ed394e67efc"
  fetch(forecast)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

    for (let i in forecast.list) {
       
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
          forecast.daily[i].weather[0].icon +
          ".png"; 
        const desc = forecast.daaily[i].weather.description; 
        icon.setAttribute("class", "weather-icon");
        icon.setAttribute("src", imagesrc); 
        icon.setAttribute("alt", desc);

        forecastbox.appendChild(icon);

        let temperature = document.createElement("p");
        temperature.setAttribute("class", "fore-temp");
        temperature.innerHTML = forecast.daily.temp.day.toFixed(0) + "&deg;F";
        forecastbox.appendChild(temperature);
        document.querySelector(".forecast").appendChild(forecastbox);
      }
    
  });
  */
  const forecast ="https://api.openweathermap.org/data/2.5/onecall?lat=34.0195&lon=-118.4912&units=imperial&daily&appid=947ca8f837f28d9961098ed394e67efc"
  fetch(forecast)
  .then((response) => response.json())
  .then((forecast) => {
      for (i in forecast.daily){
    document.getElementById('temp1').textContent = forecast.daily[0].temp.day.toFixed(0);
    document.getElementById('temp2').textContent = forecast.daily[1].temp.day.toFixed(0);
    document.getElementById('temp3').textContent = forecast.daily[2].temp.day.toFixed(0);
    document.getElementById('weather').innerHTML = imgsrc
    let icon = document.createElement("img");
    const imagesrc = "https://openweathermap.org/img/w/"+
    forecast.daily[0].weather[0].icon +
    ".png"; 
    const desc = forecast.daily[0].weather.description; 
    icon.setAttribute("class", "weathericon");
    icon.setAttribute("src", imagesrc); 
    icon.setAttribute("alt", desc);



    
      } 
});
  
  
    let d = new Date();

  document.querySelector("#lastmod").textContent = document.lastModified;
  document.querySelector("#currentyear").textContent = d.getFullYear();


  