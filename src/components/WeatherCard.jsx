import "./weather.scss";

function WeatherCard({ data }) {
  const hasData = data && data.main && data.weather;

  return (
    <div className="weather-card">
      <p className="city">
        {hasData ? data.name : "New Delhi"},{" "}
        <span>{hasData ? data.sys?.country : "IN"}</span>
      </p>

      <h1 className="temp">
        {hasData ? Math.round(data.main.temp) : "28"}°C
      </h1>

      <p className="condition">
        {hasData ? data.weather[0].main : "Partly Cloudy"}
      </p>

      <hr />

      <div className="details">
        <div>
          <p>Humidity</p>
          <span>{hasData ? data.main.humidity : "62"}%</span>
        </div>

        <div>
          <p>Wind</p>
          <span>{hasData ? data.wind?.speed : "14"} km/h</span>
        </div>

        <div>
          <p>Feels Like</p>
          <span>
            {hasData ? Math.round(data.main.feels_like) : "31"}°C
          </span>
        </div>
      </div>
    </div>
  );
}
export default WeatherCard;
