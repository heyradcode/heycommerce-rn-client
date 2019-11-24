import { call, put, takeEvery } from 'redux-saga/effects';

import { actions } from '../reducers/product';

import * as productApi from '../../api/product';

export function* getProducts() {
  try {
    const products = yield call(productApi.fetchProducts);
    yield put({ type: actions.setProducts, payload: products });
  } catch (err) {
    // console.error('Product Saga Error: ', err);
  }
  yield put({ type: actions.setProductsLoading, payload: false });
}

export default function* Product() {
  yield takeEvery(actions.fetchProducts, getProducts);
}
