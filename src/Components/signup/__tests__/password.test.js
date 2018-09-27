import { passwordChanged } from '../actions';
import { rootTemplate, testForm } from '../../../Templates';
import { render } from '../../../utils';

document.body.innerHTML = rootTemplate();
let root = document.getElementById('root');
render('div', testForm(), root);

test('should validate the strength of the password', () => {  
	expect(passwordChanged()).toEqual('weak');
});
