import React, { useState } from "react";
import { fetchWeather } from "./api";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    if (city) {
      const data = await fetchWeather(city);
      setWeatherData(data);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
