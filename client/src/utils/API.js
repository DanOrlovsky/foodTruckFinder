
import axios from 'axios';
import Auth from '../Modules/Auth';

export default {
    saveNewUser: (userData) => {
        return axios.post('/auth/signup', userData);
    },

    loginUser: (userData) => {
        return axios.post('/auth/login', userData);
    },

    getUserFromToken: () => {
        return axios.get('/auth/dataFromToken', Auth.getToken());
    },

    getLocalTrucks: (lat, lng) => {
        return axios.get(`/public/getLocalTrucks/${lat}/${lng}`);
    } 
}