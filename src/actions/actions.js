import fetch from 'isomorphic-fetch';

const url = 'https://localhost:1337/api/account?access_token=';

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

export const requestAccount = (account) => {
  // console.log('requested account');
  return {
    type: REQUEST_ACCOUNT,
    payload: account
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

export const receiveAccount = (account) => {
  // console.log('received account: ', account);
  return {
    type: RECEIVE_ACCOUNT,
    payload: account
  };
};

export const getAccount = (token) => {
  return function(dispatch) {
    dispatch(requestAccount());
    return fetch(url + token)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(data) {
      dispatch(receiveAccount(data));
    });
  };
};
