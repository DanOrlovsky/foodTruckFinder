// ---------------------------------------------------------------------------------------
// --- API . J S -------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Contains the functions that will use Axios to call our server and get data back.



import axios from 'axios';
import Auth from '../Modules/Auth';

export default {

    //  func: saveNewUser
    //  params: userData
    //  description: 
    //      Attempts to save new user data into the database
    saveNewUser: (userData) => {
        return axios.post('/auth/signup', userData);
    },

    //  func: loginUser
    //  params: userData
    //  description: 
    //      Attempts to find a user with matching credentials.  Returns a user object and a token
    //      to be saved.
    loginUser: (userData) => {
        return axios.post('/auth/login', userData);
    },

    //  func: getUserFromToken
    //  description: 
    //      Grabs a token from localStorage and attempts to get a user based on that token.
    getUserFromToken: () => {
        const data = { token: Auth.getToken() };
        return axios.post('/auth/dataFromToken/', data);
    },
    
    //  func: getLocalTrucks
    //  params: lat, lng, dist
    //  description: 
    //      Calls the route that will return OPEN food trucks based on the latitude and longitude
    //      of the user, and uses the dist parameter as a radius in miles.
    getLocalTrucks: (lat, lng, dist) => {
        if(!dist) return axios.get(`/public/getLocalTrucks/${lat}/${lng}`);
        else return axios.get(`/public/getLocalTrucks/${lat}/${lng}/${dist}`);
    },
    
    //  func: updateUser
    //  params: userData
    //  description: 
    //      Attempts to update a user with a new user object.  UPSERT ONLY
    //      PROTECTED ROUTE
    updateUser: (userData) => {
        return axios.post('/api/updateUser', { userData: userData, token: localStorage.getItem('token') });
    },

}