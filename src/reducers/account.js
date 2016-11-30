const AccountReducer = (state = {
  isFetching: false,
  editable: false,
  token: null,
  username: null,
  email: null,
  phone: null, 
  timezone: null
}, action) => {
  if ( action.type === 'REQUEST_ACCOUNT' ) {
    return Object.assign({}, state, {
      isFetching: true,
      token: action.payload
    });
  } else if ( action.type === 'RECEIVE_ACCOUNT' ) {
    return Object.assign({}, state, {
      isFetching: false,
      username: action.payload.username,
      email: action.payload.email,
      phone: action.payload.phone,
      timezone: action.payload.timezone
    });
  } else if ( action.type === 'TOGGLE_EDITABLE' ) {
    console.log('TOGGLE_EDITABLE Reducer');
    return Object.assign({}, state, {
      editable: !state.editable
    });
  } else if ( action.type === 'TOGGLE_CHILD_EDIT' ) {
    console.log('TOGGLE CHILD EDIT Reducer');
    return Object.assign({}, state, {
    // TODO: Finish Reducer
    });
  } else if ( action.type === 'TOGGLE_CHILD_SHOW' ) {
    console.log('TOGGLE CHILD SHOW Reducer');
    return Object.assign({}, state, {
    // TODO: Finish Reducer
    });
  } else {
    return state;
  }
};

export default AccountReducer;
