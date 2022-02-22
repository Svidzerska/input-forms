import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather.js/apiWeather";

const initialState = {
   weatherObject: {},
   iconImage: "",
}



export const getWeather = createAsyncThunk(
   'weather/getWeather',
   async (city, { rejectWithValue }) => {

      return ApiWeather.getWeather(city).then(data => {
         console.log(data);
         return data;  //payload - data
      });
   },
)


export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: { 
      setIcon: (state, action) => {
         state.iconImage = action.payload
      }
   },
   extraReducers: { //preloader
      [getWeather.fulfilled] : (state,action) => {
         state.weatherObject = action.payload;
      console.log('fullfiled')},
      [getWeather.pending] : (state) => {
            state.weatherObject = {warning : 'please wait a moment'};
         console.log('pending')},
      [getWeather.rejected] : (state) => {
         state.weatherObject = {};
      console.log('rejected')} ,
   }

},
)

export const { setWeather, setIcon } = weatherSlice.actions;
export default weatherSlice.reducer;

