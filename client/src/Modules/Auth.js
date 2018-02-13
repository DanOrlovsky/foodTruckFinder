// ----------------------------------------------------
// --- A U T H . J S ----------------------------------
// ----------------------------------------------------



class Auth {
    
    // authenticateUser
    // Sets the user token
    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    // isUserAuthenticated
    // Checks if the token exists
    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    // deauthenticateUser
    // Removes the token
    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    // getToken
    // Returns the token in local storage
    static getToken() {
        return localStorage.getItem('token');
    }
}


export default Auth;