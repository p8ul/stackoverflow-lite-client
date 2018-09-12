import { resetQuestionDom } from '../../utils';
import { searchEventListener } from './Events';
import { searchQuestions } from './actions';
import { processQuestionList } from './TemplateRenders';

export default class Questions {
	constructor() {
		resetQuestionDom();
		let callBackFnc = processQuestionList; 
		searchQuestions({query: '', callBackFnc});
		searchEventListener();
	}
}

new Questions();
