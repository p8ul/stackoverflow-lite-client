/* eslint no-undef: 0 */
import { 
	$on,
	removeErrors,
	resetQuestionAndAnswersDom,
} from '../../utils';
import { getQuestion, sendAnswer } from './actions';
import { answerFormElement } from './Nodes';
import { searchEventListener } from '../questions/Events';
import { initializeRender } from './TemplateRenders';

let id = window.location.search.substr(1).split('=',2)[1];

class QuestionAndAnswers {
	constructor() {
		this.state ={
			data: {},
			answerFormElement: answerFormElement
		};
		searchEventListener();		
		resetQuestionAndAnswersDom();
		getQuestion(`questions/${id}`);
		this.handleSubmitAnswerEvents();
		this.resetData();
		initializeRender();
	}

	setState(e) {
		this.state.data[e.target.name] = e.target.value;
		removeErrors(this.state.data);
	}

	resetData () {
		Object.values(this.state.answerFormElement.elements).map(el => {
			if (el.name) {
				this.state.data[el.name] = '';
				el.value = '';
			}	
		});
	}

	handleSubmitAnswerEvents() {
		Object.values(answerFormElement.elements).map(el => {		
			$on(el, 'keyup',(e)=>{this.setState(e);});
			$on(el, 'input',(e)=>{this.setState(e);});
		});
		$on(answerBtn, 'click', e => sendAnswer({
			event: e,
			url: `questions/${id}/answers`,
			data: this.state.data,
			callBackFunc: this.resetData
		}));
	}
}

const index = new QuestionAndAnswers();
export default index;
