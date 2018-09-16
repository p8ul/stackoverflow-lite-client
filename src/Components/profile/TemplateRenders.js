import { popularQuestionsNode } from './Nodes';
import { popularQuestions } from '../../Templates';
import { render } from '../../utils';

export const renderPopularQuestions = (data) => {
	data.forEach((dataRecord, id) => {		
		let markUp = popularQuestions(dataRecord, id);
		render('tr', markUp, popularQuestionsNode);
	});
};