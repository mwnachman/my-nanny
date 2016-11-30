import fetch from 'isomorphic-fetch';


const token = localStorage.getItem('amazon-token');
const url = 'https://localhost:1337/api/account?access_token=' + token;

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

export const requestAccount = () => {
  // console.log('requested account');
  return {
    type: REQUEST_ACCOUNT
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

export const receiveAccount = (accountData) => {
  // console.log('received account: ', accountData);
  // console.log('obj', obj);
  // console.log('email', accountData.email);
  return {
    type: RECEIVE_ACCOUNT,
    payload: accountData
  };
};

export const getAccount = () => {
  // console.log('inside getAccount');
  return function(dispatch) {
    dispatch(requestAccount());
    return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(data) {
      // console.log('api data:', data);
      dispatch(receiveAccount(data));
    });
  };
};

export const updateAccountInStore = (username, phone, timezone, email) => {
  const newAccountData = {
    username: username,
    phone: phone,
    timezone: timezone, 
    email: email
  };
  return function(dispatch) {
    dispatch(receiveAccount(newAccountData));
  };
};

