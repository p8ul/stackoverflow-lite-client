import { createQuestions, ErrorTemplate } from '../../Templates';
import { loaderNode, parentNode } from './Nodes';

export const processQuestionList = (data) => {
	loaderNode.innerHTML = '';
	if (data.results.length === 0) {
		let markUp = ErrorTemplate('No question found');
		let container = document.createElement('div');
		container.classList.add('questions__node');
		container.innerHTML = markUp;
		parentNode.appendChild(container);
	}
	data.results.forEach((dataRecord, id) => {
		let markUp = createQuestions(dataRecord, id);
		let container = document.createElement('div');
		container.classList.add('questions__node');
		container.innerHTML = markUp;
		parentNode.appendChild(container);
	});
};