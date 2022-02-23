let countryObj = {
   country: `ukraine`
};
let country = JSON.stringify(countryObj);


const ApiWeather = {
   getForecast: ((coordinates: any) => {
      return getWeatherForecast('GET', coordinates?.lat, coordinates?.lon);
   }),

   getWeather: ((city : string) => {
      if (city !== "") {
         return getWeatherCity('GET', city);
      }
   }),

   getCities: (() => {
      return getUkraineCities('POST', country);
   })
}


async function getWeatherForecast(method : string, lat : number, lon : number) {
   try {
      let result = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&lang=en&units=metric&appid=18403b04ed7c3c2c59d89a2a42ba33c0');
      let json = await result.json();
      return json;

   } catch (err) {
      console.log(err);
      return err;
   }
}


async function getWeatherCity(method : string, city : string) {
   try {
      let result = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=en&units=metric&appid=18403b04ed7c3c2c59d89a2a42ba33c0');
      let json = await result.json();
      return json;

   } catch (err) {
      console.log(err);
      return err;
   }
}

async function getUkraineCities(method : string, country : string) {
   try {
      let result = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
         method: method,
         headers: {
            'Content-Type': 'application/json; charset=utf-8',
         },
         body: country
      });

      if (result.status === 200) {
         let json = await result.json();
         return json.data; //array of cities
      } else {
         console.log(result.status);
         return getUkraineCitiesGetRequest();
      }
   } catch (err : any) {
      let error = new Error(err);
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

   let requestOptions = {
   method: 'GET',
   headers: headers
   } as RequestOptions;

   try {
      let result = await fetch('https://api.countrystatecity.in/v1/countries/UA/cities',
      requestOptions);
      if (result.status === 200) {
         let json : Array<any> = await result.json();
         let cities = json.map((element) => element.name)
         return cities;
      } else {
         return result.status;
      }
   } catch (err : any) {
      let error = new Error(err);
      return error;
   }
}



export default ApiWeather;