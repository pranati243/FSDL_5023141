import React, { useState } from "react";

function WeatherForm({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
