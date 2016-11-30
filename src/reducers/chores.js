const ChoresReducer = (state = {
  isFetching: false,
  date: null,
  list: []
}, action) => {
  if ( action.type === 'REQUEST_CHORES' ) {
    return Object.assign({}, state, {
      isFetching: true,
      date: action.payload.date
    });
  } else if ( action.type === 'RECEIVE_CHORES' ) {
    return Object.assign({}, state, {
      isFetching: false
    });
  } else {
    return state;
  }
};

export default ChoresReducer;
