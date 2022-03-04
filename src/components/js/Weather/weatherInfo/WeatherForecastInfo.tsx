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
   const icon = useSelector((state: RootStateOrAny) => state.weather.iconImage);



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
         const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
         let year = a.getFullYear();
         let month = months[a.getMonth()];
         let date = a.getDate();

         let fullDate = date + ' ' + month + ' ' + year;

         let hour = a.getHours() <= 9 ? '0' + a.getHours() : a.getHours();
         let min = a.getMinutes() <= 9 ? '0' + a.getMinutes() : a.getMinutes();
         let sec = a.getSeconds();
         let time = hour + ':' + min;
         console.log(typeof time);

         return {date_value: fullDate, time_value: time};
      });

   console.log(listTimeFull);

   const listTimeFullDateValue = listTimeFull?.map((value:any) => {
      return value?.date_value;
   });

   console.log(dateFromStore);
   const listTimeFullTimeValue = listTimeFull?.map((value:any) => {
      if (value?.date_value === dateFromStore) {
         return (<div key={value?.time_value}>
            <p>
               {value?.time_value}
            </p>
         </div>
         )
      }
   });

   const listTimeUnique = Array.from(new Set(listTimeFullDateValue));
   console.log(listTimeUnique);

   const handleButtonDate = (e:any) => {
      console.log(e.target.className);
      dispatch(setDate(e.target.className));
   }

   const listDate = listTimeUnique.map((date:any) => {
      return (
         <Button key={date} onClick={handleButtonDate} text={date} className={date}></Button>
      )
   });



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
            {listDate}
         </div>
         <div className="weatherForecast__forecast__data">
            <div><p>Time</p></div>
            {listTimeFullTimeValue}
         </div>
      </div>
   </div>
   )
};

export default WeatherForecastInfo;