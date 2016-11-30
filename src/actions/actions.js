import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

const url = (endpoint, id, startDate, endDate, page) => {
  if (endpoint === 'getAccount') {
    return 'https://localhost:1337/api/account?access_token=';
  } else if (endpoint === 'getChores') {
    return 'https://localhost:1337/api/children/' + id + '/chores?\
    start_date=' + startDate + '&end_date=' + endDate + '&page=' + page + '&access_token=';
  }
} ;

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

export const requestChores = (token, date) => {
  return {
    type: 'REQUEST_CHORES',
    payload: {
      token: token,
      date: date
    }
  };
};

export const receiveChores = (chores) => {
  return {
    type: 'RECEIVE_CHORES',
    payload: chores
  };
};

export const getAccount = (token, date) => {
  return function(dispatch) {
    dispatch(requestAccount(token));
    return fetch(url('getAccount') + token)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(account) {
      dispatch(receiveAccount(account));
      let childIds = [];
      account.children.forEach((child) => {
        childIds.push(child.id);
      });
      return childIds;
    })
    .then(function(childIds) {
      dispatch(requestChores(token, date));
      let chores = [];
      childIds.forEach((id) => {
        chores.push(fetch(url('getChores', id, date, date, 1) + token));
      });
      return chores;
    })
    .then(function(chores) {
      console.log('here are chores?', chores);
    });
  };
};
