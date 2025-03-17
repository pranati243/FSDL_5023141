import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found!");
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
