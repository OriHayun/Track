import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instence = axios.create({
    baseURL: 'http://0f97526a.ngrok.io'
});

instence.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instence;