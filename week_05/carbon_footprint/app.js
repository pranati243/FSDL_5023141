// Function to calculate the carbon footprint based on energy consumption and travel distance
function calculateCarbonFootprint() {
    // Get user inputs
    const energyConsumption = document.getElementById('energy-consumption').value;
    const travelDistance = document.getElementById('travel-distance').value;

    // Validate inputs
    if (energyConsumption <= 0 || travelDistance <= 0) {
        alert('Please enter valid values for both energy consumption and travel distance.');
        return;
    }

    // Carbon Footprint Calculation
    // Average carbon footprint for energy (kgCO2/kWh)
    const carbonFromEnergy = energyConsumption * 0.233;
    
    // Average carbon footprint for car travel (kgCO2/km)
    const carbonFromTravel = travelDistance * 0.15;

    // Total carbon footprint
    const totalCarbonFootprint = carbonFromEnergy + carbonFromTravel;

    // Display the results
    document.getElementById('carbon-footprint').textContent = totalCarbonFootprint.toFixed(2);

    // Provide feedback based on the footprint
    let feedback = '';
    let feedbackClass = '';
    let icon = '';
    
    if (totalCarbonFootprint < 50) {
        feedback = 'Great job! Your carbon footprint is low!';
        feedbackClass = 'low';
        icon = '🌱'; // Leaf icon for low footprint
    } else if (totalCarbonFootprint < 100) {
        feedback = 'Good job! Keep it up!';
        feedbackClass = 'medium';
        icon = '☁️'; // Cloud icon for medium footprint
    } else {
        feedback = 'Your carbon footprint is high. Consider reducing your energy consumption and travel.';
        feedbackClass = 'high';
        icon = '🏭'; // Factory icon for high footprint
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('feedback-icon').textContent = icon;

    // Change background color based on the feedback
    document.querySelector('.app-container').classList = `app-container ${feedbackClass}`;
}
