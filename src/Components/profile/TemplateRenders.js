import { popularQuestionsNode,  popupContent } from './Nodes';
import { popularQuestions, confirmAction } from '../../Templates';
import { render } from '../../utils';

export const renderPopularQuestions = (data) => {
	data.forEach((dataRecord, id) => {		
		let markUp = popularQuestions(dataRecord, id);
		render('tr', markUp, popularQuestionsNode);
	});
};

export const initializeRender = () => {
	render('div', confirmAction({message: 'Confirm Delete question'}), popupContent);
};
