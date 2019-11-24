import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.3.43:9001/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
