import fetch from 'isomorphic-fetch';


const token = 'Atza%7CIwEBIGXFfppgf9xIf0KrY8Wtxhoc7J\
aI72BnsDDv2PsHNhnm5cJ50BKvD0yg5wYn3xWeCN6hAYqHbmbFE5X\
edNARtBanVBpUYcAkhe7lOfdT7cuBACryaucIlaZwArtLx78yqXyuc\
EIu_2IX_w0MqDIz8CSHSTuiX-Gx_4QDputnV7-YuBS2Wc7LnDkxqT4\
dA7eOK9phxu5H7xyyjroK6ybd-qkEhSF4akhiK5SyiESWOSM4Ldyg48\
g5XwdcM5OhN2OWjHOmTFT-qQ4sE1j-cyq74z24TfCdWzei-fDsUu4Bc\
3QTMao2WZCvhj48NRgYPojXpP54rUujYPhEA5IVuDRrfBgKWnTVKwN5P\
NB0veEhTuyMNNuiHSxe_BqO_soG-7qgOiJ0mRsVVNY6oqcf7mIXpwDDOs\
gxdqyKNjW8Z1yRXVR3fGNRTI8pFbIBv4ObNxfftDj8JsTQ08ITF1p5_XN\
jHcufLaf-vELHC8N9OTBhKBurO8hG9d8VYVtyi_eyL_Nw3YIG1yeRIMMJd2oh\
VzOuD4QEhABJ5fn0-Ma1v2LSLQ_oNFrwX5FlncsUwhgtDM4yiOY';
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


