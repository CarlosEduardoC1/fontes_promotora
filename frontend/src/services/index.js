import axios from 'axios';
import { auth, username } from '../Rotas';

const api = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        "authorization": `Bearer ${auth}`,
        "username": username
    }
});

export default api;

