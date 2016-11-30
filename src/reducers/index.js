import { combineReducers } from 'redux';
import AccountReducer from './account';
import ChoresReducer from './chores';

const allReducers = combineReducers({
  account: AccountReducer,
  chores: ChoresReducer
});

export default allReducers;
