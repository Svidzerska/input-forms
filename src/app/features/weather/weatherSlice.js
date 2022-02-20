import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather.js/apiWeather";
import { useSelector } from "react-redux";

const initialState = {
   weather: {}
}

export const getWeather = createAsyncThunk(
   'weather/getWeather',
   async (city, { rejectWithValue, dispatch }) => {
      
      ApiWeather.getWeather(city).then(data => {
         dispatch(setWeather(data));
      });
   },
)


export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      setWeather: (state, action) => {
         state.weatherObject = action.payload
      }
   },
   extraReducers: {
      [getWeather.fulfilled] : () => console.log('fullfiled'),
      [getWeather.pending] : () => console.log('pending'),
      [getWeather.rejected] : () => console.log('rejected'),
   }

})

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;