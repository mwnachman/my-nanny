import { TOGGLE_CHILD_EDIT, TOGGLE_CHILD_SHOW, RECEIVE_CHILDREN } from '../actions/account';

const ChildrenReducer = (state = {}, 
  action) => {
  if ( action.type === TOGGLE_CHILD_EDIT ) {
    console.log('TOGGLE CHILD EDIT Reducer Second');
    // var childId = action.payload;
    // var child = {};
    // child[childId] = { editable: true };
    var id = action.payload;
    return Object.assign({}, state, { 
      id: {
        editable: true
      }
    });
  } else if ( action.type === RECEIVE_CHILDREN ) {
    let childObj = {};
    if (action.payload.children) {
      let kids = action.payload.children;
      for (var i = 0; i < kids.length; i++) {
        let child = action.payload.children[i];
        childObj[child.id] = {
          name: child.name,  
          phone: child.phone,
          show: true,
          editable: false
        };
      }
    }
    return childObj;
  } else if ( action.type === TOGGLE_CHILD_SHOW ) {
    console.log('TOGGLE CHILD SHOW Reducer');
    return Object.assign({}, state, {

    });
  } else {
    return state;
  }
};


export default ChildrenReducer;
