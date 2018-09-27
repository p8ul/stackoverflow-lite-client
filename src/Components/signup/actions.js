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
	if (passwordChanged() === 'weak') {
		confirmPassNode.innerHTML = 'Use a stronger password';
		return;
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
				el.innerHTML = 'Sign up';
				processObjectErrors(data.errors, 'signupErrors');
				return false;
			}
			setToken(data.auth_token);
			window.location.reload();
		})
		.catch(err => {
			el.innerHTML = 'Sign up';
			console.error(err);
		});
};

export const passwordChanged = () => {
	var strengthElement = document.getElementById('strength');
	var strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g');
	var mediumRegex = new RegExp('^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$', 'g');
	var enoughRegex = new RegExp('(?=.{6,}).*', 'g');
	let strength = 'weak';
	var pwd = document.getElementById('password');
	if (pwd.value.length==0) {
		strengthElement.innerHTML = 'Type Password';		
	} else if (false == enoughRegex.test(pwd.value)) {
		strengthElement.innerHTML = 'More Characters';
	} else if (strongRegex.test(pwd.value)) {
		strengthElement.innerHTML = '<span style="color:green">Strong!</span>';
		strength = 'strong';
	} else if (mediumRegex.test(pwd.value)) {
		strengthElement.innerHTML = '<span style="color:orange">Medium!</span>';
		strength = 'medium';
	} else {
		strengthElement.innerHTML = '<span style="color:red">Weak!</span>';
	}
	return strength;
};
