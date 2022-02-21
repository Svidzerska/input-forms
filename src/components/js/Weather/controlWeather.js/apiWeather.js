
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

   getIconImage: ((code) => {
      return getIconImageFromCode('GET', code);
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

async function getIconImageFromCode(method, icon) {
   try {
      let result = await fetch(`http://openweathermap.org/img/wn/${icon}@2x.png`, {
      });
      return result;
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
      let json = await result.json();
      return json;
   } catch (err) {
      var error = new Error(err);
      return error;
   }
} 



// function getUkraineCities(method, country) {
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, "https://countriesnow.space/api/v0.1/countries/cities");
//       xhr.responseType = "json";
//       xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//       xhr.onload = () => {
//          if (xhr.status === 200) {
//             resolve(xhr.response);
//          } else {
//             var error = new Error(this.statusText);
//             error.code = this.status;
//             reject(error);
//          }
//       }
//       xhr.onerror = () => {
//          reject(new Error("Network Error"));
//       }
//       xhr.send(country);
//    })
// }

export default ApiWeather;