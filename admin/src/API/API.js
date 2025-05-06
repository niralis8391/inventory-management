import axios from 'axios';

const API = axios.create({
    baseURL: "https://inventory-management-f63m.onrender.com/"
})

export default API;