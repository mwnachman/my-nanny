import fetch from 'isomorphic-fetch';

const token = 'Atza%7CIwEBIMQORihhRsCllsjA8Y-nBbDANadgT2axomyG4Hz04RImkuAqGM\
qIHrQfdFkCAVOTVZX6yl5OocEy1STAJPwFj860j62fw3Z_-ELqO5Outxc1bORCa3w2SSupqWE-2Lk\
x5MdxDX5BJnFbhd27brG77GkDzPHw0LV5OzMtjgm2UTppd2OY3HmFZaPzuXWRH_Uu4isRfdiW5kntzmz\
WDrBFdPgDHdBFRc6MuYcSMcYbhd0m322bIVPa1Av_Kqs_jiSiJreBhnIGvqFtpJbVFfLgttSp_htNVrvyRM\
wY86pLZmyCXTFpX-7DFQNGTZi3a7-NJ_NjFsB58EB1q7WAnYKOZG9Q9V2AmW6N4QRmbDYV8HPnn9qX8I3rQUcWEGa74\
KdZM36YtFavHoly_rPSAzY7ZGOgRcFISg0LPM91dci-etLZ0_X6ijKBm3JIhnxxICY8T0rB69kPvfmYP5MW3GXBkVnx7WpC\
ILnI482wMB0q_UDWP7UzNiZpPjNQFMBdHVd4cNsyUWBYgcSxzogkoslD5pulvyFOMt8QjHtiWofZY82MoKz1lOb9dSkpNxpRlWehxuE';
const DASHBOARD_STUB = 'https://localhost:1337/api/account?access_token=' + token;

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

export const requestAccount = (account) => {
  console.log('requested account: ', account);
  return {
    type: 'REQUEST_ACCOUNT',
    payload: account
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

export const receiveAccount = (account, json) => {
  console.log('received account: ', account);
  return {
    type: 'RECEIVE_ACCOUNT',
    payload: account,
    data: json
  };
};

export const getAccount = (account) => {
  // console.log('getAccount fired');
  return function(dispatch) {
    console.log('inside dispatch');
    dispatch(requestAccount(account));
    return fetch(DASHBOARD_STUB)
      .then((data) => {
        console.log('api data:', data);
      });
  };
};
