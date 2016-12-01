const ScheduleReducer = (state = {
  isFetching: false,
  list: {}
}, action) => {
  if ( action.type === 'REQUEST_SCHEDULE' ) {
    return Object.assign({}, state, {
      isFetching: true
    });
  } else if ( action.type === 'RECEIVE_SCHEDULE' ) {
    let scheduleObj = {};
    for (let i = 0; i < action.payload.childList.length; i++) {
      choreObj[action.payload.childList[i]] = action.payload.chores[i].chores;
    }
    return Object.assign({}, state, {
      isFetching: false,
      list: choreObj
    });
  } else {
    return state;
  }
};

export default ScheduleReducer;
