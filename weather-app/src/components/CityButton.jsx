import React from "react";

export default function CityButton({ cities, handleCityChange, selected }) {
  return (
    <div className="btn_wrap">
      <button
        onClick={() => handleCityChange("current")}
        className={`${selected === "current" ? "selected" : ""}`}
      >
        CURRENT LOCATION
      </button>
      {cities.map((city, idx) => (
        <button
          key={idx}
          onClick={() => handleCityChange(city)}
          className={`${selected === city ? "selected" : ""}`}
        >
          {city.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
