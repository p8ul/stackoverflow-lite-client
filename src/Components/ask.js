import api from '../utils/api';
import { 
	formValidator, 
	removeErrors, 
	processListErrors,
	$on
} from '../utils';
import { getToken, isLoggedIn, logOut } from '../store';

const askElement = document.forms.ask;

if (isLoggedIn()) {
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
	// reset token onclick listener
	logOut();
} else {
	window.location.href = '/login.html';
}

let data = {};

// initialize form data (reset form fields)
Object.values(askElement.elements).map(el => {
	if (el.name) {
		data[el.name] = '';
		el.value = '';
	}	
});

const setState = (e) => {
	data[e.target.name] = e.target.value;
	removeErrors(data);
};

const handleEvents = () => {
	Object.values(askElement.elements).map(el => {		
		$on(el, 'keyup',(e)=>{setState(e);});
		$on(el, 'input',(e)=>{setState(e);});
	});
};

handleEvents();


try {
	askBtn.addEventListener('click', event => {
		event.preventDefault();
		let errors = formValidator(data);		
    
		var isValid = Object.keys(errors).length === 0;
		if (!isValid) {
			console.log(isValid);
			return false;
		}
		api
			.post('questions/', data, getToken())
			.then(res => res.json())
			.then(data => {
				if (data.status === 'fail') {
					processListErrors(data.message, 'server_errors');
					return false;
				}
			});
	});
} catch(error) {}
