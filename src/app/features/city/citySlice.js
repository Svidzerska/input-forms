//reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   selectCity: ""    //city - initial state empty string!
}


export const citySlice = createSlice({
   name: 'city',
   initialState,
   reducers: {
      setCity: (state, action) => {
         console.log(action);
         state.selectCity = action.payload
      },
   },
})

export const {setCity} = citySlice.actions;
export default citySlice.reducer;