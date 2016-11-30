import { combineReducers } from 'redux';
import AccountReducer from './account';
import ChildrenReducer from './children';

const allReducers = combineReducers({
  account: AccountReducer,
  children: ChildrenReducer
});

export default allReducers;
