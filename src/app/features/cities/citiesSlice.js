import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather/apiWeather";

const initialState = {
   cities: []
}


export const getCities = createAsyncThunk(
   'cities/getCities',
   async (_,{rejectWithValue, dispatch}) => {
      ApiWeather.getCities().then(data => {
         data?.sort();
         dispatch(setCities(data));
      });
   },
)


export const citiesSlice = createSlice({
   name: 'cities',
   initialState,
   reducers: {
      setCities: (state, action) => {
         console.log(action);
         state.cities = action.payload
      }
   },
   extraReducers: {
      [getCities.fulfilled] : () => console.log('fullfiled'),
      [getCities.pending] : () => console.log('pending'),
      [getCities.rejected] : () => console.log('rejected'),
   }

})

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;