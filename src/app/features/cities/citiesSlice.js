import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather.js/apiWeather";

const initialState = {
   cities: []
}


export const getCities = createAsyncThunk(
   'cities/getCities',
   async (_,{rejectWithValue, dispatch}) => {
      ApiWeather.getCities().then(data => {
         console.log(data);
         console.log(data.data);
         dispatch(setCities(data.data));
      });
   },
)


export const citiesSlice = createSlice({
   name: 'cities',
   initialState,
   reducers: {
      setCities: (state, action) => {
         state.cities = action.payload
      }
   },
   extraReducers: {
      [getCities.fulfilled] : () => console.log('fullfiled'),
      [getCities.pending] : () => console.log('pending'),
      [getCities.rejected] : () => console.log('rejected'),
   }

})

export const { setCities } = citiesSlice.actions
export default citiesSlice.reducer