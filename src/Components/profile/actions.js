import api from '../../utils/api';
import { getToken, questions } from '../../store';
import { renderPopularQuestions } from './TemplateRenders';
import { 
	answersNode, questionsNode,
	votesNode } from './Nodes';
import { HandleDeleleEvents } from './Events';
import { popUp } from '../../utils';

/**
 * Fetch all users questions from the server,
 * Render templates based on result data
 */
export const getQuestions = () => {	
	api.get('users/questions', getToken())
		.then(res => res.json())
		.then(data => data.results)
		.then(data => {			
			questions({type: 'SET', payload: data.question});
			setTimeout(HandleDeleleEvents, 2000);
			renderPopularQuestions(questions().questions);
			// renderQuestionTable(data.question[0]);
		})
		.catch(error => console.error(error));
};

/**
 * Fetch users statistics from the server,
 * Render templates based on result data
 */
export const getUserStats = () => {	
	api.get('users/stats', getToken())
		.then(res => res.json())
		.then(data => data.results)
		.then(data => data[0][0])
		.then(data => {
			answersNode.innerHTML = data.answers;
			votesNode.innerHTML = data.votes;
			questionsNode.innerHTML = data.questions;
		})
		.catch(error => console.error(error));
};

/**
 * Delete a questions
 * @param {!id} id questions id
 */
export const deleteQuestion = (id) => {
	api.delete(`questions/${id}`, {}, getToken())
		.then(res => res.json())
		.then(data => {
			popUp(data.message);
			setTimeout(()=> window.location.reload(),5000);
		})
		.catch(error => console.error(error));
};

