import { isEqual, pick } from 'lodash';

import { SET_ACCOUNT } from '../action.types';
import { users } from '../../constants';

const getUser = (account) => {
  return users.find((user) => isEqual(pick(user, [
    'countryCode',
    'phone',
    'password',
  ]), account));
};

export const fetchAccount = () => (dispatch) => {
  const storageData = localStorage.getItem('account');

  if (storageData) {
    const account = JSON.parse(storageData);
    const res = getUser(account);

    if (res) {
      dispatch({
        type: SET_ACCOUNT,
        payload: res,
      });
    }
  }
};

export const login = (account) => (dispatch) => {
  const res = getUser(account);

  if (res) {
    localStorage.setItem('account', JSON.stringify(account));
    dispatch({
      type: SET_ACCOUNT,
      payload: res,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('account');
  dispatch({
    type: SET_ACCOUNT,
    payload: null
  });
};
