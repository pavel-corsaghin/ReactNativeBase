import {default as axios} from 'axios';
const BASE_URL = 'http://localhost:3000';
const BASE_OPTIONS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

const getRequestOptions = (method, path, data) => {
  const url = `${BASE_URL}${path}`;
  return {
    ...BASE_OPTIONS,
    method: method,
    url: url,
    data: data,
  };
};

const requestApi = async (method, path, data) => {
  const response = await axios(getRequestOptions(method, path, data));
  return response;
};

export default requestApi;
