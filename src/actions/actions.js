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
  } else if (endpoint === 'getChildren') {
    return 'https://localhost:1337/api/children?access_token=';
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

export const requestChildren = (token) => {
  return {
    type: 'REQUEST_CHILDREN',
    payload: token
  };
};

export const receiveChildren = (children) => {
  return {
    type: 'RECEIVE_CHILDREN',
    payload: children
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

export const toggleEditable = () => {
  return {
    type: 'TOGGLE_EDITABLE'
  };
};

export const toggleEditChild = (id, name, phone, show, editable) => {
  const obj = {
    id: id,
    name: name,
    phone: phone,
    show: show,
    editable: editable
  };
  return {
    type: 'TOGGLE_CHILD_EDIT',
    payload: obj
  };
};

export const toggleShowChild = (id) => {
  return {
    type: 'TOGGLE_CHILD_SHOW',
    payload: id
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
    .then((account) => {
      dispatch(receiveAccount(account));
      dispatch(requestChildren(token));
      return fetch(url('getChildren') + token);
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad res from server.');
      }
      return res.json();
    })
    .then(function(list) {
      dispatch(receiveChildren(list));
      list.children.forEach((child) => {
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
      console.log('Error fetching account:', err);
    });
  };
};
