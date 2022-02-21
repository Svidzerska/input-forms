import React, { useState } from "react";
import './weatherInfoResult.css';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import { setIcon } from "../../../../app/features/weather/iconSlice";
import { useDispatch } from "react-redux";




function WeatherInfoResult(props) {

   const dispatch = useDispatch();


   const city = useSelector((state) => state.city.selectCity)
   const weather = useSelector((state) => state.weather.weatherObject);
   const icon = useSelector((state) => state.icon.iconImage);


   useEffect(() => {
      console.log(weather);

      let code = weather?.weather[0]?.icon;
      const iconImage = `http://openweathermap.org/img/wn/${code}@2x.png`;
      dispatch(setIcon(iconImage));
   }, [weather]);

   return (
   <div className={city!=="" ? "weatherPage__information" : "weatherPage__information_hidden"}>
         <div className="weatherPage__information_city"><p>Chosen city: <p className="weatherPage__information_cityName">{city}</p></p></div>
         <div className="weatherPage__information_clouds">
            <img src={icon} alt={weather?.weather[0]?.icon}/>
            <p>{weather?.weather[0]?.description}</p>
         </div>
         <div className="weatherPage__information_temperature">
            <p>temperature:<br/> {Math.round(weather?.main?.temp)} &#176;C</p>
            <p>feels like:<br/>{Math.round(weather?.main?.feels_like)} &#176;C</p>
         </div>
   </div>
   )
};

export default WeatherInfoResult;