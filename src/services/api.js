import axios from 'axios';

const API = "https://www.googleapis.com/books/v1";

const api = axios.create({
    baseURL: API
})

export default api;