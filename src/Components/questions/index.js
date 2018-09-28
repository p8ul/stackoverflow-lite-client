import { resetQuestionDom, toggleElement, preLoader } from '../../utils';
import { searchEventListener } from './Events';
import { searchQuestions } from './actions';
import { renderQuestionList, renderLoader } from './TemplateRenders';

export default class Questions {
	constructor() {
		resetQuestionDom();
		let callBackFnc = renderQuestionList; 
		renderLoader();
		searchQuestions({query: '', callBackFnc});
		searchEventListener();
		toggleElement(preLoader);
	}
}

new Questions();
