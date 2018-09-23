/* eslint no-console: 0 */

import api from '../../utils/api';
import { 
	formValidator, 
	processObjectErrors,
	render, testEmail
} from '../../utils';
import { setToken } from '../../store';
import { emailErrorNode, confirmPassNode } from './Nodes';
import { loaderSmall } from '../../Templates';

/**
 * Valid signUp json object & and Post a request
 *
 * @param {!Event} event form submit request
 * @param {!string} url signUp request api endpoint
 * @param {!Element} el button element
 */
export const signUp = ({event, url, data, el}) => {
	event.preventDefault();
	let errors = formValidator(data);
      
	if (data.confirm_password !== data.password || data.password === '') {
		confirmPassNode.innerHTML = 'Passwords should match';
		return false;
	}
    
	if (!testEmail.test(data.email)) {
		emailErrorNode.innerHTML = 'Invalid email';
		return false;
	}
    
	var isValid = Object.keys(errors).length === 0;
	if (!isValid) {
		return false;
	}
	el.innerText = '';
	render('div', loaderSmall(), el);
	api
		.post(url, data)
		.then(res => res.json())
		.then(data => {
			if (data.errors) {
				processObjectErrors(data.errors, 'signupErrors');
				return false;
			}
			setToken(data.auth_token);
			window.location.reload();
		})
		.catch(err => {
			el.innerHTML = 'Login';
			console.error(err);
		});
};
