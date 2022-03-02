import * as React from "react";
import './weatherForecastInfo.scss'; 

import { useSelector, RootStateOrAny } from 'react-redux';
import { useEffect } from 'react';
import { setIcon } from "../../../../app/features/weather/weatherSlice";
import { useDispatch } from "react-redux";


function WeatherForecastInfo(props: any) {

   const city = useSelector((state: RootStateOrAny) => state.weatherForecast.cityForecast);
   const weather = useSelector((state : RootStateOrAny) => state.weatherForecast.weatherObject);
   const forecast = useSelector((state: RootStateOrAny) => state.weatherForecast.forecastObject);
   const icon = useSelector((state: RootStateOrAny) => state.weather.iconImage);



   useEffect(() => {
      console.log(forecast);
      console.log(forecast?.warning);
   }, [forecast]);


   useEffect(() => {
      console.log(city);
      console.log(weather);
   }, [city]);

   // useEffect(() => {
   //    console.log(weather);
   //    if (weather?.weather) {
   //       let code = weather.weather[0].icon;
   //       const iconImage = `http://openweathermap.org/img/wn/${code}@2x.png`;
   //       dispatch(setIcon(iconImage));
   //    }
   // }, [weather]);

   return (<div>
      <div className={weather?.cod === 200 ? "weatherForecast__information" : "weatherForecast__information_hidden"}>
         <div className="weatherForecast__information_city">
            <p>Chosen city:
               <p className="weatherForecast__information_cityName">{weather?.cod === 200 ? weather?.name : weather?.message}</p>
            </p>
         </div>
         <div>{forecast?.warning ? forecast?.warning : ""}</div>
         <div className="weatherForecast__forecast">
            <div>{forecast?.list ? forecast?.list[0]?.dt : ""}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   </div>
   )
};

export default WeatherForecastInfo;