import { SET_ACCOUNT } from '../action.types';

const initData = {
  account: null
};

const authReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;
