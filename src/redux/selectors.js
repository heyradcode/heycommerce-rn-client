import { createSelector } from 'reselect';

export const productsSelector = (state) => state.products.items;
export const cartSelector = (state) => state.cart;

export const cartTotalCount = createSelector(
  cartSelector,
  (cart) => Object.values(cart).reduce((a, b) => a + b, 0),
);

export const productsInCart = createSelector(
  productsSelector,
  cartSelector,
  (products, cart) => {
    const skus = Object.keys(cart).filter((sku) => cart[sku] > 0);
    return products.filter((product) => skus.includes(product.sku.toString()));
  },
);

export const subTotalSelector = createSelector(
  productsInCart,
  cartSelector,
  (products, cart) => {
    return products.reduce((a, b) => a + b.price * cart[b.sku], 0);
  },
);
