var activeChild = function(state = null, action) {
  if (action.type === 'CHILD_SELECTED') {
    return action.payload;
  }
  return state;
};

module.exports = activeChild;