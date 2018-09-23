/* eslint no-undef: 0 */

import { 
	removeErrors, 
	resetSignupDom, $on
} from '../../utils';
import { signupNode } from './Nodes';
import { signUp } from './actions';

export default class SignUp {
	constructor () {
		resetSignupDom();
		this.state = {
			data: {},
			elements: signupNode.elements
		};
		this.initFormData();
		this.handleEvents();
	}
	initFormData () {
		// initialize form data (reset form fields)
		Object.values(this.state.elements).map(el => {
			if (el.name) {
				this.state.data[el.name] = '';
				el.value = '';
			}	
		});
	}
    
	setState (e) {
		this.state.data[e.target.name] = e.target.value;
		removeErrors(this.state.data);
	}
    
	handleEvents () {
		Object.values(this.state.elements).map(el => {		
			$on(el, 'keyup',(e)=>{this.setState(e);});
			$on(el, 'input',(e)=>{this.setState(e);});
		});
		$on(signupBtn, 'click', e => signUp({
			event: e,
			url: 'auth/signup',
			data: this.state.data,
			el: signupBtn
		}));
	}
}

new SignUp();
