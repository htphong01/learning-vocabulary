import axios from 'axios';

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api/v1`,
});

export default instance;