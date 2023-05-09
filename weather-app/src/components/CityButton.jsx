import React from "react";

export default function CityButton({ cities, setCity }) {
  return (
    <div className="btn_wrap">
      <button onClick={() => setCity("current")}>CURRENT LOCATION</button>
      {cities.map((city, idx) => (
        <button key={idx} onClick={() => setCity(city)}>
          {city.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
