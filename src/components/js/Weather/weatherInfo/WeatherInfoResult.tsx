import * as React from "react";
import './weatherInfoResult.scss';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useEffect } from 'react';
import { setIcon } from "../../../../app/features/weather/weatherSlice";
import { useDispatch } from "react-redux";


function WeatherInfoResult(props : any) {

   const dispatch = useDispatch();


   const city = useSelector((state : RootStateOrAny) => state.city.selectCity)
   const weather = useSelector((state : RootStateOrAny) => state.weather.weatherObject);
   const icon = useSelector((state : RootStateOrAny) => state.weather.iconImage);


   useEffect(() => {
      console.log(weather);
      if (weather?.weather) {
         let code = weather.weather[0].icon;
         const iconImage = `http://openweathermap.org/img/wn/${code}@2x.png`;
         dispatch(setIcon(iconImage));
      }
   }, [weather]);

   return (<div>
      <div className={weather?.warning ? "weather_pending" : "weather_fulfilled"}>{weather?.warning ? weather?.warning : ""}</div>
      <div className={city !== "" ? "weatherPage__information" : "weatherPage__information_hidden"}>
         <div className="weatherPage__information_city"><p>Chosen city: <p className="weatherPage__information_cityName">{city}</p></p></div>
         <div className={weather?.cod === 200 ? "weatherPage__information_clouds" : "cod_not200_hidden"}>
            <img src={icon} alt={weather?.cod === 200 ?
               weather?.weather[0]?.icon :
               weather?.message} />
            <p>{weather?.cod === 200 ?
               weather?.weather[0]?.description :
               weather?.message}</p>
         </div>
         <div className={weather?.cod === 200 ? "weatherPage__information_temperature" : "cod_not200_hidden"}>
            <p>temperature:<br /> {Math.round(weather?.main?.temp)} &#176;C</p>
            <p>feels like:<br />{Math.round(weather?.main?.feels_like)} &#176;C</p>
         </div>
         <div className={weather?.cod === 200 ? "cod200_hidden" : "codError"}>
            {weather?.cod === 200 ? "" : weather?.message}
         </div>
      </div>
   </div>
   )
};

export default WeatherInfoResult;