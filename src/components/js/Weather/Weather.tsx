import React from "react";
import Select from "../ElementForm/Select_component";
import './weatherPage.scss';
import WeatherInfoResult from "./weatherInfo/WeatherInfoResult";
import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setCity } from '../../../app/features/city/citySlice'
import { getCities } from "../../../app/features/cities/citiesSlice";
import { getWeather } from "../../../app/features/weather/weatherSlice";

function Weather(props : any) {

   const dispatch = useDispatch();

   const citiesStore = useSelector((state : RootStateOrAny) => state.cities.cities);
   const city = useSelector((state : RootStateOrAny) => state.city.selectCity);

   useEffect(() => {
      console.log(city);
      dispatch(getWeather(city));
   }, [city]);

   useEffect(() => {
      dispatch(getCities());
   }, []);
   
   // console.log(citiesStore);

   const select_city = citiesStore?.map((city : string) => {
      return { value: city, label: city }
   });
   
   select_city?.unshift({ value: 'Choose city', label: 'Choose city' });

   const handleChange = (e : any) => {
      dispatch(setCity(e.target.value));
   }

   return (<div className="weatherPage">
      <Select size="1" multiple className="weatherPage_select" onChange={handleChange} options={select_city} />
      <WeatherInfoResult />
   </div>
   )
};

export default Weather;