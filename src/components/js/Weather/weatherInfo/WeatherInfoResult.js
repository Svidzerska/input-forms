import React from "react";
import {useSelector} from 'react-redux';
import {useEffect} from 'react';



function WeatherInfoResult(props) {
   const city = useSelector((state) => state.city.selectCity)
   const weather = useSelector((state) => state.weather.weatherObject);

   useEffect(() => {
      console.log(weather);
   }, [weather]);


   // let temp = weather.main.temp;
   // let feel_temp = weather.main.feels_like;
   // let cloud = weather.clouds;
   // let precipitation = weather.weather[0].description;
   // let icon = weather.weather[0].icon;


   return (
   <div className="weatherPage__information">
         <div><p>{city}</p></div>
         
         <div>
            <p>{weather?.weather[0]?.description}</p>
         </div>
         <div>
            <p>{weather?.main?.temp} &#176;C</p>
         <p>feels like:<br/>{weather?.main?.feels_like} &#176;C</p>
          </div>
      
   
   </div>
   )
};

export default WeatherInfoResult;