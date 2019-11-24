import { createAction, handleActions } from 'redux-actions';

export const actions = {
  checkout: 'CHECKOUT/CHECKOUT',
};

export const checkout = createAction(actions.checkout);

const initialState = {};

export default handleActions(
  {},
  initialState,
);
