import api from '../../utils/api';
import { isLoggedIn, logOut } from '../../store';
/**
 * Renders
 */
import {
	renderAnswerContent, renderAnswerHeader, 
	renderQuestionBody,
	renderQuestionTitle
} from './TemplateRenders';
if (isLoggedIn()) {
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
	// reset token onclick listener
	logOut();
}

let id = window.location.search.substr(1).split('=',2)[1];


api.get(`questions/${id}`)
	.then(res => res.json())
	.then(data => data.results)
	.then(data => {
		console.log(data.answers);
		renderQuestionBody(data.question[0]);
		renderQuestionTitle(data.question[0]);
		renderAnswerHeader(data.question[0]);
		renderAnswerContent(data.answers);
	})
	.catch(error => console.error(error));
    

