import { all } from 'redux-saga/effects';

import ProductSaga from './product';
import PromoSaga from './promo';
import CheckoutSaga from './checkout';

export default function* mainSaga() {
  yield all([
    ProductSaga(),
    PromoSaga(),
    CheckoutSaga(),
  ]);
}
