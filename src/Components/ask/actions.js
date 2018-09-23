/* eslint no-undef: 0 */
import api from '../../utils/api';
import { 
	formValidator, 
	processListErrors,
	render
} from '../../utils';
import { getToken } from '../../store';
import { loaderSmall } from '../../Templates';

/**
 * Valid question json object & and Post a request
 *
 * @param {!Event} event form submit request
 * @param {!string} url post answer api endpoint
 * @param {!string} method fetch api method (post, put)
 */
export const sendQuestion = ({event, url, data, method='POST'}) => {
	event.preventDefault();
	
	let errors = formValidator(data);		
	var isValid = Object.keys(errors).length === 0;
	if (!isValid) {
		return false;
	}
	askBtn.innerText = '';
	render('div', loaderSmall(), askBtn);
	api
		.post(url, data, getToken(), method)
		.then(res => res.json())
		.then(data => {
			askBtn.innerText = 'Post a question';
			if (data.errors) {
				processListErrors(data.message, 'loginErrors');
				return false;
			}
			let id = data.results.question_id;
			window.location.href = `question_answers.html?id=${id}`;
			callBackFunc();
		});
};

