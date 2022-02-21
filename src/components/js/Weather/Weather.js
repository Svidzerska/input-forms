import React from "react";
import Select from "../ElementForm/Select_component";
import './weatherPage.css';
import WeatherInfoResult from "./weatherInfo/WeatherInfoResult";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCity } from '../../../app/features/city/citySlice'
import { getCities } from "../../../app/features/cities/citiesSlice";
import { getWeather } from '../../../app/features/weather/weatherSlice';


function Weather(props) {

   const dispatch = useDispatch();

   const citiesStore = useSelector((state) => state.cities.cities);
   const city = useSelector((state) => state.city.selectCity);

   useEffect(() => {
      console.log(city);
      dispatch(getWeather(city));
   }, [city]);

   useEffect(() => {
      dispatch(getCities());
   }, []);

   const select_city = citiesStore?.map(city => {
      return { value: city, label: city }
   });
   
   select_city?.unshift({ value: 'Choose city', label: 'Choose city' });

   const handleChange = (e) => {
      console.log()
      dispatch(setCity(e.target.value));
   }

   return (<div className="weatherPage">
      <Select size="1" multiple className="weatherPage_select" onChange={handleChange} options={select_city ? select_city : [{ value: 'Choose city', label: 'Choose city' }]} />
      <WeatherInfoResult />
   </div>
   )
};

export default Weather;