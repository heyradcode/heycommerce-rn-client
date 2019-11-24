import { axiosInstance } from './axios';

export const applyPromo = (promoCode) => {
  const body = { promoCode };
  return axiosInstance.post('/promocode', body)
    .then((response) => response.data)
    .catch((err) => {
      console.warn(err);
      return {};
    });
};
