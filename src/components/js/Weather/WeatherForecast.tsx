import React, { useEffect } from "react";
import './weatherForecast.scss';
import InputHooks from "../ElementForm/Input_component_hooks";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getWeatherForecast, setCityForecast, setDate } from "../../../app/features/weatherForecast/weatherForecastSlice";
import { getWeatherCoord } from "../../../app/features/weatherForecast/weatherForecastSlice";
import { setCoordinates } from "../../../app/features/weatherForecast/weatherForecastSlice";
import Button from "../ElementForm/Button";
import WeatherForecastInfo from "./weatherInfo/WeatherForecastInfo";

function WeatherForecast(props : any) {

   const dispatch = useDispatch();

   const city = useSelector((state : RootStateOrAny) => state.weatherForecast.cityForecast);
   const weather = useSelector((state : RootStateOrAny) => state.weatherForecast.weatherObject);
   const coord = useSelector((state: RootStateOrAny) => state.weatherForecast.coord);

   useEffect(() => {
      console.log(city); //city from input element
      dispatch(getWeatherCoord(city));
   }, [city]);

   useEffect(() => {
      dispatch(setCoordinates(weather?.coord));
      console.log(weather?.warning);
   }, [weather]);


   const handleChange = (e : any) => {
      dispatch(setCityForecast(e.target.value));
      dispatch(getWeatherForecast({}));
      dispatch(setDate(""));
   }

   const handleButton = () => {
      dispatch(getWeatherForecast(coord));
      console.log(coord);
   }

   return (<div className="weatherForecast">
      <InputHooks className="weatherForecast_input" value={city} onChange={handleChange}/>
      <Button className={weather?.cod === 200 ?
      "weatherForecast_go" : 
      "weatherForecast_no_data"} text="Go" onClick={handleButton}/>
      <div className="weatherForecast__warnings">{weather?.warning ? weather?.warning : ""}</div>
      <div className="weatherForecast__warnings">{weather?.cod === 200 ? "" : weather?.message}</div>
      
      <WeatherForecastInfo/>
   </div>
   )
};

export default WeatherForecast;