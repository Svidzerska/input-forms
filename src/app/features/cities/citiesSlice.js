//reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   selectCity: ""
}


export const citiesSlice = createSlice({
   name: 'cities',
   initialState,
   reducers: {
      setCity: (state, action) => {
         state.selectCity = action.payload
      },
   },
})

export const {setCity} = citiesSlice.actions;
export default citiesSlice.reducer;