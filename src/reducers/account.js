import { REQUEST_ACCOUNT, RECEIVE_ACCOUNT, TOGGLE_EDITABLE, 
  TOGGLE_CHILD_EDIT, TOGGLE_CHILD_SHOW } from '../actions/account';
import ChildrenReducer from './children';

const AccountReducer = (state = {
  isFetching: false,
  editable: false,
  token: null,
  username: null,
  email: null,
  phone: null, 
  timezone: null
}, action) => {
  if ( action.type === REQUEST_ACCOUNT ) {
    // console.log('REQUEST_ACCOUNT Reducer');
    return Object.assign({}, state, {
      isFetching: true,
      token: action.payload
    });
  } else if ( action.type === RECEIVE_ACCOUNT ) {
    // console.log('RECEIVE_ACCOUNT Reducer');
    // let childObj = {};
    // if (action.payload.children) {
    //   let kids = action.payload.children;
    //   for (var i = 0; i < kids.length; i++) {
    //     let child = action.payload.children[i];
    //     childObj[child.id] = {
    //       name: child.name,  
    //       phone: child.phone,
    //       show: true,
    //       editable: false
    //     };
    //   }
    // }
    return Object.assign({}, state, {
      isFetching: false,
      username: action.payload.username,
      email: action.payload.email,
      phone: action.payload.phone,
      timezone: action.payload.timezone
    });
  } else if ( action.type === TOGGLE_EDITABLE ) {
    console.log('TOGGLE_EDITABLE Reducer');
    return Object.assign({}, state, {
      editable: !state.editable
    });
  } else if ( action.type === TOGGLE_CHILD_EDIT ) {
    console.log('TOGGLE CHILD EDIT Reducer');
    // var childId = action.payload;
    // var child = {};
    // child[childId] = { editable: true };
    return Object.assign({}, state, { children: ChildrenReducer(state.account.children, action) });
  } else if ( action.type === TOGGLE_CHILD_SHOW ) {
    console.log('TOGGLE CHILD SHOW Reducer');
    return Object.assign({}, state, {

    });
  } else {
    return state;
  }
};


export default AccountReducer;
