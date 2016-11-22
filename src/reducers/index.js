import { combineReducers } from 'redux';
import ChildrenReducer from './children';
import ActiveChildReducer from './activeChild';

const allReducers = combineReducers({
  children: ChildrenReducer,
  activeChild: ActiveChildReducer
});

export default allReducers;
