import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import products from './product';
import cart from './cart';
import promo from './promo';
import checkout from './checkout';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['cart', 'promo'],
};

export default persistCombineReducers(persistConfig, {
  products,
  cart,
  promo,
  checkout,
});
