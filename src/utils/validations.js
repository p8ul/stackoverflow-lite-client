/**
 * Validates form fields and error text to error helper text
 * @param {!Object} data Object with form fields and their values
 */
export const formValidator = (data) => {
	let errors = {};
	let error_message = 'field required';
	for (var key in data) {		
		if (!data[key].trim('')) {
			errors[key] = error_message;
			document.getElementById(key+'_error').innerHTML = key + ' ' + error_message;
		} else {
			document.getElementById(key+'_error').innerHTML = '';
		}
	}
	return errors;
};

/**
 * Insert errors from an object in an element
 * @param {!Object} errors an object containing errors
 * @param {!Element} idSelector 
 */
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

/**
 * Insert an array of errors in id element
 * @param {!Array} errors an array of errors
 * @param {!Element} idSelector id selector where error text are appended
 */
export const processListErrors = (errors, idSelector) => {
	let parentNode = document.getElementById(idSelector);
	parentNode.innerHTML = '';
	let child = '';
	child = document.createElement('p');
	child.innerHTML = errors;
	parentNode.appendChild(child);
};

/**
 * Clears errors text from a form 
 * @param {!Object} data form fields name and value object
 */
export const removeErrors = data => {
	for (var key in data) {
		document.getElementById(key+'_error').innerHTML = '';		
	}
};

/** Test email regex */
export const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

if(typeof(String.prototype.trim) === 'undefined')
{
	String.prototype.trim = function() 
	{
		return String(this).replace(/^\s+|\s+$/g, '');
	};
}