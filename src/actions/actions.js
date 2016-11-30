import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

const url = (endpoint, id, startDate, endDate, page) => {
  startDate = startDate || '';
  endDate = endDate || '';
  page = page || 1;

  if (endpoint === 'getAccount') {
    return 'https://localhost:1337/api/account?access_token=';
  } else if (endpoint === 'getChores') {
    return 'https://localhost:1337/api/children/' + id + '/chores?' + 
    'start_date=' + startDate + '&end_date=' + endDate + '&page=' + 
    page + '&access_token=';
  }
};

export const requestAccount = (token) => {
  return {
    type: 'REQUEST_ACCOUNT',
    payload: token
  };
};

export const receiveAccount = (account) => {
  return {
    type: 'RECEIVE_ACCOUNT',
    payload: account
  };
};

export const requestChores = (date) => {
  return {
    type: 'REQUEST_CHORES',
    payload: {
      date: date
    }
  };
};

export const receiveChores = (childList, chores) => {
  return {
    type: 'RECEIVE_CHORES',
    payload: {
      childList: childList,
      chores: chores
    }
  };
};

export const getAccount = (token, date) => {
  let childIds = [];
  return function(dispatch) {
    dispatch(requestAccount(token));
    return fetch(url('getAccount') + token)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad res from server.');
      }
      return res.json();
    })
    .then(function(account) {
      dispatch(receiveAccount(account));
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
