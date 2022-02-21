import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../features/city/citySlice'
import citiesReducer from '../features/cities/citiesSlice'
import weatherReducer from '../features/weather/weatherSlice'
import iconReducer from '../features/weather/iconSlice'

export const store = configureStore({
  reducer: {
      city: cityReducer,
      cities: citiesReducer,
      weather: weatherReducer,
      icon: iconReducer,
  }
})