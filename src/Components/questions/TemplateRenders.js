import { createQuestions, loader, ErrorTemplate } from '../../Templates';
import { loaderNode, parentNode } from './Nodes';
import { render } from '../../utils';
export const renderLoader = () => {
	let markUp = loader();
	let container = document.createElement('div');
	container.innerHTML = markUp;
	loaderNode.appendChild(container);
};

export const renderQuestionList = (data) => {
	loaderNode.innerHTML = '';
	if (data.results.length === 0) {
		let markUp = ErrorTemplate('No question found');
		render('div', markUp, parentNode);
	}
	data.results.forEach((dataRecord, id) => {
		let markUp = createQuestions(dataRecord, id);
		render('div', markUp, parentNode);
	});
};