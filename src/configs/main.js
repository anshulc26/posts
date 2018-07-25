// const BACKEND_URL_REMOTE_PROD = 'https://test.com';
// const BACKEND_URL_REMOTE_STAGING = 'https://staging.test.com';
// const BACKEND_URL_LOCAL = 'http://localhost:3001';
const WEATHER_API_KEY = '279474140a7e021d1a490756645117b9';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

var ConfigMain = {
  getBackendURL: function() {
    // if (process.env.SOQQLE_ENV == 'local') {
    //   //front-end will be using remote staging backend, so no need to run local server
    //   return BACKEND_URL_REMOTE_STAGING;
    // } else if (process.env.SOQQLE_ENV == 'local_backend') {
    //   return BACKEND_URL_LOCAL;
    // } else {
    //   return process.env.SOQQLE_ENV == 'production' ? BACKEND_URL_REMOTE_PROD : BACKEND_URL_REMOTE_STAGING;
    // }
    return '';
  },
  // getCookiesExpirationPeriod: function() {
  //   //10 years
  //   return 10 * 365 * 24 * 60 * 60 * 1000;
  // },

  // ChallengesScannerDisabled: false,

  getWeatherApiUrl: function() {
    return WEATHER_API_URL;
  },
};

module.exports = ConfigMain;
