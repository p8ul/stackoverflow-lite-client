import api from '../../utils/api';
import { getToken } from '../../store';
import { renderPopularQuestions } from './TemplateRenders';
import { answersNode, questionsNode, votesNode } from './Nodes';
/**
 * Fetch all users questions from the server,
 * Render templates based on result data
 * @param {!string} url url endpoint
 */
export const getQuestions = () => {
	api.get('users/questions', getToken())
		.then(res => res.json())
		.then(data => data.results)
		.then(data => {
			renderPopularQuestions(data.question);
			// renderQuestionTable(data.question[0]);
		})
		.catch(error => console.error(error));
};

export const getUserStats = () => {
	api.get('users/stats', getToken())
		.then(res => res.json())
		.then(data => data.results)
		.then(data => data[0][0])
		.then(data => {
			answersNode.innerHTML = data.answers;
			votesNode.innerHTML = data.votes;
			questionsNode.innerHTML = data.questions;
			console.log(data.answers)
			// renderPopularQuestions(data.question);
			// renderQuestionTable(data.question[0]);
		})
		.catch(error => console.error(error));
};