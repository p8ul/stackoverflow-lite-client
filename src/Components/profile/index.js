import { 
	resetQuestionAndAnswersDom 
} from '../../utils';
import { getQuestions, getUserStats } from './actions';

class Profile {
	constructor() {
		this.state = {
			data: {}
		};
		resetQuestionAndAnswersDom();
		getQuestions();
		getUserStats();
	}
}

new Profile();