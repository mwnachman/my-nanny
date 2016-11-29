import { combineReducers } from 'redux';
// import { REQUEST_ACCOUNT, RECEIVE_ACCOUNT } from '../actions/actions.js';
// import ActiveChildReducer from './activeChild';
// import DashboardReducer from './dashboard';
import AccountReducer from './account';
// import ChoresReducer from './chores';
// import ScheduleReducer from './schedule';

// const dashboardReducer = (state = {}, action) => {
//   switch (action.type) {
//   case REQUEST_ACCOUNT:
//     console.log('REQUEST_ACCOUNT Reducer');
//     return Object.assign({}, state, {
//       isFetching: true
//     });
//   case RECEIVE_ACCOUNT:
//     console.log('RECEIVE_ACCOUNT Reducer');
//     return Object.assign({}, state, {
//       isFetching: false
//     });
//   default:
//     return state;
//   }
// };


const allReducers = combineReducers({
  // dashboard: dashboardReducer, 
  account: AccountReducer
});

export default allReducers;

  // activeChild: ActiveChildReducer,
  // dashboard: DashboardReducer,
  // account: AccountReducer,
  // chores: ChoresReducer,
  // schedule: ScheduleReducer