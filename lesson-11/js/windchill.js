
    let temperature = document.querySelector("#current-temp").innerHTML;
    let windspeed = document.querySelector("#windspeed").innerHTML;
    let wind_chill_factor =  35.74 +  (0.6215* temperature) - (35.75 * (windspeed **0.16)) + (0.4275 * temperature * (windspeed **0.16));
    
    
    if (temperature <= 50 && windspeed > 3) {
      document.querySelector(".windchill").innerHTML = Math.ceil(wind_chill_factor) + '&#8457';
    } else {
      document.querySelector(".windchill").innerHTML = "N/A";
    }
    




 
