import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from '../features/cities/citiesSlice'


export const store = configureStore({
  reducer: {
      cities: citiesSlice,
  }
})