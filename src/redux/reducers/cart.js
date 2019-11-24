import { createAction, handleActions } from 'redux-actions';

export const actions = {
  addToCart: 'CART/ADD_TO_CART',
  removeFromCart: 'CART/REMOVE_FROM_CART',
  removeLineFromCart: 'CART/REMOVE_LINE_FROM_CART',
};

export const addToCart = createAction(actions.addToCart);
export const removeFromCart = createAction(actions.removeFromCart);
export const removeLineFromCart = createAction(actions.removeLineFromCart);

const initialState = {};

export default handleActions(
  {
    [actions.addToCart]: (state, action) => {
      const itemSku = action.payload;
      const itemCount = state[itemSku] || 0;
      return {
        ...state,
        [itemSku]: itemCount + 1,
      };
    },
    [actions.removeFromCart]: (state, action) => {
      const itemSku = action.payload;
      const itemCount = state[itemSku];
      if (itemCount < 1) {
        return state;
      }

      return {
        ...state,
        [itemSku]: itemCount - 1,
      };
    },
    [actions.removeLineFromCart]: (state, action) => {
      const itemSku = action.payload;
      const { [itemSku]: itemCount, ...newState } = state;
      return newState;
    },
  },
  initialState,
);
