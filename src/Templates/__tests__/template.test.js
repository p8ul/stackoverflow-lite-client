import { render } from '../../utils';
import { acceptCheckBox } from '../acceptCheckBox';
import { 
	rootTemplate, 
	answerBody,
	actionButtons,
	answerForm,
	answerHeader
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



