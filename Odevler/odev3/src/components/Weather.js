import React from "react";
import { useWeather } from "../context/WeatherContext";

// Gün adlarını İngilizce olarak almak için yardımcı fonksiyon
const getDayName = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const Weather = () => {
  const { list, setCity, cities, setUnits, data } = useWeather();

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeUnits = (e) => {
    setUnits(e.target.value);
  };

  // Verileri günlere göre gruplama ve saat 12:00'deki verileri alma
  const getWeatherAtNoon = (dataList) => {
    const groupedByDate = dataList.reduce((acc, curr) => {
      const date = curr.dt_txt.split(" ")[0];
      const time = curr.dt_txt.split(" ")[1];
      if (time === "12:00:00") {
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
      }
      return acc;
    }, {});

    return Object.keys(groupedByDate).map((date) => {
      const dayData = groupedByDate[date];
      const maxTemp = Math.max(...dayData.map((d) => d.main.temp_max));
      const minTemp = Math.min(...dayData.map((d) => d.main.temp_min));
      const icon = dayData[0].weather[0].icon; // İlk veriyi kullanarak ikon seçimi
      return { date, maxTemp, minTemp, icon };
    });
  };
  const dailyWeatherAtNoon = getWeatherAtNoon(list);
  return (
    <div>
      <form>
        <div>
          <label className="me-3 mt-5" htmlFor="city">
            Şehir
          </label>
          <select name="city" onChange={handleChangeCity}>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label className="me-3" htmlFor="units">
            Ölçek
          </label>
          <select name="units" onChange={handleChangeUnits}>
            <option value="metric">°C</option>
            <option value="imperial">°F</option>
          </select>
        </div>
      </form>
      <br />
      <div className="card-container d-flex flex-wrap">
        {dailyWeatherAtNoon.map((day, index) => (
          <div className="card" style={{ width: "9rem" }} key={index}>
            <h5>{getDayName(day.date)}</h5>

            <img
              className="card-img-top"
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="Card image cap"
              style={{ width: 100, height: 100 }}
            />
            <div className="card-body d-flex flex-column align-items-center text-center">
              <div className="temp-info d-flex justify-content-center">
                <b>{Math.round(day.maxTemp)}°</b>
                <span className="mx-2">/</span>
                <b style={{ color: "gray" }}>{Math.round(day.minTemp)}°</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
