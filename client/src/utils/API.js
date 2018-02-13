
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

    getLocalTrucks: (lat, lng, dist) => {
        if(!dist) return axios.get(`/public/getLocalTrucks/${lat}/${lng}`);
        else return axios.get(`/public/getLocalTrucks/${lat}/${lng}/${dist}`);
    } 
}