import React from "react";

export default function CityButton({ cities }) {
  return (
    <div className="btn_wrap">
      <button>CURRENT LOCATION</button>
      {cities.map((city, idx) => (
        <button key={idx}>{city.toUpperCase()}</button>
      ))}
    </div>
  );
}
