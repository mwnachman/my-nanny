import fetch from 'isomorphic-fetch';


export const requestSchedule = () => {
  return {
    type: 'REQUEST_SCHEDULE'
  };
};

export const receiveSchedule = (schedule) => {
  return {
    type: 'RECEIVE_SCHEDULE',
    payload: {
      childList: childList,
      chores: chores
    }
  };
};
export const getSchedule = (token, childId) => {
  const url = 'https://localhost:1337/api/children/:' + childId +
   '/schedule?access_token=' + token;
  return function(dispatch) {
    dispatch(requestSchedule());
    return fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad res from server.');
      }
      return res.json();
    })
    .then(function(account) {
      dispatch(receiveAccount(account));
      if (account.children) {
        dispatch(receiveChildren(account));
      }
      account.children.forEach((child) => {
        childIds.push(child.id);
      });
      dispatch(requestChores(date));
      var store = [];
      var activeId = 0;
      childIds.forEach((id) => {
        store.push(
          fetch(url('getChores', id, date) + token)
          .then(function(res) { 
            res = res.json();
            return res;
          })
        );
      });
      return Promise.all(store);
    })
    .then(function(chores) {
      dispatch(receiveChores(childIds, chores));
    })
    .catch(function(err) {
      console.log('caught error:', err);
    });
  };
};