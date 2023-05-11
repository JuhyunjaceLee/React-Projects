import { useEffect, useState } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import CityButton from "./components/CityButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const cities = ["Seoul", "New York", "Sydney", "London", "Dubai"];
  const [city, setCity] = useState(null);
  const [selected, setSelected] = useState("current");
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apikey = "380c41b8594bc9bd3a40c6c4a9925257";
      getWeatherbyCurrent(lat, lon, apikey);
    });
  };
  const getWeatherbyCurrent = async (lat, lon, key) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherInfo(data);
    setLoading(false);
  };
  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=380c41b8594bc9bd3a40c6c4a9925257&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherInfo(data);
    setLoading(false);
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
      setSelected(city);
    } else {
      setCity(city);
      setSelected(city);
    }
  };

  useEffect(() => {
    !city ? getCurrentLocation() : getWeatherByCity();
  }, [city]);

  return (
    <div className="main">
      {loading ? (
        <ClipLoader
          color={"rgb(247 195 1)"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <DashBoard weatherInfo={weatherInfo} />
          <CityButton
            cities={cities}
            handleCityChange={handleCityChange}
            selected={selected}
          />
        </>
      )}
    </div>
  );
}

export default App;
