
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
        const data = { token: Auth.getToken() };
        return axios.post('/auth/dataFromToken/', data);
    },

    getLocalTrucks: (lat, lng, dist) => {
        if(!dist) return axios.get(`/public/getLocalTrucks/${lat}/${lng}`);
        else return axios.get(`/public/getLocalTrucks/${lat}/${lng}/${dist}`);
    } 
}