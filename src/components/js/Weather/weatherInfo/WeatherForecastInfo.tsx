import * as React from "react";
import './weatherForecastInfo.scss';
import Button from "../../ElementForm/Button";

import { useSelector, RootStateOrAny } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setDate } from "../../../../app/features/weatherForecast/weatherForecastSlice";
import { getForecastFullInfo } from "../controlWeather/weatherForecastInfoData";
const lookup = require('country-code-lookup');

function WeatherForecastInfo(props: any) {
   const dispatch = useDispatch();

   const weather = useSelector((state: RootStateOrAny) => state.weatherForecast.weatherObject);
   const forecast = useSelector((state: RootStateOrAny) => state.weatherForecast.forecastObject);
   const dateFromStore = useSelector((state: RootStateOrAny) => state.weatherForecast.date);


   const renderCountryByCity = () => {
         if (weather?.sys?.country) {
            const countryObj = lookup.byIso(weather?.sys?.country);
            return ' ' + countryObj?.country;
         }
   }

   const forecastFullInfo = getForecastFullInfo(forecast?.list);
   
   const fullDateValues = forecastFullInfo?.map((value: any) => {
      return value?.date_value;
   });

   useEffect(() => {
      if (fullDateValues) {
         dispatch(setDate(fullDateValues[0]));
      }
   }, [forecast]);

   const fullDateUnique = Array.from(new Set(fullDateValues));

   const handleButtonDate = (e: any) => {
      dispatch(setDate(e.target.name));
   }

   const listDate = fullDateUnique.map((date: any) => {
      const a = date.split(' ');
      const day = a?.pop();
      const today = a.join(' ');
      return (
         <Button key={date} onClick={handleButtonDate} text={today} info={day} className={date === dateFromStore ? "button_day__active" : "button_day_all"} name={date} />
      )
   });


   const fullForecastValue = forecastFullInfo?.map((value: any) => {
      if (value?.date_value === dateFromStore) {
         const iconImage = `http://openweathermap.org/img/wn/${value?.icon}@2x.png`;
         return (<div key={value?.time_value} className={"weatherForecast__forecast__element_weather"}>
            <p className="weatherForecast__forecast__time_value">
               {value?.time_value}
            </p>
            <p className="weatherForecast__forecast__icon_picture">
               <img src={iconImage} alt={value?.icon} />
            </p>
            <p className={Math.round(value?.temperature) < 0 ? "weatherForecast__forecast__temp_main_minus" : "weatherForecast__forecast__temp_main_plus"}>
               {Math.round(value?.temperature)}
            </p>
            <p>
               {Math.round(value?.feels_like)}
            </p>
            <p>
               {Math.round(value?.pressure * 0.75006)}
            </p>
            <p>
               {value?.humidity}
            </p>
            <p>
               {Math.round(value?.wind_speed)}
            </p>
            <p>
               {Math.round(value?.gust)}
            </p>
            <p>
               {value?.wind_direction}
            </p>
         </div>
         )
      }
   });


   return (<div>
      <div className={weather?.cod === 200 ?
         "weatherForecast__information" :
         "weatherForecast__information_hidden"}>
         <div className="weatherForecast__information_city">
            <p>Chosen city:
               <p className="weatherForecast__information_cityName">
                  {weather?.cod === 200 ? weather?.name : weather?.message},
                  {renderCountryByCity()}
               </p>
            </p>
         </div>
         <div className="weatherForecast__information_warning">{forecast?.warning ? forecast?.warning : ""}</div>
         <div className="weatherForecast__forecast">
            {listDate}
         </div>
         <div className={dateFromStore !== "" ?
            "weatherForecast__forecast__data" :
            "weatherForecast__forecast__no_data"}>
            <div className="weatherForecast__forecast__name">
               <p>Time</p>
               <p className="weatherForecast__forecast__icon_name">Weather</p>
               <p className="weatherForecast__forecast__temperature_name">Temperature, C</p>
               <p>Feels like, C</p>
               <p>Pressure, mm Hg</p>
               <p>Humidity, %</p>
               <p>Wind, m/s</p>
               <p>Gust, m/s</p>
               <p>Direction</p>
            </div>
            <div className="weatherForecast__forecast__data__info">
               {fullForecastValue}
            </div>
         </div>
      </div>
   </div>
   )
};

export default WeatherForecastInfo;