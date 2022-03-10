
const countryObj = {
   country: `ukraine`
};
const country = JSON.stringify(countryObj);


const ApiWeather = {
   getForecast: ((coordinates: any) => {
      return getWeatherForecast('GET', coordinates?.lat, coordinates?.lon);
   }),

   getWeather: ((city: string) => {
      if (city !== "") {
         return getWeatherCity('GET', city);
      }
   }),

   getCities: (() => {
      return getUkraineCities('POST', country);
   })
}


async function try_catch(url: string) {
   try {
      const result = await fetch(url);
      const json = await result.json();
      return json;

   } catch (err) {
      console.log(err);
      return err;
   }
}

function getWeatherForecast(method: string, lat: number, lon: number) {
   return try_catch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&lang=en&units=metric&appid=18403b04ed7c3c2c59d89a2a42ba33c0');
}

function getWeatherCity(method: string, city: string) {
   return try_catch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=en&units=metric&appid=18403b04ed7c3c2c59d89a2a42ba33c0');
}

async function getUkraineCities(method: string, country: string) {
   try {
      const result = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
         method: method,
         headers: {
            'Content-Type': 'application/json; charset=utf-8',
         },
         body: country
      });

      if (result.status === 200) {
         const json = await result.json();
         return json.data; //array of cities
      } else {
         console.log(result.status);
         return getUkraineCitiesGetRequest();
      }
   } catch (err: any) {
      const error = new Error(err);
      console.log(error);
      return getUkraineCitiesGetRequest();
   }
}

async function getUkraineCitiesGetRequest() {
   var headers = new Headers();
   headers.append("X-CSCAPI-KEY", "Z3M1RWlBWVNpcGZWMElQMGZlRlhBTkRYcGJ2S29lUTNlamZaaG44Qg==");

   interface RequestOptions {
      method: string,
      headers: typeof headers,
   }

   const requestOptions = {
      method: 'GET',
      headers: headers
   } as RequestOptions;

   try {
      const result = await fetch('https://api.countrystatecity.in/v1/countries/UA/cities',
         requestOptions);
      if (result.status === 200) {
         const json: Array<any> = await result.json();
         const cities = json.map((element) => element.name);
         return cities;
      } else {
         return result.status;
      }
   } catch (err: any) {
      const error = new Error(err);
      return error;
   }
}



export default ApiWeather;