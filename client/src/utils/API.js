/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getUser: function () {
    return axios.get('https://randomuser.me/api/');
  },
};
