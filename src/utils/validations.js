export const formValidator = (data) => {
	let errors = {};
	let error_message = 'Field required';
	for (var key in data) {
		if (!data[key]) {
			errors[key] = error_message;
			document.getElementById(key+'_error').innerHTML = error_message;
		} else {
			document.getElementById(key+'_error').innerHTML = '';
		}
	}
	return errors;
};

export const processObjectErrors = (errors, idSelector) => {
	let parentNode = document.getElementById(idSelector);
	parentNode.innerHTML = '';
	let child = '';
	for (var key in errors) {
		child = document.createElement('p');
		child.innerHTML = errors[key];
		parentNode.appendChild(child);
	}
};

export const processListErrors = (errors, idSelector) => {
	let parentNode = document.getElementById(idSelector);
	parentNode.innerHTML = '';
	let child = '';
	child = document.createElement('p');
	child.innerHTML = errors;
	parentNode.appendChild(child);
};

export const removeErrors = data => {
	for (var key in data) {
		document.getElementById(key+'_error').innerHTML = '';		
	}
};

export const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
