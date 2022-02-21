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

import list from "../../json/ua";

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

   console.log(list);

   const select_city_here = list.map(element => {
      // return { value: element.city, label: element.city }
      return element.city
   });

   console.log(select_city_here.sort());

   const select_city_here_sort = select_city_here?.sort().map(city => {
      return { value: city, label: city }
   });
   
   select_city_here_sort?.unshift({ value: 'Choose city', label: 'Choose city' });

   
   console.log(citiesStore);

   const select_city = citiesStore?.map(city => {
      return { value: city, label: city }
   });
   
   select_city?.unshift({ value: 'Choose city', label: 'Choose city' });

   const handleChange = (e) => {
      console.log()
      dispatch(setCity(e.target.value));
   }

   return (<div className="weatherPage">
      <Select size="1" multiple className="weatherPage_select" onChange={handleChange} options={select_city ? select_city : select_city_here_sort} />
      <WeatherInfoResult />
   </div>
   )
};

export default Weather;