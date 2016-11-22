export const selectChild = (child) => {
  console.log('Click on child: ', child.name);
  return {
    type: 'CHILD_SELECTED',
    payload: child
  };
};
