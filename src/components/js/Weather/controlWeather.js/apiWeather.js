

let countryObj = {
   country: `ukraine`
};
let country = JSON.stringify(countryObj);


const ApiWeather = {
   getWeather: ((city) => {
      if (city !== "") {
         return getWeatherCity('GET', city);
      }
   }),

   getCities: (() => {
      return getUkraineCities('POST', country);
   })
}


async function getWeatherCity(method, city) {
   try {
      let result = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=en&units=metric&appid=18403b04ed7c3c2c59d89a2a42ba33c0');
      let json = await result.json();
      return json;
   } catch (err) {
      return err;
   }
}

async function getUkraineCities(method, country) {
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
         return json;
      } else {
         return result.status;
      }
   } catch (err) {
      var error = new Error(err);
      return error;
   }
}

// async function getUkraineCities(method, country) {
//    var headers = new Headers();
//    headers.append("X-CSCAPI-KEY", "API_KEY");

//    var requestOptions = {
//    method: 'GET',
//    headers: headers,
//    redirect: 'follow'
//    };

//    try {
//       let result = await fetch('https://api.countrystatecity.in/v1/countries/UA/cities', requestOptions);
//       let json = await result.json();
//       return json;
//    } catch (err) {
//       var error = new Error(err);
//       return error;
//    }
// } 



export default ApiWeather;