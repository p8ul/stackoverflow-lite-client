import api from '../utils/api';
import { 
	formValidator, 
	removeErrors, 
	processListErrors,
	testEmail 
} from '../utils';
import { setToken, isLoggedIn } from '../store';

const loginElement = document.forms.login;

let data = {};

if (isLoggedIn()) {
	window.location.href = '/index.html';
}

// initialize form data (reset form fields)
Object.values(loginElement.elements).map(el => {
	if (el.name) {
		data[el.name] = '';
		el.value = '';
	}	
});

const handleKeyUp = () => {
	Object.values(loginElement.elements).map(el => {
		el.addEventListener('keyup', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
}; 

const handleInput = () => {
	Object.values(loginElement.elements).map(el => {
		el.addEventListener('input', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
};

handleKeyUp();
handleInput();

try {
	loginBtn.addEventListener('click', event => {
		event.preventDefault();
		let errors = formValidator(data);		
    
		if (!testEmail.test(data.email)) {
			document.getElementById('email_error').innerHTML = 'Invalid email';
			return false;
		} else {
			document.getElementById('email_error').innerHTML = '';
		}
    
		var isValid = Object.keys(errors).length === 0;
		if (!isValid) {
			console.log(isValid);
			return false;
		}
		api
			.post('auth/login', data)
			.then(res => res.json())
			.then(data => {
				if (data.status === 'fail') {
					processListErrors(data.message, 'loginErrors');
					return false;
				}
				setToken(data.auth_token);
				window.location.reload();
			});
	});
} catch(error) {}
