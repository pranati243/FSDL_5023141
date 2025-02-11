function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
  
    if (unitSelect === "C") {
      let fahrenheit = (tempInput * 9/5) + 32;
      document.getElementById("result").innerHTML = `${tempInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
      let celsius = (tempInput - 32) * 5/9;
      document.getElementById("result").innerHTML = `${tempInput}°F is equal to ${celsius.toFixed(2)}°C`;
    }
  }
  