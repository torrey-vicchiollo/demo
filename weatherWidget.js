const city = 'winona';
const apiKey = '954180d58a8fb0f5a772086dfdefccfd';

function getWeather() {
    // grabs the date from the teeTableTitle
    const fullHTML = document.getElementById('teeTableTitle').innerHTML.trim();
    const enteredDate = fullHTML.substring(fullHTML.lastIndexOf(' '));
    let arr = [];
    arr = enteredDate.split('/');

    // set selected day month and year
    const selectedDay = parseInt(arr[1]);
    const selectedMonth = parseInt(arr[0]) - 1;
    const selectedYear = parseInt(arr[2]);

    // get the current time
    const rightNow = new Date();
    // create a selectedDate object with the year, month, and day from the header and the time right now
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay, rightNow.getHours(), rightNow.getMinutes());

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    const futureForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    // weather for the current day
    if(selectedDate.getDay() === rightNow.getDay()) {
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

    // if the user loaded in a tee sheet for a different day
    } else {
        // API call for future forecast
        fetch(futureForecastURL)
            .then(response => response.json())
            .then(data => {
                displayFutureForecast(data.list, selectedDate);
            })
            .catch(err => {
                console.err('Error fetching future forecast:', err);
                alert('Error fetching future forecast. Please try later.');
            })
    }
}

function displayCurrentWeather(data) {
    // div elements
    const currentDay = document.getElementById('current-day');
    const tempInfo = document.getElementById('temp-div');
    const weatherInfo = document.getElementById('weather-info');
    const icon = document.getElementById('weather-icon');
    const hourly = document.getElementById('hourly-forecast');

    // clears divs
    currentDay.innerHTML = '';
    weatherInfo.innerHTML = '';
    hourly.innerHTML = '';
    tempInfo.innerHTML = '';

    // error
    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`
    } else {
        const date = new Date();
        // load weather information for the div elements
        const dayOfWeek = getDayOfWeek(date.getDay());
        const temperature = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        // displays temperature in fahrenheit with degree symbol and F
        const tempHTML = `<p>${temperature}&#176;F</p>`;
        // displays city and short weather description
        const weatherHTML = `<p>${city}</p><p>${desc}</p>`;
        // displays the day of the week being viewed
        const dayHTML = `<p>${dayOfWeek}`;

        currentDay.innerHTML = dayHTML;
        tempInfo.innerHTML = tempHTML;
        weatherInfo.innerHTML = weatherHTML;
        icon.src = iconURL;
        icon.alt = desc;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    // div element
    const hourlyForecast = document.getElementById('hourly-forecast');

    // clears div
    hourlyForecast.innerHTML = '';

    // splits 24-hour day into 3 hour segments
    const next24 = hourlyData.slice(0, 8);
    next24.forEach(item => {
        // get the date/time in milliseconds
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temp = Math.round(item.main.temp);
        const iconCode = item.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;

        // shows time, icon, and temperature for each hourly segment
        const hourlyItemHTML = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconURL}" alt="Hourly Weather Icon">
                <span>${temp}&#176;F</span>
            </div>`;
        hourlyForecast.innerHTML += hourlyItemHTML;
    });
}

// This function accepts information loaded from the API call. The API call covers the weather
// forecast from the current time to the next 5 days split into 3-hour segments.
function displayFutureForecast(futureData, selectedDate) {
    // div elements
    const currentDay = document.getElementById('current-day');
    const tempInfo = document.getElementById('temp-div');
    const weatherInfo = document.getElementById('weather-info');
    const icon = document.getElementById('weather-icon');
    const hourlyForecast = document.getElementById('hourly-forecast');

    // clears divs
    currentDay.innerHTML = '';
    weatherInfo.innerHTML = '';
    hourlyForecast.innerHTML = '';
    tempInfo.innerHTML = '';

    // error
    if (futureData.cod === '404') {
        weatherInfo.innerHTML = `<p>Weather information not available at this time</p>`;
    } else {
        const date = new Date(selectedDate);
        const dayOfWeek = getDayOfWeek(date.getDay());
        let index = 0;
        let futureDataTotal = 0;
        // get all of the future data starting from the selected day
        futureData.forEach(item => {
            const dateTime = new Date(item.dt_txt);
            // finds the index of the user selected date
            if (dateTime.getTime() <= date.getTime()) {
                index++;
            }
            futureDataTotal++;
        });
        // if the selected date is not outside of the 5-day window that the forecast provides
        if (index < 40) {
            let data = [];
            let j = index;
            // skips over data that is provided by the API that is before the user selected date
            for (let i = 0; i < (futureDataTotal - j); i++) {
                data[i] = futureData[index];
                index++;
            }
            // creates an array to show the next 24 hours in 3-hour increments
            let next24 = [];
            let time = 0;
            for (let i = 1; i < 9; i++) {
                next24[time] = data[i];
                time++;
            }
            next24.forEach(item => {
                // get the date/time in milliseconds
                const dateTime = new Date(item.dt * 1000);
                const hour = dateTime.getHours();
                const temp = Math.round(item.main.temp);
                const iconCode = item.weather[0].icon;
                const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
        
                // shows time, icon, and temperature for each hourly segment
                const hourlyItemHTML = `
                    <div class="hourly-item">
                        <span>${hour}:00</span>
                        <img src="${iconURL}" alt="Hourly Weather Icon">
                        <span>${temp}&#176;F</span>
                    </div>`;
                hourlyForecast.innerHTML += hourlyItemHTML;
                time++;
            });
            // load weather information for the div elements
            const temperature = Math.round(data[0].main.temp);
            const desc = data[0].weather[0].description;
            const iconCode = data[0].weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            // displays temperature in fahrenheit with degree symbol and F
            const tempHTML = `<p>${temperature}&#176;F</p>`;
            // displays city and short weather description
            const weatherHTML = `<p>${city}</p><p>${desc}</p>`;
            // displays selected day of the week
            const dayHTML = `<p>${dayOfWeek}`;

            currentDay.innerHTML = dayHTML;
            tempInfo.innerHTML = tempHTML;
            weatherInfo.innerHTML = weatherHTML;
            icon.src = iconURL;
            icon.alt = desc;

            showImage();
        } else {    
            // message that is displayed if the user selected date is outside of the 5-day forecast range
            weatherInfo.innerHTML = `<p>Weather information not available for ${getMonthOfYear(date.getMonth())} ${date.getDate()}</p>`    
        }
    }
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

function getDayOfWeek(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

function getMonthOfYear(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
}
