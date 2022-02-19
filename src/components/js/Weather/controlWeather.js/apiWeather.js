
let countryObj = {
   country: `ukraine`
};
let country = JSON.stringify(countryObj);


const ApiWeather = {
   getWeather: ((city) => {
   return getWeatherCity('GET', city); //city?
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
           'Content-Type': 'application/json; charset=utf-8'
         },
         body: country
       });
      let json = await result.json();
      return json;
   } catch (err) {
      return err;
   }
} 

export default ApiWeather;