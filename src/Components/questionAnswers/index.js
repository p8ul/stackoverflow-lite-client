import { 
	$on,
	removeErrors,
	resetQuestionAndAnswersDom 
} from '../../utils';
import { getQuestion, sendAnswer } from './actions';

resetQuestionAndAnswersDom();

let data = {};
const setState = (e) => {
	data[e.target.name] = e.target.value;
	removeErrors(data);
};

const answerFormElement = document.forms.answer;

// initialize form data (reset form fields)
const resetData = () => {
	Object.values(answerFormElement.elements).map(el => {
		if (el.name) {
			data[el.name] = '';
			el.value = '';
		}	
	});
};

resetData();

let id = window.location.search.substr(1).split('=',2)[1];
const handleEvents = () => {
	Object.values(answerFormElement.elements).map(el => {		
		$on(el, 'keyup',(e)=>{setState(e);});
		$on(el, 'input',(e)=>{setState(e);});
	});
	$on(answerBtn, 'click', e => sendAnswer({
		event: e,
		url: `questions/${id}/answers`,
		data: data,
		callBackFunc: resetData
	}));
};

handleEvents();

getQuestion(`questions/${id}`);

