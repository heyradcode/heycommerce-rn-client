import { axiosInstance } from './axios';

export const checkout = (body) => {
  return axiosInstance.post('/checkout', body)
    .then((response) => response.data)
    .catch((err) => {
      console.warn(err);
      return {};
    });
};
