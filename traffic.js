
function updateEnergyConsumption() {
    // Generate a random energy consumption value between 500 and 1500 MW
    const energyConsumption = (Math.random() * (150 - 50)).toFixed(0);
    
    
    // Update the energy consumption display
    document.getElementById('energy-display').innerText = energyConsumption;
    

}

// Update the values every 2 seconds to simulate real-time updates
setInterval(updateEnergyConsumption, 2000);

// Initial call to set values when the page loads
updateEnergyConsumption();
