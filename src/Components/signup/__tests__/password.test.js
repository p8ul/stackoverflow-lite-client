import { rootTemplate, testForm } from '../../../Templates';
import { render, passwordChanged } from '../../../utils';

document.body.innerHTML = rootTemplate();
let root = document.getElementById('root');
render('div', testForm(), root);

test('should validate the strength of the password', () => {  
	let passwordNode = document.getElementById('password');
	
	expect(passwordChanged()).toEqual('weak');
	
	passwordNode.value = '12QWEqwery@';
	expect(passwordChanged()).toEqual('strong');

	passwordNode.value = '12qwery@';
	expect(passwordChanged()).toEqual('medium');

	passwordNode.value = '';
	expect(passwordChanged()).toEqual('weak');
});
