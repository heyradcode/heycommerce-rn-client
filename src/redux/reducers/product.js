import { createAction, handleActions } from 'redux-actions';

export const actions = {
  fetchProducts: 'PRODUCT/FETCH_PRODUCTS',
  setProducts: 'PRODUCT/SET_PRODUCTS',
  setProductsLoading: 'PRODUCT/SET_PRODUCTS_LOADING',
};

export const fetchProducts = createAction(actions.fetchProducts);
export const setProducts = createAction(actions.setProducts);

const initialState = {
  items: [],
  loading: false,
};

export default handleActions(
  {
    [actions.setProducts]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [actions.setProductsLoading]: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  initialState,
);
