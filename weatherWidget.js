const city = 'winona';
const lat = '44.055';
const lon = '91.66';
const apiKey = '954180d58a8fb0f5a772086dfdefccfd';

function getWeather() {

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const futureForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const searchedDay = document.getElementById('day-input');
    const day = getDay(searchedDay);
    const currentDay = new Date();
    const today = getDay(currentDay);
    console.log(day);
    console.log(today);

    if(day === today) {
        // API call for current weather
        fetch(currentWeatherURL)
            .then(response => response.json())
            .then(data => {
                displayCurrentWeather(data);
            })
            .catch(err => {
                console.err('Error fetching current forecast:', err);
                alert('Error fetching current forecast. Please try later.');
            });

        
        // API call for hourly forecast
        fetch(forecastURL)
            .then(response => response.json())
            .then(data => {
                displayHourlyForecast(data.list);
            })
            .catch(err => {
                console.err('Error fetching hourly forecast:', err);
                alert('Error fetching hourly forecast. Please try later.');
            });
    } else {
        // API call for future forecast
        fetch(futureForecastURL)
            .then(response => response.json())
            .then(data => {
                displayFutureForecast(data.list);
                console.log(data.list);
            })
            .catch(err => {
                console.err('Error fetching future forecast:', err);
                alert('Error fetching future forecast. Please try later.');
            })
        // API call for hourly forecast
        fetch(futureForecastURL)
            .then(response => response.json())
            .then(data => {
                displayHourlyForecast(data.list);
            })
            .catch(err => {
                console.err('Error fetching hourly forecast:', err);
                alert('Error fetching hourly forecast. Please try later.');
            });
    }
}

function displayCurrentWeather(data) {
    // div elements
    const currentDay = document.getElementById('current-day');
    const tempInfo = document.getElementById('temp-div');
    const weatherInfo = document.getElementById('weather-info');
    const icon = document.getElementById('weather-icon');
    const hourly = document.getElementById('hourly-forecast');

    // Clears divs
    currentDay.innerHTML = '';
    weatherInfo.innerHTML = '';
    hourly.innerHTML = '';
    tempInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`
    } else {
        const date = new Date();
        // Returns temperature in fahrenheit
        const temperature = Math.round((data.main.temp - 273.15) * 1.8 + 32);
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        // Displays temperature in fahrenheit with degree symbol and F
        const tempHTML = `<p>${temperature}&#176;F</p>`;
        // Displays city and short weather description
        const weatherHTML = `<p>${city}</p><p>${desc}</p>`;

        tempInfo.innerHTML = tempHTML;
        weatherInfo.innerHTML = weatherHTML;
        icon.src = iconURL;
        icon.alt = desc;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecast = document.getElementById('hourly-forecast');
    // Splits 24-hour day into 3 hour segments
    const next24 = hourlyData.slice(0, 8);
    next24.forEach(item => {
        // Format the date/time
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        // Returns temperature in fahrenheit
        const temp = Math.round((item.main.temp - 273.13) * 1.8 + 32);
        const iconCode = item.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;

        // Shows time, icon, and temperature for each hourly segment
        const hourlyItemHTML = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconURL}" alt="Hourly Weather Icon">
                <span>${temp}&#176;F</span>
            </div>`;
        hourlyForecast.innerHTML += hourlyItemHTML;
    });
}

function displayFutureForecast(futureData, day) {
    const currentDay = document.getElementById('current-day');
    const tempInfo = document.getElementById('temp-div');
    const weatherInfo = document.getElementById('weather-info');
    const icon = document.getElementById('weather-icon');
    const hourly = document.getElementById('hourly-forecast');

    // Clears divs
    currentDay.innerHTML = '';
    weatherInfo.innerHTML = '';
    hourly.innerHTML = '';
    tempInfo.innerHTML = '';

    if (futureData.cod === '404') {
        weatherInfo.innerHTML = `<p>Weather information not available at this time</p>`
    } else {
        currentDay.innerHTML = getDay(day);

    }
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

function getDay(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}
