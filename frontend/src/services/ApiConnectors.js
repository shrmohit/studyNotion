import axios from 'axios';

const apiConnector = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiConnector;
