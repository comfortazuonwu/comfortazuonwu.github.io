const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=947ca8f837f28d9961098ed394e67efc&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    thefive.forEach(x => {
        let d = new Date(x.dt_txt);
    })