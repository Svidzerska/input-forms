import React from "react";
import Select from "../ElementForm/Select_component";
import './weatherPage.css';
import ApiWeather from "./controlWeather.js/apiWeather";
import WeatherInfoResult from "./weatherInfo/WeatherInfoResult";
import { useEffect } from "react";
import { useDispatch } from 'react-redux' ;
import {useSelector} from 'react-redux';
import {setCity} from '../../../app/features/city/citySlice'
import { getCities } from "../../../app/features/cities/citiesSlice";


function Weather(props) {

   const dispatch = useDispatch();

   const citiesStore = useSelector((state)=> state.cities.cities);
   const city = useSelector((state) => state.city.selectCity)

   // const getWeather = () => {
   //    ApiWeather.getWeather(city).then(data => console.log(data));  //city!!!
   // }


   useEffect(()=> {
      // getWeather();
   }, [city]);

   useEffect(()=> {
      console.log(citiesStore);
   }, [citiesStore]);

   

   useEffect(() => {
      dispatch(getCities());
   }, []);
   

   
   const select_city = citiesStore.map(city => {
      return {value: city, label: city}
   });
   select_city.unshift({value: 'Choose city', label: 'Choose city'});

   const handleChange = (e) => {
      dispatch(setCity(e.target.value));
   }

   return (<div className="weatherPage">
      <Select className="weatherPage_select" onChange={handleChange} options= {select_city}/>
      <WeatherInfoResult />
   </div>
   )
};

export default Weather;