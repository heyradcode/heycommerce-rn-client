import { createAction, handleActions } from 'redux-actions';

export const actions = {
  applyPromo: 'PROMO/APPLY_PROMO',
  setDiscount: 'PROMO/SET_DISCOUNT',
};

export const applyPromo = createAction(actions.applyPromo);

const initialState = {
  discount: 0,
};

export default handleActions(
  {
    [actions.setDiscount]: (state, action) => ({
      ...state,
      discount: action.payload,
    }),
  },
  initialState,
);
