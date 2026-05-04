import "./forecast.scss";

function Forecast({ data }) {
  console.log(data);

  // ✅ Conditional rendering

  if (!data || !data.list) {
    return (
      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <p>Loading forecast...</p>
      </div>
    );
  }

  // ✅ 5-day data nikalo
  const dailyData = data.list.filter((item, i) => i % 8 === 0);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>

      <div className="forecast-list">
        {dailyData.map((day, index) => (
          <div key={index} className="day">

            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <span>{Math.floor(day.main.temp_max)}°</span>

            <small>{Math.floor(day.main.temp_min)}°</small>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
