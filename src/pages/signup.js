import api from '../utils/api';

signup.addEventListener('click', event => {
	event.preventDefault();

	const data = {
		username: username.value,
		email: email.value,
		password: password.value,
		confirm_password: confirm_password.value
	};

	api
		.post('auth/signup', data)
		.then(res => res.json())
		.then(data => console.log(data));
});
