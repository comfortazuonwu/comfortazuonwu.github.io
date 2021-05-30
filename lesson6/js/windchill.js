
    let temperature = document.querySelector("#temperature").innerHTML;
    let windSpeed = document.querySelector("#windspeed").innerHTML;
    
    
    if (temperature <= 50 && windSpeed > 3) {
      let chill = windChill(parseInt(temperature), parseInt(windSpeed));
      document.querySelector("#windchill").innerHTML = chill + "°F";
    } else {
      document.querySelector("#windchill").innerHTML = "N/A";
    }
    



function windChill(tempF,speed){
    wind_chill_factor =  35.74 +  (0.6215* tempF) - (35.75 * (speed **0.16)) + (0.4275 * tempF * (speed **0.16));
    wind_chill_factor = Math.round(wind_chill_factor,2);
    return wind_chill_factor
}
 
