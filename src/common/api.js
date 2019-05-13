import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '165a549863baa7b7e9828a05fc9c55a2';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });