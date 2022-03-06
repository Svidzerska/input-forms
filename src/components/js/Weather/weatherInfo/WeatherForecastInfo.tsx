import * as React from "react";
import './weatherForecastInfo.scss'; 
import Button from "../../ElementForm/Button";

import { useSelector, RootStateOrAny } from 'react-redux';
import { useEffect } from 'react';
import { setIcon } from "../../../../app/features/weather/weatherSlice";
import { useDispatch } from "react-redux";
import { setDate } from "../../../../app/features/weatherForecast/weatherForecastSlice";


function WeatherForecastInfo(props: any) {
   const dispatch = useDispatch();


   const city = useSelector((state: RootStateOrAny) => state.weatherForecast.cityForecast);
   const weather = useSelector((state : RootStateOrAny) => state.weatherForecast.weatherObject);
   const forecast = useSelector((state: RootStateOrAny) => state.weatherForecast.forecastObject);
   const dateFromStore = useSelector((state: RootStateOrAny) => state.weatherForecast.date);



   useEffect(() => {
      console.log(forecast);      
   }, [forecast]);

   useEffect(() => {
      console.log(dateFromStore);      
   }, [dateFromStore]);

      console.log(forecast?.list);
      let unixTimeList = forecast?.list;

      const listTimeFull = unixTimeList?.map(function(unixTime:any) {
         let a = new Date(unixTime.dt*1000);
         const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
         let year = a.getFullYear();
         let month = months[a.getMonth()];
         let date = a.getDate();
         // let day = a.getDay();
         
         const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
         let day = days[a.getDay() - 1];
         console.log(day);

         let fullDate = date + ' ' + month + ' ' + year + ' ' + day;

         let hour = a.getHours() <= 9 ? '0' + a.getHours() : a.getHours();
         let min = a.getMinutes() <= 9 ? '0' + a.getMinutes() : a.getMinutes();
         let sec = a.getSeconds();
         let time = hour + ':' + min;

         return {
            date_value: fullDate,
            time_value: time,
            day: day,
            temperature: unixTime?.main?.temp,
            feels_like: unixTime?.main?.feels_like,
            pressure: unixTime?.main?.pressure,
            humidity: unixTime?.main?.humidity,
            clouds: unixTime?.weather[0].description,
            icon: unixTime?.weather[0].icon,
            wind_speed: unixTime?.wind?.speed,
            gust: unixTime?.wind?.gust,
            wind_direction: unixTime?.wind?.deg,
         };
      });

   console.log(listTimeFull);

   const listTimeFullDateValue = listTimeFull?.map((value:any) => {
      return value?.date_value;
   });
   const listTimeUnique = Array.from(new Set(listTimeFullDateValue));

   useEffect(() => {
      if (listTimeFullDateValue) {
         dispatch(setDate(listTimeFullDateValue[0]));
      }
   }, [forecast]);  


   const listTimeFullTimeValue = listTimeFull?.map((value:any) => {
      if (value?.date_value === dateFromStore) {
         const iconImage = `http://openweathermap.org/img/wn/${value?.icon}@2x.png`;
         return (<div key={value?.time_value} className={"weatherForecast__forecast__element_weather"}>
            <p className="weatherForecast__forecast__time_value">
               {value?.time_value}
            </p>
            <p className="weatherForecast__forecast__icon_picture">
               <img src={iconImage} alt={value?.icon} />
            </p>
            <p>
               {Math.round(value?.temperature)}
            </p>
            <p>
               {Math.round(value?.feels_like)}
            </p>
            <p>
               {Math.round(value?.pressure*0.75006)}
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


   const handleButtonDate = (e:any) => {
      console.log(e.target.name);
      dispatch(setDate(e.target.name));
   }

   const listDate = listTimeUnique.map((date:any) => {
      let a = date.split(' ');
      let day = a?.pop();
      let today = a.join(' ');
      return (
         <Button key={date} onClick={handleButtonDate} text={today} info={day} className={date === dateFromStore ? "button_day__active" : "button_day_all"} name={date} />
      )
   });

   useEffect(() => {
      console.log(city);
      console.log(weather);
   }, [city]);

   return (<div>
      <div className={weather?.cod === 200 ? "weatherForecast__information" : "weatherForecast__information_hidden"}>
         <div className="weatherForecast__information_city">
            <p>Chosen city:
               <p className="weatherForecast__information_cityName">{weather?.cod === 200 ? weather?.name : weather?.message}</p>
            </p>
         </div>
         <div>{forecast?.warning ? forecast?.warning : ""}</div>
         <div className="weatherForecast__forecast">
            {listDate}
         </div>
         <div className={dateFromStore !== "" ? "weatherForecast__forecast__data" : "weatherForecast__forecast__no_data"}>
            <div className="weatherForecast__forecast__name">
               <p>Time</p>
               <p className="weatherForecast__forecast__icon_name">Weather</p>
               <p>Temperature, C</p>
               <p>Feels like, C</p>
               <p>Pressure, mm Hg</p>
               <p>Humidity, %</p>
               <p>Wind, m/s</p>
               <p>Gust, m/s</p>
               <p>Direction</p>
            </div>
            <div className="weatherForecast__forecast__data__info">{listTimeFullTimeValue}</div>
         </div>
      </div>
   </div>
   )
};

export default WeatherForecastInfo;