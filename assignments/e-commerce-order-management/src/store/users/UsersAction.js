

import axios from 'axios';

import { GET_USERS } from '../types';

export const getUsers = () => (dispatch) => {
  console.log('country action called');
  const baseurl = window.location.origin;
  console.log(baseurl);
  axios.get(`${baseurl}/apis/userlist.json`).then((res) => {
    if (res.status === 200 && res.data.data) {
      console.log('users fetched', res.data.data);

      dispatch({
        type: GET_USERS,
        payload: res.data.data,
      });
    }
  });
};
