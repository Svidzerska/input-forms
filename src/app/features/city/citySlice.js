//reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   selectCity: ""
}


export const citySlice = createSlice({
   name: 'city',
   initialState,
   reducers: {
      setCity: (state, action) => {
         state.selectCity = action.payload
      },
   },
})

export const {setCity} = citySlice.actions;
export default citySlice.reducer;