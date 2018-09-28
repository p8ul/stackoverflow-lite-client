/* eslint no-undef: 0 */
import { $on, removeErrors, toggleElement, preLoader } from '../../utils';
import { isLoggedIn } from '../../store';
import { loginElement } from './Nodes';
import { login } from './actions';

export default class Login {
	constructor() {
		this.accessController();
		this.state = {
			data: {}
		};
		this.initFormData();
		this.handleEvents();
	}
    
	setState(e) {
		this.state.data[e.target.name] = e.target.value;
		removeErrors(this.state.data);
	}
    
	accessController () {
		if (isLoggedIn()) {
			window.location.href = '/index.html';
		}
		toggleElement(preLoader);
	}
	initFormData () {
		// initialize form data (reset form fields)
		Object.values(loginElement.elements).map(el => {
			if (el.name) {
				this.state.data[el.name] = '';
				el.value = '';
			}	
		});	
	}
    
	handleEvents () {
		Object.values(loginElement.elements).map(el => {		
			$on(el, 'keyup',(e)=>{this.setState(e);});
			$on(el, 'input',(e)=>{this.setState(e);});
		});
		$on(loginBtn, 'click', e => login({
			event: e,
			url: 'auth/login',
			data: this.state.data,
			el: loginBtn
		}));
	}
}
new Login();
