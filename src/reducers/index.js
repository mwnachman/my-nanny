import { combineReducers } from 'redux';
import ChildrenReducer from './children';
import ActiveChildReducer from './activeChild';
import DashboardReducer from './dashboard';

const allReducers = combineReducers({
  children: ChildrenReducer,
  activeChild: ActiveChildReducer,
  dashboard: DashboardReducer
});

export default allReducers;
