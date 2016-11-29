import fetch from 'isomorphic-fetch';


const token = 'Atza%7CIwEBIJhiR6HIzHfwaEEA9a96hwBhFSzVst\
0jkl_3XOj88KkjuU-S79k5tM_tTTpHhF3OaZKxFPK69G5zkI3h9VeGrrz\
yTCmP_wMmfl7ZDDSoZntk5xQHsntQ5YSx8jLx688B30ochmXacgjeIKdXp\
ekeK6giPnPsb-e4XxFLtd-2z9AmpdOTkyzkwBlB4fJR9GwRH7grcsLmXRdl\
mY-xOyIjr01R4uc800ku-PuGcNWUcN6jpWHDQlWYbQk0Gw4Jzzjp6aFM93\
c0tSJjFpscbjnt2MBcytJVLvyCsBXzgtiKjMJoilMYZVOWV4cVi1PvRVO4\
BxBS8GmqbBD3fwV6JGOI5CzKqgrIv6lK3m9c8mvnJrjsp7q9dDMpKp4kN0\
pqYEbH1BtyCNllENkKYwHDio3qJrFAyplZiEsfMdd1iLdJ3_Zv7zW59VY4i\
Go9sgxpCtKSqfijnJsaHzrApk5A33XhnS1WLJORy-nAp8m4yLOig-g-imFSaFicYLzEu_\
iHAxVzzeGWK8w2DK25mOXrb76QhbSQYfqKts4a3c8Kk2-AIcKC-w';
const url = 'https://localhost:1337/api/account?access_token=' + token;

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

export const requestAccount = (account) => {
  console.log('requested account');
  return {
    type: REQUEST_ACCOUNT,
    payload: account
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

export const receiveAccount = (accountData, json) => {
  console.log('received account: ', accountData);
  var obj = {
    type: RECEIVE_ACCOUNT,
    payload: accountData,
    data: json
  };
  console.log('obj', obj);
  console.log('email', accountData.email);
  return obj;
};

export const getAccount = (account) => {
  console.log('inside getAccount');
  return function(dispatch) {
    dispatch(requestAccount(account));
    return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(data) {
      console.log('api data:', data);
      dispatch(receiveAccount(data));
    });
  };
};


