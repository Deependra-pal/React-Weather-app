import React, { useState } from "react";

import "./search.scss";

const SearchBox = ({ handleCity , ForecastCity }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setError("");
    handleCity(city);
    ForecastCity(city)
    setCity("");

  };

  return (
    <div className="search">
      <form onSubmit={handleInput}>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="Enter city name..."
        />
        <button>Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchBox;
