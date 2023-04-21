/** @format */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.imcas.com/v1/feedbacks/',
});

export default instance;
