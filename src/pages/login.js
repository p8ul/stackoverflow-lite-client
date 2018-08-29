import api from '../utils/api';
import { formValidator } from '../utils';
import { setToken, isLoggedIn, logOut } from '../store';

const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
const loginElement = document.forms.login;

let data = {};
let data = {};

if (isLoggedIn()) {
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
}
