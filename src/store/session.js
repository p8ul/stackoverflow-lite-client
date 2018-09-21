import jwt_decode from 'jwt-decode';
import { TOKEN_KEY } from '../Constants';

/**
 *  Decode token and return user details
 *  @param {!string} key token object key
 *  */
export const getTokenDetails = (key=TOKEN_KEY) => {
	return jwt_decode(getToken(key));	
};

/**
 * Store jwt token in localStorage
 * @param {!string} token jwt token from server
 * @param {!string} key token object key
 */
export const  setToken = (token, key=TOKEN_KEY) => {
	localStorage.setItem(key, token);
};

/**
 * Get token from localstorage
 * @param {!string} key token object key
 */
export const getToken = (key=TOKEN_KEY) => {
	return localStorage.getItem(key);
};

/**
 * Remove a token from the localstorage
 * @param {!string} key token object key
 */
export const removeToken = (key=TOKEN_KEY) => {
	localStorage.removeItem(key);
};

/**
 * Check if token is set
 */
export const isLoggedIn = () => {
	var token = getToken();
	if (token === null || token === 'undefined')
		return false;   
	return true;
};

/**
 * Adds a click listener to log out button
 * Remove token when the button is clicked
 */
export const logOut = () => {
	let el = document.getElementById('logout-link');
	el.addEventListener('click', () => {
		removeToken();
		window.location.reload();  
	});	
};
