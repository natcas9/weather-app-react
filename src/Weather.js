import React from "react";
import axios from "axios";

export default function Weather() {
  function citySearch(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=bc5ca568ee2d7c71357ca430a3ff8705&units=metric`;
  axios.get(url).then(citySearch);
  return (
    <div>
      <h2>Weather</h2>
      <p>It's sunny!</p>
    </div>
  );
}
