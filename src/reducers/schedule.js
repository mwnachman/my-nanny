const ScheduleReducer = (state = {
  isFetching: false,
  list: []
}, action) => {
  if ( action.type === 'REQUEST_SCHEDULE' ) {
    return Object.assign({}, state, {
      isFetching: true
    });
  } else if ( action.type === 'RECEIVE_SCHEDULE' ) {
    let newSchedule = {};
    newSchedule.childId = action.payload.childId;
    for (var key in action.payload.schedule) {
      newSchedule[key] = action.payload.schedule[key];
    }
    console.log('newSchedule', newSchedule);
    console.log('list1', list);
    let list = state.list;
    console.log('list2', list);
    list = list.push(newSchedule);
    console.log('newSchedule', newSchedule);
    return Object.assign({}, state, {
      isFetching: false,
      list: list
    });
  } else {
    return state;
  }
};

export default ScheduleReducer;
