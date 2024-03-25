import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem('jwt')
  }
});

export default Axios;
