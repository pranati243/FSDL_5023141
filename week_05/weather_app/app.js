const apiKey = '83054f84531d32cd7a3809dc7de73bb2'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        // Get the weather data from the API response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherIcon = data.weather[0].icon; // OpenWeatherMap icon code

        // Map OpenWeatherMap icons to Weather Icons
        const iconMapping = {
            '01d': 'wi-day-sunny', // Clear sky
            '01n': 'wi-night-clear', // Clear sky at night
            '02d': 'wi-day-cloudy', // Few clouds
            '02n': 'wi-night-alt-cloudy', // Few clouds at night
            '03d': 'wi-cloudy', // Scattered clouds
            '03n': 'wi-cloudy', // Scattered clouds at night
            '04d': 'wi-cloudy', // Broken clouds
            '04n': 'wi-cloudy', // Broken clouds at night
            '09d': 'wi-showers', // Shower rain
            '09n': 'wi-showers', // Shower rain at night
            '10d': 'wi-rain', // Rain
            '10n': 'wi-rain', // Rain at night
            '11d': 'wi-thunderstorm', // Thunderstorm
            '11n': 'wi-thunderstorm', // Thunderstorm at night
            '13d': 'wi-snow', // Snow
            '13n': 'wi-snow', // Snow at night
            '50d': 'wi-fog', // Mist
            '50n': 'wi-fog', // Mist at night
        };

        // Set the icon based on the weather code
        const iconClass = iconMapping[weatherIcon] || 'wi-na'; // Default to 'not available' icon if no match
        document.getElementById('weather-icon').className = `wi ${iconClass}`;

        // Update the UI with the weather data
        document.querySelector('.temperature').textContent = `${temperature}°C`;
        document.querySelector('.description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
        document.querySelector('.wind').textContent = `Wind Speed: ${windSpeed} m/s`;
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
}
