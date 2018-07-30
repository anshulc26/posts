// const BACKEND_URL_REMOTE_PROD = 'https://test.com';
// const BACKEND_URL_REMOTE_STAGING = 'https://staging.test.com';
// const BACKEND_URL_LOCAL = 'http://localhost:3001';
const POSTS_API_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const POSTS_API_KEY = '?key=ANSHUL1234';
const POSTS_API_URL = `${POSTS_API_ROOT_URL}/posts${POSTS_API_KEY}`;

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

  getPostsApiUrl: function() {
    return POSTS_API_URL;
  },
};

module.exports = ConfigMain;
