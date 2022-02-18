import Select from "../ElementForm/Select_component";
import './weatherPage.css';
import ApiWeather from "./controlWeather.js/apiWeather";
import { useEffect, useState } from "react";

function Weather(props) {

   const [cities, setCities] = useState([]);

   const getWeather = () => {
      ApiWeather.getWeather().then(data => console.log(data));
   }

   const getCity = () => {
      ApiWeather.getCity().then(data => {
         console.log(data.data);
         setCities(data.data)}
      );
   }

   useEffect(()=> {
      getWeather();
      getCity();
   },[]);

   
   const select_city = cities.map(city => {
      return {value: city, label: city}
   });

   console.log(select_city);



   return (<div className="weatherPage">
      <Select className="weatherPage_select" options= {select_city}/>
    <div className="weatherPage__information"></div>
   </div>
   )
};

export default Weather;