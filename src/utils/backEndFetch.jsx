import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL +'/social';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response;
};

export const getRequest = (path) => {
  return axios
    .get(API_BASE + path, {
      withCredentials: true})
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getRequest failed ${err}`);
    });
};

export const postRequest = (path, body) => {
  return axios
    .post(API_BASE + path, body, {
      withCredentials: true})
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch postRequest failed ${err}`);
    });
};

export const deleteRequest = (path, body) => {
    return axios
      .delete(API_BASE + path, body, {
        withCredentials: true})
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch postRequest failed ${err}`);
      });
  };