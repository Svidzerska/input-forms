import React from "react";
import {useSelector} from 'react-redux';


function WeatherInfoResult(props) {
   const city = useSelector((state) => state.cities.selectCity)

   return (
   <div className="weatherPage__information">{city}</div>
   )
};

export default WeatherInfoResult;