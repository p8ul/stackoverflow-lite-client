import {
	formValidator, render, removeErrors,
	processListErrors, processObjectErrors
} from '../../utils';
import { answerForm, rootTemplate } from '../../Templates';

document.body.innerHTML = rootTemplate();
let rootNode = document.getElementById('root');
render('div', answerForm(), rootNode);
let askForm = document.forms.ask;

let data = {};
let listErrors = ['error 1'];
let objectErrors = {listErrors};

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

test('should process list errors', () => {
	rootNode.innerHTML = '<div id="errors"></div>';
	processListErrors(listErrors, 'errors');
	let errors = document.getElementById('errors');
	expect(errors.innerHTML).toBeDefined();

	rootNode.innerHTML = '<div id="errors"></div>';
	processObjectErrors(objectErrors, 'errors');
	errors = document.getElementById('errors');
	expect(errors.innerHTML).toBeDefined();
});

test('should trim a string', () => {
	let testString = " data"
	expect(testString.trim()).toEqual('data')
})



