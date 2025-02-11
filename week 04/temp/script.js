function convertTemperature() {
  const tempInput = parseFloat(document.getElementById('inputTemperature').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultText = document.getElementById('resultText');
  const colorBarFill = document.getElementById('colorBarFill');
  
  let result;

  // Convert the input temperature to the desired unit
  if (fromUnit === 'C') {
      if (toUnit === 'F') {
          result = (tempInput * 9/5) + 32;
      } else if (toUnit === 'K') {
          result = tempInput + 273.15;
      } else {
          result = tempInput;
      }
  } else if (fromUnit === 'F') {
      if (toUnit === 'C') {
          result = (tempInput - 32) * 5/9;
      } else if (toUnit === 'K') {
          result = (tempInput - 32) * 5/9 + 273.15;
      } else {
          result = tempInput;
      }
  } else if (fromUnit === 'K') {
      if (toUnit === 'C') {
          result = tempInput - 273.15;
      } else if (toUnit === 'F') {
          result = (tempInput - 273.15) * 9/5 + 32;
      } else {
          result = tempInput;
      }
  }

  // Display the result
  resultText.innerText = `${result.toFixed(2)} ${toUnit}`;

  // Adjust color bar based on temperature value
  let colorPercentage = (result - (-50)) / (150 - (-50)) * 100;
  colorPercentage = Math.max(0, Math.min(100, colorPercentage)); // Clamp between 0 and 100
  colorBarFill.style.width = colorPercentage + '%';

  // Change the color bar fill based on temperature range
  if (result <= 0) {
      colorBarFill.style.backgroundColor = '#4A90E2'; // Cold - Blue
  } else if (result > 0 && result <= 30) {
      colorBarFill.style.backgroundColor = '#FFD700'; // Warm - Yellow
  } else {
      colorBarFill.style.backgroundColor = '#FF4500'; // Hot - Red
  }
}
