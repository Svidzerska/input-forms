import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather.js/apiWeather";


interface InitialState {
   weatherObject: {},
   iconImage: string
}

interface Data {
   data: any
}
 

const initialState = {
   weatherObject: {},
   iconImage: "",
} as InitialState



export const getWeather = createAsyncThunk<
Data ,
string
>(
   'weather/getWeather',
   async (city : string, { rejectWithValue }) => {
      return ApiWeather.getWeather(city)?.then(data => {
         console.log(data);
         return data ;  //payload - data
      }) as Promise<Data>;
   },
)


export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: { 
      setIcon: (state, action : PayloadAction<string>) => {
         state.iconImage = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(getWeather.fulfilled, (state, action) => {
         state.weatherObject = action.payload;
      });
      builder.addCase(getWeather.pending, (state) => {
         state.weatherObject = {warning : 'please wait a moment'};
         console.log('pending')});
      builder.addCase(getWeather.rejected, (state) => {
         state.weatherObject = {};
         console.log('rejected')
      })
   }
},
)

export const { setIcon } = weatherSlice.actions;
export default weatherSlice.reducer;

