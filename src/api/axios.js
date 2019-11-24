import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9001/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
