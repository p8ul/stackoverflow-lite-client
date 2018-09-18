import { popularQuestionsNode } from './Nodes';
import { popularQuestions, confirmAction, askQuestionForm } from '../../Templates';
import { 
	render, toggleElement,
	popupContent, 
	editPopupNode, editPopupContent
} from '../../utils';

export const renderPopularQuestions = (data) => {
	data.forEach((dataRecord, id) => {		
		let markUp = popularQuestions(dataRecord, id);
		render('tr', markUp, popularQuestionsNode);
	});
};

export const initializeRender = () => {
	render('div', confirmAction({message: 'Confirm Delete question'}), popupContent);
	editPopupContent.innerHTML = '';
	render('div', askQuestionForm(), editPopupContent);
};
