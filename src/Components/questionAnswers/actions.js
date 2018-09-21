import api from '../../utils/api';
import { 
	getToken, 
	selectedQuestion
} from '../../store';
import { SET_ANSWERS, SET_COMMENTS, SET_QUESTION} from '../../Constants';

import {
	formValidator, 
	processListErrors,
	resetQuestionAndAnswersDom,
	toggleElement
} from '../../utils';
import { 
	HandleCommentEvents, 
	HandleVotesEvents,
	HandleAcceptAnswerEvents,
	HandleEditDeleteAnswerEvents
} from './Events';
/** Renders */
import {
	renderAnswerContent, renderAnswerHeader, 
	renderQuestionBody,
	renderQuestionTitle
} from './TemplateRenders';
/**
 * Call all event listen handlers
 *
 */
const callAllEvents = () => {
	HandleVotesEvents();
	HandleCommentEvents();
	HandleAcceptAnswerEvents();
	HandleEditDeleteAnswerEvents();
};

/**
 * Fetch all questions from the server,
 * Render templates based on result data and
 * Call all event listen handlers
 *
 * @param {!string} url url endpoint
 */
export const getQuestion = (url) => {
	api.get(url)
		.then(res => res.json())
		.then(data => data.results)
		.then(data => {
			selectedQuestion({type: SET_QUESTION, payload: data.question[0]});
			selectedQuestion({type: SET_ANSWERS, payload: data.answers});
			selectedQuestion({type: SET_COMMENTS, payload: data.comments});
			renderQuestionBody(data.question[0]);
			renderQuestionTitle(data.question[0]);
			renderAnswerHeader(data.question[0]);
			renderAnswerContent(data.answers, data.comments);
			setTimeout(callAllEvents(),3000);
			resetQuestionAndAnswersDom();
		})
		.catch(error => console.error(error));
};

/**
 * Update answer  
 *
 * @param {!Element} el event element
 * @param {!string} url post answer api endpoint
 * @param {!object} data request json payload
 */
export const updateAnswer = ({el, url, data}) => {
	toggleElement(el);
	api
		.post(url, data, getToken(), 'PUT')
		.then(res => res.json())
		.then(data => {
			setTimeout(()=> toggleElement(el), 1000);
		});
};

/**
 * Valid Answer json object & and Post a request
 *
 * @param {!string} event form submit request
 * @param {!string} url post answer api endpoint
 * @param {!function} callBackFunc call back function to call after successful request
 */
export const sendAnswer = ({event, url, data, callBackFunc}) => {
	event.preventDefault();
	let errors = formValidator(data);		
	var isValid = Object.keys(errors).length === 0;
	if (!isValid) {
		return false;
	}
	api
		.post(url, data, getToken())
		.then(res => res.json())
		.then(data => {
			if (data.errors) {
				processListErrors(data.message, 'loginErrors');
				return false;
			}
			// callBackFunc();
			window.location.reload();
		});
};