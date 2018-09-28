/* eslint no-console: 0 */
import api from '../../utils/api';
import { 
	formValidator, 
	processListErrors,
	processObjectErrors,
	render, testEmail
} from '../../utils';
import { setToken } from '../../store';
import { emailErrorNode } from './Nodes';
import { loaderSmall } from '../../Templates';

/**
 * Valid login json object & and Post a request
 *
 * @param {!Event} event form submit request
 * @param {!string} url login request api endpoint
 * @param {!Element} el button element
 */
export const login = ({event, url, data, el}) => {
	event.preventDefault();
	let errors = formValidator(data);		
    
	if (!testEmail.test(data.email)) {
		emailErrorNode.innerHTML = 'Invalid email';
		return false;
	} else {
		emailErrorNode.innerHTML = '';
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
			el.innerHTML = 'Login';
			if (data.errors) {
				if (typeof data.errors === 'object') {
					processObjectErrors(data.errors, 'loginErrors');
					return false;
				} else {
					processListErrors(data.errors, 'loginErrors');
					return false;
				}				
			}
			setToken(data.auth_token);
			window.location.reload();
		})
		.catch(err => {
			el.innerHTML = 'Login';
			console.error(err);
		});
};
