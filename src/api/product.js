import { axiosInstance } from './axios';

export const fetchProducts = () => axiosInstance.get('/products')
  .then((response) => response.data)
  .catch((err) => {
    console.warn(err);
    return [];
  });
