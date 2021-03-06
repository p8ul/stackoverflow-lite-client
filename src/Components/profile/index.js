import { 
	accessController,
} from '../../utils';
import { getQuestions, getUserStats } from './actions';
import { initializeRender } from './TemplateRenders';
import { profileEvents } from './Events';

class Profile {
	constructor() {
		this.state = {
			data: {}
		};
		accessController();
		initializeRender();
		getQuestions();
		getUserStats();
		setTimeout(profileEvents(), 2000);
		
	}
}

new Profile();