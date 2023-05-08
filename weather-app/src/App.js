import { useEffect, useState } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import CityButton from "./components/CityButton";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const cities = ["Seoul", "New York", "Sydney", "London", "Dubai"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apikey = "380c41b8594bc9bd3a40c6c4a9925257";
      getWeatherbyCurrent(lat, lon, apikey);
    });
  };
  const getWeatherbyCurrent = async (lat, lon, key) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherInfo(data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div className="main">
      <DashBoard weatherInfo={weatherInfo} />
      <CityButton cities={cities} />
    </div>
  );
}

export default App;
