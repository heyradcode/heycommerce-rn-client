import { Alert } from 'react-native';
import { call, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../reducers/checkout';

import * as checkoutApi from '../../api/checkout';
import { productsInCart, cartSelector } from '../selectors';

export function* checkout(action) {
  const { success, failure } = action.payload;
  const products = yield select(productsInCart);
  const cart = yield select(cartSelector);
  const body = {
    basket: products.map((product) => ({ sku: product.sku, quantity: cart[product.sku] })),
    cardNumber: '4539456463019519',
  };
  try {
    yield call(checkoutApi.checkout, body);
    success();
  } catch (err) {
    Alert.alert('Invalid code!');
    failure();
  }
}

export default function* Promo() {
  yield takeEvery(actions.checkout, checkout);
}
