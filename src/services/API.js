import axios from 'axios';

const API = axios.create({
    baseURL: 'http://192.168.0.112:8000'
});

export default API