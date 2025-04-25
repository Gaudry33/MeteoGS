document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "";
    const city = "Andernos-les-Bains";

    const cityElem = document.querySelector('.weather-data__city');
    const updatedAtElem = document.querySelector('.weather-data__updated-at');
    const iconElem = document.querySelector('.weather-data__icon');
    const tempCElem = document.getElementById('temp-c');
    const tempFElem = document.getElementById('temp-f');
    const weatherMainElem = document.querySelector('.weather-data__current-weather');
    const humidityElem = document.querySelector('.weather-data__humidity');
    const windElem = document.querySelector('.weather-data__wind');
    const check = document.getElementById('check');

    function getWindDirection(degrees) {
        const directions = ["N", "N-E", "E", "S-E", "S", "S-O", "O", "N-O"];
        const index = Math.round(degrees / 45) % 8;
        return directions[index];
    }

    async function updateWeather() {
        try {
            const resp = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=fr`
            );
            if (!resp.ok) throw new Error('Ville inconnue ou problème réseau...');
            const data = await resp.json();

              const now = new Date();
              const heureMeteo = now.toTimeString().split(' ')[0];
              const temperature = Math.round(data.main.temp);
              const humidity = data.main.humidity;
              const windSpeed = Math.round(data.wind.speed * 3.6); 
              const windDirection = getWindDirection(data.wind.deg);
              const precipitation = data.rain ? data.rain['1h'] : 0;
  
              cityElem.textContent = data.name;
              updatedAtElem.textContent = 'Mis à jour à : ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
              iconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
              iconElem.alt = data.weather[0].description;
              tempCElem.textContent = temperature + "°C";
              tempFElem.textContent = ((temperature * 9 / 5) + 32).toFixed(1) + "°F";
              weatherMainElem.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
              humidityElem.innerHTML = `<i class="fas fa-droplet"></i> ${humidity}%`;
              windElem.innerHTML = `<i class="fas fa-wind"></i> ${windSpeed} km/h ${windDirection}`;
  
             
              const weatherData = {
                  date_meteo: now.toISOString().split('T')[0], 
                  temperature: temperature,
                  humidite: humidity,
                  vent_vitesse: windSpeed,
                  vent_direction: windDirection,
                  heure_meteo: heureMeteo,
                  precipitations: precipitation || null
              };

await sendWeatherDataToServer(weatherData);
} catch (err) {
    alert("Ville non trouvée ou erreur réseau !\n" + err.message);
}
}

async function sendWeatherDataToServer(weatherData) {
const response = await fetch('http://meteogs.fr/insert-weather', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(weatherData)
});

if (response.ok) {
    console.log('Données météo envoyées avec succès à la base de données');
} else {
    console.error('Erreur lors de l\'envoi des données météo');
}
}


updateWeather();
setInterval(updateWeather, 60 * 1000);

 check.addEventListener('change', function () {
    if (this.checked) {
        tempCElem.style.display = "none";
        tempFElem.style.display = "block";
    } else {
        tempCElem.style.display = "block";
        tempFElem.style.display = "none";
    }
});
});
