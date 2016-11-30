import { combineReducers } from 'redux';
import AccountReducer from './account';
import ChoresReducer from './chores';
import ChildrenReducer from './children';

const allReducers = combineReducers({
  account: AccountReducer,
  children: ChildrenReducer,
  chores: ChoresReducer
});

export default allReducers;
