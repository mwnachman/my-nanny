import fetch from 'isomorphic-fetch';

const token = 'Atza%7CIwEBIOg84q4lxsZ_t6PgUqwZPJiIkIMd7sG3liQvU\
wL6p227HUk8giecPBwXA9Ur16hv__O7TZcQ4GNoDi9h0bPPTa8XcAVNSeChZtu2g\
TrUCz-SMizwzc_bwd3PCxD4FJUfeminDwgX4W088oO2MaNBqra81o4MPwDpPqvqIS\
nfTOgAL9prfISnuybNl3psoQKas_mIJS3rFEtIOpXfyrbbcS2gHNYXoeTEFtPG_NWA\
2Xz5dOCC4fg7L3CwSzaBuWNaWNdBWgUEpvkpaEbab6YHDvUGFiIyG0XlMh8VK-TwFqR\
YxrNrzUt4QB_6GMljvO16F7tWRqoYnWv3tjsGr8ZqiHKKw5v7ETBvU7OE4JetIhQsXf\
cQEVlErTV_So3g5pB80xACsDVdgkM3A17vEb559-sUpVoQjxYA5QTMjLt7I2MecdWzC\
11xfotTl6Q0AEwzym-5GxBWovc3yz-5-0-6gh8hCmwWcT5ro8JaykJQ_BbkFq\
5lNVnj77fEZNScMJhrJ2NJNKJNm68FnRzqdwcA9gkHnucBBv_wLC69SVq5QDOB2w';
const url = 'https://localhost:1337/api/account?access_token=' + token;

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

export const requestAccount = (account) => {
  console.log('requested account: ', account);
  return {
    type: REQUEST_ACCOUNT,
    payload: account
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

export const receiveAccount = (account, json) => {
  console.log('received account: ', account);
  return {
    type: RECEIVE_ACCOUNT,
    payload: account,
    data: json
  };
};

export const getAccount = (account) => {
  console.log('inside getAccount');
  requestAccount(account);
  fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(data) {
      console.log('api data:', data);
    });
};

