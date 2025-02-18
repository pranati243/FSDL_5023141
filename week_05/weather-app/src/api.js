import axios from "axios";

// Replace with your WeatherStack API key
const API_KEY = "YOUR_WEATHERSTACK_API_KEY"; 
const BASE_URL = "http://api.weatherstack.com/current";

// Function to fetch weather data
export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        access_key: API_KEY,
        query: city, // city name
      },
    });

    console.log(response.data); // Log the response to inspect the structure

    // Check if data is available
    if (response.data.error) {
      throw new Error(response.data.error.info);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
