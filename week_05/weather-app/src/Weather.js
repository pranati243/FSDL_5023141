import React from "react";

const Weather = ({ data }) => {
  if (!data) return <p>No data available.</p>;

  // Extract data from the response structure
  const { location, current } = data;

  return (
    <div>
      <h2>{location.name}, {location.country}</h2>
      <p>{current.weather_descriptions[0]}</p>
      <p>Temperature: {current.temperature}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind Speed: {current.wind_speed} km/h</p>
    </div>
  );
};

export default Weather;
