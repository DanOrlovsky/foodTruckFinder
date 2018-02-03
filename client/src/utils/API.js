import axios from 'axios';


export default {
    saveNewUser: (userData) => {
        return axios.post('/auth/signup', userData);
    }
}