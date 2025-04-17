const WEATHER_API_KEY = "YOUR_API_KEY";
const NEWS_API_KEY = "YOUR_API_KEY";

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');
const newsContainer = document.getElementById('news-container');

let map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

searchButton.addEventListener('click', () => {
    const city = searchInput.value;
    if (city) {
        getWeatherByCity(city);
        getNews(city);
    }
});

function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByCoords(lat, lon);
            updateMap(lat, lon);
            getCityNameByCoords(lat, lon).then(city => {
                if (city) {
                    getNews(city);
                }
            });
        }, function(error) {
            console.error("Error getting user's location:", error);
            getWeatherByCity('London');
            getNews('London');
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        getWeatherByCity('London');
        getNews('London');
    }
}

async function getWeatherByCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        displayWeather(data);
        updateMap(data.coord.lat, data.coord.lon);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

async function getWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

async function getCityNameByCoords(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${WEATHER_API_KEY}`);
        const data = await response.json();
        return data[0].name;
    } catch (error) {
        console.error('Error fetching city name:', error);
        return null;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const html = `
        <div class="weather-item">
            <h3>${name}</h3>
            <p>Temperature: ${main.temp}°C</p>
            <p>Feels like: ${main.feels_like}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Weather: ${weather[0].description}</p>
        </div>
    `;
    weatherInfo.innerHTML = html;
}

function updateMap(lat, lon) {
    map.setView([lat, lon], 10);
    L.marker([lat, lon]).addTo(map);
}

async function getNews(city) {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${city}+weather&token=${NEWS_API_KEY}&lang=en&max=5`);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news data:', error);
        newsContainer.innerHTML = '<p>Error fetching news data. Please try again.</p>';
    }
}

function displayNews(articles) {
    const html = articles.map(article => `
        <div class="news-item">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    `).join('');
    newsContainer.innerHTML = html;
}

getUserLocation();
