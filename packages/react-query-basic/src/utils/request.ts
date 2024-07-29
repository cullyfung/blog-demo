import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:7921'
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default request;
