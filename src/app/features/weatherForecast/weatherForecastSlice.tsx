import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import ApiWeather from "../../../components/js/Weather/controlWeather/apiWeather";


interface InitialState {
   cityForecast: string,
   coord: {}
   weatherObject: {},
   iconImage: string,
   forecastObject: {},
   date: string
}

interface Data {
   data: any
}
 

const initialState = {
   cityForecast: "",
   coord: {},
   weatherObject: {},
   iconImage: "",
   forecastObject: {},
   date: ""
} as InitialState



export const getWeatherCoord = createAsyncThunk<
Data ,
string
>(
   'weatherCoord/getWeatherCoord',
   async (city : string, { rejectWithValue }) => {
      return ApiWeather.getWeather(city)?.then(data => {
         console.log(data);
         return data ;  //payload - data
      }) as Promise<Data>;
   },
)

export const getWeatherForecast = createAsyncThunk<
Data,
any
>(
   'weatherForecast/getWeatherForecast',
   async (coordinates, { rejectWithValue }) => {
      return ApiWeather.getForecast(coordinates)?.then(data => {
         console.log(data);
         return data ;  //payload - data
      }) as Promise<Data>;
   },
)


//using coord get forecast


export const weatherForecastSlice = createSlice({
   name: 'weatherForecast',
   initialState,
   reducers: { 
      setIcon: (state, action : PayloadAction<string>) => {
         state.iconImage = action.payload
      }, 
      setCityForecast: (state, action : PayloadAction<string>) => {
         state.cityForecast = action.payload
      },
      setCoordinates: (state, action : PayloadAction<string>) => {
         state.coord = action.payload
      },
      setDate: (state, action : PayloadAction<string>) => {
         state.date = action.payload
      }
   },

   extraReducers: (builder) => {
      builder.addCase(getWeatherCoord.fulfilled, (state, action) => {
         state.weatherObject = action.payload;
      });
      builder.addCase(getWeatherCoord.pending, (state) => {
         state.weatherObject = {warning : 'please wait a moment'};
         console.log('pending')});
      builder.addCase(getWeatherCoord.rejected, (state) => {
         state.weatherObject = {};
         console.log('rejected')
      });


      builder.addCase(getWeatherForecast.fulfilled, (state, action) => {
         state.forecastObject = action.payload;
      });
      builder.addCase(getWeatherForecast.pending, (state) => {
         state.forecastObject = {warning : 'please wait a moment'};
         console.log('pending')});
      builder.addCase(getWeatherForecast.rejected, (state) => {
         state.forecastObject = {};
         console.log('rejected')
      });
   },
   
},
)

export const { setIcon, setCityForecast, setCoordinates, setDate } = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;

