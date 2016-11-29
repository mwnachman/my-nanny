import { REQUEST_ACCOUNT, RECEIVE_ACCOUNT } from '../actions/account';

const AccountReducer = (state = {
  isFetching: false,
  username: null,
  email: null,
  phone: null, 
  timezone: null
}, action) => {
  // console.log('action', JSON.stringify(action.payload));
  if ( action.type === REQUEST_ACCOUNT ) {
    // console.log('REQUEST_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: true
    });
  } else if ( action.type === RECEIVE_ACCOUNT ) {
    // console.log('RECEIVE_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: false,
      username: action.payload.username,
      email: action.payload.email,
      phone: action.payload.phone,
      timezone: action.payload.timezone
    });
  } else {
    return state;
  }
};


export default AccountReducer;
