import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather.js/apiWeather";

const initialState = {
   weather: {},
   // icon: ""
}



export const getWeather = createAsyncThunk(
   'weather/getWeather',
   async (city, { rejectWithValue, dispatch }) => {
      
      ApiWeather.getWeather(city).then(data => {
         dispatch(setWeather(data)); //payload - data
      });
   },
)


export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      setWeather: (state, action) => {
         state.weatherObject = action.payload
      },
      // setIcon 
   },
   extraReducers: { //preloader
      [getWeather.fulfilled] : () => console.log('fullfiled'),
      [getWeather.pending] : () => console.log('pending'),
      [getWeather.rejected] : () => console.log('rejected'),
   }

},
)

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;

