import {
	formValidator, render, removeErrors
} from '../../utils';
import { answerForm, rootTemplate } from '../../Templates';

document.body.innerHTML = rootTemplate();
let rootNode = document.getElementById('root');
render('div', answerForm(), rootNode);
let askForm = document.forms.ask;

let data = {};
Object.values(askForm.elements).map(el => {
	if (el.name) {
		data[el.name] = '';
		el.value = '';
	}			
});

test('Should validate form fields', ()=> {
	expect(formValidator(data)).toEqual({answer_body: 'field required'});

	let errorDiv = document.getElementById('answer_body_error');
	expect(errorDiv.innerHTML).toEqual('answer_body field required');
	removeErrors(data);
	expect(errorDiv.innerHTML).toEqual('');
});

