export const activateChild = (child) => {
  console.log('Click on child: ', child.name);
  return {
    type: 'ACTIVE_CHILD',
    payload: child
  };
};
