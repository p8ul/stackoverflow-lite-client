
import { 
	removeErrors,
	$on, accessController
} from '../../utils';
import { searchEventListener } from '../questions/Events';
import { askElement } from './Nodes';
import { sendQuestion } from './actions';

export default class Ask {
	constructor() {
		accessController();
		searchEventListener();
		this.state = {
			data: {}
		};
		this.initForm();
        
		this.handleEvents();
	}
    
	initForm() {
		// initialize form data (reset form fields)
		Object.values(askElement.elements).map(el => {
			if (el.name) {
				this.state.data[el.name] = '';
				el.value = '';
			}	
		});
	}
    
	setState(e) {
		this.state.data[e.target.name] = e.target.value;
		removeErrors(this.state.data);
	}

	handleEvents() {
		Object.values(askElement.elements).map(el => {		
			$on(el, 'keyup',(e)=>{this.setState(e);});
			$on(el, 'input',(e)=>{this.setState(e);});
		});
		$on(askBtn, 'click', e => sendQuestion({
			event: e,
			url: 'questions/',
			data: this.state.data,
			method: 'POST'
		}));
	}
}

new Ask();
