// Simulate dynamic next arrival times for the trains and buses

function updateTransportTimes() {
    // Generate random arrival times (within 30 mins) for trains
    document.getElementById('train-a-arrival').innerText = generateRandomTime(30);
    document.getElementById('train-b-arrival').innerText = generateRandomTime(30);
    document.getElementById('train-c-arrival').innerText = generateRandomTime(30);

    // Generate random arrival times (within 20 mins) for buses
    document.getElementById('bus-101-arrival').innerText = generateRandomTime(20);
    document.getElementById('bus-205-arrival').innerText = generateRandomTime(20);
    document.getElementById('bus-303-arrival').innerText = generateRandomTime(20);
}

// Helper function to generate random times (in minutes)
function generateRandomTime(maxMinutes) {
    const minutes = Math.floor(Math.random() * maxMinutes) + 1;
    return `${minutes} mins`;
}

// Simulate real-time updates for the stats
function updateStats() {
    const passengers = generateRandomNumber(50000, 100000);
    const buses = generateRandomNumber(100, 300);
    const trains = generateRandomNumber(20, 50);

    document.getElementById('total-passengers').innerText = passengers;
    document.getElementById('total-buses').innerText = buses;
    document.getElementById('total-trains').innerText = trains;
}

// Helper function to generate random numbers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update transport times and stats every 60 seconds
setInterval(updateTransportTimes, 60000);
setInterval(updateStats, 60000);

// Initial calls
updateTransportTimes();
updateStats();
