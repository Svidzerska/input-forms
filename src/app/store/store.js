import { configureStore } from '@reduxjs/toolkit'
import citySlice from '../features/city/citySlice'
import citiesSlice from '../features/cities/citiesSlice'

export const store = configureStore({
  reducer: {
      city: citySlice,
      cities: citiesSlice
  }
})