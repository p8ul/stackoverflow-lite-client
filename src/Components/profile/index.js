import { 
	resetQuestionAndAnswersDom
} from '../../utils';
import { getQuestions, getUserStats } from './actions';
import { initializeRender } from './TemplateRenders';
import { profileEvents } from './Events';

class Profile {
	constructor() {
		this.state = {
			data: {}
		};
		initializeRender();
		resetQuestionAndAnswersDom();
		getQuestions();
		getUserStats();
		setTimeout(profileEvents(), 2000);
		
	}
}

new Profile();