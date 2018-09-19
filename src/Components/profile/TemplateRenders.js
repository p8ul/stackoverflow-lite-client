import { 
	popularQuestionsNode, 
	recentQuestionsNode, 
	popularLoader, 
	recentLoader
} from './Nodes';
import { 
	popularQuestions, 
	confirmAction, 
	askQuestionForm,
	loaderSmall, ErrorTemplate
} from '../../Templates';
import { 
	render,
	popupContent, 
	editPopupContent
} from '../../utils';

export const renderPopularQuestions = (data) => {
	popularLoader.innerHTML = '';
	if (data.length > 0) {
		data.forEach((dataRecord, id) => {		
			let markUp = popularQuestions(dataRecord, id);
			render('tr', markUp, popularQuestionsNode);
		});
	} else {
		let markUp = ErrorTemplate('No questions found');
		render('tr', markUp, popularQuestionsNode);
	}
	
};

export const renderRecentQuestions = (data) => {
	recentLoader.innerHTML = '';
	if (data.length > 0) {
		data.forEach((dataRecord, id) => {		
			let markUp = popularQuestions(dataRecord, id);
			render('tr', markUp, recentQuestionsNode);
		});
	} else {
		let markUp = ErrorTemplate('No answered questions found');
		render('tr', markUp, recentQuestionsNode);
	}
};

export const initializeRender = () => {
	render('div', confirmAction({message: 'Confirm Delete question'}), popupContent);
	editPopupContent.innerHTML = '';
	render('div', askQuestionForm(), editPopupContent);
	renderLoader();
};

export const renderLoader = () => {
	let markUp = loaderSmall('text-red');
	let container = document.createElement('div');
	let container2 = document.createElement('div');
	container.innerHTML = markUp;
	container2.innerHTML = markUp;
	recentLoader.appendChild(container);
	popularLoader.appendChild(container2);
};
