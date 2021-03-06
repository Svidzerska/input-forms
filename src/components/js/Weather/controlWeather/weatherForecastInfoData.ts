const d2d = require('degrees-to-direction');

const getForecastFullInfo = (forecastTimeList: any) => {
   const forecastFullInfo = forecastTimeList?.map(function (unixTimeWeather: any) {
      const a = new Date(unixTimeWeather.dt * 1000);

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const year = a.getFullYear();
      const month = months[a.getMonth()];
      const date = a.getDate();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[a.getDay()];

      const fullDate = date + ' ' + month + ' ' + year + ' ' + day;

      const hour = a.getHours() <= 9 ? '0' + a.getHours() : a.getHours();
      const min = a.getMinutes() <= 9 ? '0' + a.getMinutes() : a.getMinutes();
      const time = hour + ':' + min;

      return {
         date_value: fullDate,
         time_value: time,
         day: day,
         temperature: unixTimeWeather?.main?.temp,
         feels_like: unixTimeWeather?.main?.feels_like,
         pressure: unixTimeWeather?.main?.pressure,
         humidity: unixTimeWeather?.main?.humidity,
         clouds: unixTimeWeather?.weather[0].description,
         icon: unixTimeWeather?.weather[0].icon,
         wind_speed: unixTimeWeather?.wind?.speed,
         gust: unixTimeWeather?.wind?.gust,
         wind_direction: d2d(unixTimeWeather?.wind?.deg),
      };
   });
   return forecastFullInfo;
}


export { getForecastFullInfo };