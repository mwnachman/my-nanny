// import STUBS_ACCOUNT from '../stubs/account';

// var account = function() {
//   return STUBS_ACCOUNT;
// };

import { REQUEST_ACCOUNT, RECEIVE_ACCOUNT } from '../actions/account';

const AccountReducer = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_ACCOUNT:
    console.log('REQUEST_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_ACCOUNT:
    console.log('RECEIVE_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: false
    });
  default:
    return state;
  }
};

module.exports = AccountReducer;
