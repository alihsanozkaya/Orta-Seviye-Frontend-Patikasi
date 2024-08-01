import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [city, setCity] = useState("Adana");
  const [cities, setCities] = useState([]);
  const [units, setUnits] = useState("metric");
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
      )
      .then((res) => {
        setList(res.data.list);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [city, units]);

  useEffect(() => {
    axios.get(`https://turkiyeapi.dev/api/v1/provinces`)
    .then((res) => {
      setCities(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [])
  if (loading) return <p>Loading weather data...</p>;
  const values = {
    list,
    setData,
    setCity,
    setUnits,
    city,
    data,
    cities
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
