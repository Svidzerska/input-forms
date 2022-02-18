import React from "react";
import Select from "../ElementForm/Select_component";
import './weatherPage.css';
import ApiWeather from "./controlWeather.js/apiWeather";
import WeatherInfoResult from "./weatherInfo/WeatherInfoResult";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux' ;
import {setCity} from '../../../app/features/cities/citiesSlice';
import {useSelector} from 'react-redux';

function Weather(props) {

   const dispatch = useDispatch();

   const [cities, setCities] = useState([]);
   const city = useSelector((state) => state.cities.selectCity)

   const getWeather = () => {
      ApiWeather.getWeather(city).then(data => console.log(data));
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
   }, [city]);

   
   const select_city = cities.map(city => {
      return {value: city, label: city}
   });

   console.log(select_city);

   // const getCitiesAction = {
   //    type: 'weather/getCitiesList',
   //    payload: ''
   // }

   // const initialState = {value:[]};

//    function getCitiesReducer(state = initialState, action = getCitiesAction) {
//   if (action.type === 'weather/getCitiesList') {
//     return {
//       ...state,
//       value: select_city
//     }
//   }
//   return state
// }

// const store = configureStore({ reducer: getCitiesReducer })

// console.log(store);

// store.dispatch({ type: 'weather/getCitiesList' });

// console.log(store);

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