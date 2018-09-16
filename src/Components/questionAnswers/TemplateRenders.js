
import { 
	questionTitle, questionBodyTemplate,
	answerHeader, answerBody 
} from '../../Templates';
import * as Node from './Nodes';
import { render } from '../../utils';

export const renderAnswerContent = (data, comments) => {
	data.forEach((dataRecord) => {
		let markUp = answerBody(dataRecord, comments);
		render('div', markUp, Node.answerContentNode);
	});
};

export const renderAnswerHeader = data => {
	let markUp = answerHeader(data);
	render('div', markUp, Node.answersHeaderNode);
};

export const renderQuestionTitle = data => {
	let markUp = questionTitle(data);	
	render('div', markUp, Node.headerNode);
};

export const renderQuestionBody = data => {
	let markUp = questionBodyTemplate(data);
	render('div', markUp, Node.parentNode);
};
