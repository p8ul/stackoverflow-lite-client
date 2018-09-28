import { render } from '../../utils';
import { acceptCheckBox } from '../acceptCheckBox';
import { 
	rootTemplate, 
	answerBody,
	actionButtons,
	answerForm,
	answerHeader,
	askQuestionForm,
	confirmAction,
	isAccepted,
	ErrorTemplate,
	loader,
	loaderSmall,
	popularQuestions,
	createQuestions,
	questionTitle,
	questionBodyTemplate,
	successTemplate
} from '../../Templates';

document.body.innerHTML = rootTemplate();
const root = document.getElementById('root');
const data = { answers: 12, accepted: false, answer_id: 12, comment_body: 'body here'};
const comments = [{data}];

test('Should set checkbox field', ()=> {
	render('div', acceptCheckBox(data), root); 
	let allAccept = document.querySelectorAll('.accepted');
	
	expect(parseInt(allAccept[0].getAttribute('data-id'))).toEqual(data.answer_id);
	expect(allAccept[0].getAttribute('unchecked')).toEqual('checked');
	data.accepted = true;
	root.innerHTML = '';
	render('div', acceptCheckBox(data), root);
	allAccept = document.querySelectorAll('.accepted');	
	expect(allAccept[0].getAttribute('checked')).toEqual('checked');
});

test('Should render question template', ()=> {
	render('div', answerBody(data, comments), root);
	let commentBody = document.getElementById('commentBody12');

	expect(commentBody.value).toEqual('');
});

test('should render action buttons', () => {
	root.innerHTML = '';
	render('div', actionButtons(data), root);
	let buttons = document.querySelectorAll('.edit-answer');
	expect(parseInt(buttons[0].getAttribute('data-id'))).toEqual(data.answer_id);
});

test('should render answer form', () => {
	root.innerHTML = '';
	render('div', answerForm(), root);
	let node = document.getElementById('answer_body_error');
	expect(node.innerHTML).toEqual('');

});

test('should render answer Header', () => {
	root.innerHTML = '';
	render('div', answerHeader(data), root);
	let node = document.getElementById('answers__count');
	expect(String(node.innerHTML)).toEqual(data.answers + '. Answer(s)');
});

test('should render ask question form', () => {
	root.innerHTML = '';
	render('div', askQuestionForm(data), root);
	expect(Object.values(ask.elements).length).toEqual(3);
});

test('should render confirm action', () => {
	root.innerHTML = '';
	render('div', confirmAction({message: 'hello'}), root);
	let message = document.getElementById('confirm-message');
	expect(message.innerHTML).toEqual('hello');
});

test('should render accepted checkbox template', () => {
	root.innerHTML = '';
	data.accepted = true;
	render('div', isAccepted(data), root);
	let node = document.querySelectorAll('.accept-box');
	expect(node[0].value).toEqual('on');
});

test('should render error template', () => {
	root.innerHTML = '';
	render('div', ErrorTemplate('Hello'), root);
	let node = document.querySelectorAll('.text-primary');
	expect(node[0].innerHTML).toEqual('Hello');	
});

test('should loader template', () => {
	root.innerHTML = '';
	render('div', loader(), root);

	let node = document.querySelectorAll('.line');
	expect(node[0].classList.contains('line-1')).toBe(true);
});


test('should small loader template', () => {
	root.innerHTML = '';
	render('div', loaderSmall(), root);

	let node = document.querySelectorAll('.line');
	expect(node[0].classList.contains('line-1')).toBe(true);
});

test('should render question table row template', () => {
	root.innerHTML = '';
	data.answers_count = '12';
	render('tr', popularQuestions(data), root);

	let node = document.querySelectorAll('.table__tag');
	expect(node[0].innerHTML).toEqual(data.answers_count);
});

test('should render questions listing template', () => {
	root.innerHTML = '';
	data.title = '12';
	render('div', createQuestions(data), root);
	let node = document.querySelectorAll('.text-primary');
	expect(node[0].innerHTML).toEqual(data.title);
});

test('should render question title template', () => {
	root.innerHTML = '';
	data.title = '12';
	render('div', questionTitle(data), root);
	let node = document.querySelectorAll('.mega-text');
	expect(node[0].innerHTML).toEqual(data.title);
});

test('should render question body template', () => {
	root.innerHTML = '';
	data.body = 'question body';
	render('div', questionBodyTemplate(data), root);
	let node = document.querySelectorAll('.question-body');
	expect(node[0].innerHTML).toEqual(data.body);
});

test('should render success template', () => {
	root.innerHTML = '';
	data.message = 'question body';
	render('div', successTemplate(data.message), root);
	let node = document.querySelectorAll('.text-success');
	expect(node[0].innerHTML).toEqual(data.message);
});