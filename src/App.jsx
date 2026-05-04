import Search from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { fetchWeather } from "./services/api";
import { FetchForecast } from "./services/api";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  const handleCity = async (city) => {
    const data = await fetchWeather(city);

    if (!data) {
      setError("City not found");
      return;
    }

    setWeatherData(data);
  };

  const ForecastCity = async (city) => {
    const data = await FetchForecast(city);

    if (!data) {
      setError("City not found");
      return;
    }

    setForecastData(data);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Weather App</h1>
        <Search handleCity={handleCity} ForecastCity={ForecastCity} />
        <WeatherCard data={weatherData} />
        <Forecast data={forecastData} />
      </div>
    </div>
  );
}

export default App;
