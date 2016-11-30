const AccountReducer = (state = {
  isFetching: false,
  token: null,
  username: null,
  email: null,
  phone: null, 
  timezone: null,
  children: null
}, action) => {
  if ( action.type === 'REQUEST_ACCOUNT' ) {
    return Object.assign({}, state, {
      isFetching: true,
      token: action.payload
    });
  } else if ( action.type === 'RECEIVE_ACCOUNT' ) {
    let childObj = {};
    action.payload.children.forEach((child) => {
      childObj[child.id] = {
        name: child.name, 
        phone: child.phone
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
  } else {
    return state;
  }
};


export default AccountReducer;
