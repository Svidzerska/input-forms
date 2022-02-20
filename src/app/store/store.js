import { configureStore } from '@reduxjs/toolkit'
import citySlice from '../features/city/citySlice'
import citiesSlice from '../features/cities/citiesSlice'
import weatherSlice from '../features/weather/weatherSlice'

export const store = configureStore({
  reducer: {
      city: citySlice,
      cities: citiesSlice,
      weather: weatherSlice,
  }
})