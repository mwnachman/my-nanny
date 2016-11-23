import { combineReducers } from 'redux';
import ActiveChildReducer from './activeChild';
import DashboardReducer from './dashboard';
import AccountReducer from './account';
import ChoresReducer from './chores';
import ScheduleReducer from './schedule';

const allReducers = combineReducers({
  activeChild: ActiveChildReducer,
  dashboard: DashboardReducer,
  account: AccountReducer,
  chores: ChoresReducer,
  schedule: ScheduleReducer
});

export default allReducers;

// // Unified Reducer
// export default ( state = {}, action) => {
// 	let newState = JSON.parse(JSON.stringify(state));
// 	// switch on action.type
// 		// case 
// 			newState.chore = action.chore;
// 		// other case
// 	return newState;
// };