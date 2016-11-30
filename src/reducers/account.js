import { REQUEST_ACCOUNT, RECEIVE_ACCOUNT, TOGGLE_EDITABLE } from '../actions/account';

const AccountReducer = (state = {
  isFetching: false,
  editable: false,
  token: null,
  username: null,
  email: null,
  phone: null, 
  timezone: null,
  children: null
}, action) => {
  if ( action.type === REQUEST_ACCOUNT ) {
    console.log('REQUEST_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: true,
      token: action.payload
    });
  } else if ( action.type === RECEIVE_ACCOUNT ) {
    console.log('RECEIVE_ACCOUNT Reducer');
    let childObj = {};
    action.payload.children.forEach((child) => {
      childObj[child.id] = {
        name: child.name, 
        phone: child.phone,
        show: true,
        editable: false
      };
    });
    return Object.assign({}, state, {
      isFetching: false,
      username: action.payload.username,
      email: action.payload.email,
      phone: action.payload.phone,
      timezone: action.payload.timezone,
      children: childObj
    });
  } else if ( action.type === TOGGLE_EDITABLE ) {
    console.log('TOGGLE_EDITABLE Reducer');
    return Object.assign({}, state, {
      editable: !state.editable
    });
  } else {
    return state;
  }
};


export default AccountReducer;
