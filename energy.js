// Function to generate random values for consumption
function generateRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Update the energy consumption values
function updateConsumptionData() {
    // Simulating real-time data in kWh and MWh
    const houseConsumption = generateRandomNumber(5, 20); // kWh per house
    const cityConsumption = generateRandomNumber(500, 1000); // MWh overall city
    const industrialConsumption = generateRandomNumber(200, 500); // MWh for industry
    const commercialConsumption = generateRandomNumber(100, 300); // MWh for commercial
    const otherConsumption = generateRandomNumber(50, 150); // MWh for others

    // Update the UI with the random data
    document.getElementById('house-consumption').innerText = houseConsumption + " kWh";
    document.getElementById('city-consumption').innerText = cityConsumption + " MWh";
    document.getElementById('industrial-consumption').innerText = industrialConsumption + " MWh";
    document.getElementById('commercial-consumption').innerText = commercialConsumption + " MWh";
    document.getElementById('other-consumption').innerText = otherConsumption + " MWh";
}

// Update consumption data every 60 seconds (1 minute)
setInterval(updateConsumptionData, 60000);

// Initial call to populate data when the page loads
updateConsumptionData();
