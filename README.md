# WeatherNow - Weather Application

A responsive weather application that automatically detects your location and provides real-time weather information, interactive maps, and weather-related news.

## Features

- 🌍 Automatic location detection
- 🌡️ Real-time weather data
- 🗺️ Interactive weather map
- 📰 Weather-related news
- 🔍 Search functionality for any city
- 📱 Responsive design for all devices

## Demo

[Live Demo](#) - Replace with your deployed application URL

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- OpenStreetMap & Leaflet.js
- GNews API

## Getting Started

### Prerequisites

- A modern web browser
- API keys for:
  - OpenWeatherMap (free tier)
  - GNews (free tier)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weathernow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weathernow
   ```

3. Open `script.js` and replace the API keys:
   ```javascript
   const WEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
   const NEWS_API_KEY = 'YOUR_GNEWS_API_KEY';
   ```

4. Open `index.html` in your web browser or use a local development server.

## Usage

1. When you first open the application, it will request permission to access your location
2. Once permission is granted, it will display:
   - Current weather for your location
   - An interactive map centered on your location
   - Weather-related news
3. Use the search bar to look up weather information for any city
4. Click on news articles to read more about weather-related events

## API Documentation

### OpenWeatherMap API
- Used for fetching weather data and reverse geocoding
- [Documentation](https://openweathermap.org/api)
- Free tier includes:
  - 60 calls/minute
  - Current weather data
  - Geocoding

### GNews API
- Used for fetching weather-related news
- [Documentation](https://gnews.io/docs/v4)
- Free tier includes:
  - 100 calls/day
  - News articles in multiple languages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- OpenWeatherMap for weather data
- OpenStreetMap contributors for map data
- GNews for news articles
- Leaflet.js for interactive maps

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/weathernow](https://github.com/yourusername/weathernow)
