import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
  },
});

export default API;
