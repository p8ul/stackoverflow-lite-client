
import { 
	questionTitle, questionBodyTemplate,
	answerHeader, answerBody 
} from '../../Templates';
import * as Node from './Nodes';

export const renderAnswerContent = (data, comments) => {
	data.forEach((dataRecord) => {
		let markUp = answerBody(dataRecord, comments);
		let container = document.createElement('div');
		container.innerHTML = markUp;
		Node.answerContentNode.appendChild(container);
	});
};

export const renderAnswerHeader = data => {
	let markUp = answerHeader(data);
	let container = document.createElement('div');
	container.innerHTML = markUp;
	Node.answersHeaderNode.appendChild(container);
};

export const renderQuestionTitle = data => {
	let markUp = questionTitle(data);	
	let container = document.createElement('div');
	container.innerHTML = markUp;
	Node.headerNode.appendChild(container);
};

export const renderQuestionBody = data => {
	let markUp = questionBodyTemplate(data);
	let container = document.createElement('div');
	container.classList.add('questions__body');
	container.innerHTML = markUp;
	Node.parentNode.appendChild(container);
};
