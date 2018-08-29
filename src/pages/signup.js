import api from '../utils/api';
import { 
	formValidator, 
	removeErrors, 
	testEmail, 
	processErrors 
} from '../utils';
import { setToken, isLoggedIn, logOut } from '../store';


const signup = document.forms.signup;
let data = {};

if (isLoggedIn()) {
	document.getElementById('signup-form').innerHTML = 'You are logged in';
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
	// reset token on click listener
	logOut();
}

// initialize form data (reset form fields)
Object.values(signup.elements).map(el => {
	if (el.name) {
		data[el.name] = '';
		el.value = '';
	}	
});

const handleKeyUp = () => {
	Object.values(signup.elements).map(el => {
		el.addEventListener('keyup', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
}; 

const handleChange = () => {
	Object.values(signup.elements).map(el => {
		el.addEventListener('change', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
};

const handleInput = () => {
	Object.values(signup.elements).map(el => {
		el.addEventListener('input', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
};

handleKeyUp();
handleInput();
handleChange();
try {
	signupBtn.addEventListener('click', event => {
		event.preventDefault();
		let errors = formValidator(data);
      
		if (data.confirm_password !== data.password || data.password === '') {
			document.getElementById('confirm_password_error').innerHTML = 'Passwords should match';
			return false;
		}
    
		if (!testEmail.test(data.email)) {
			document.getElementById('email_error').innerHTML = 'Invalid email';
			return false;
		} else {
			document.getElementById('email_error').innerHTML = '';
		}
    
		var isValid = Object.keys(errors).length === 0;
		if (!isValid) {
			return false;
		}
		api
			.post('auth/signup', data)
			.then(res => res.json())
			.then(data => {
				if (data.status === 'fail') {
					processErrors(data.errors, 'signupErrors');
					return false;
				}
				setToken(data.auth_token);
				window.location.reload();
			});
	});
} catch(error) {}

