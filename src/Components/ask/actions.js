/* eslint no-undef: 0 */
import api from '../../utils/api';
import { 
	formValidator, 
	processListErrors,
	render,
	popUp,
	popupContent
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
	askBtn.setAttribute('disabled', 'disabled');
	askBtn.innerText = '';
	render('div', loaderSmall(), askBtn);
	api
		.post(url, data, getToken(), method)
		.then(res => res.json())
		.then(data => {	
			if (data.errors) {
				askBtn.innerText = 'Post a question';
				processListErrors(data.message, 'loginErrors');
				return false;
			}
			let id = data.results.question_id;
			popUp('Question posted successfully', popupContent);
			setTimeout(()=>{
				window.location.href = `question_answers.html?id=${id}`;
			}, 5000);
		})
		.catch(error => {
			console.error(error);
			askBtn.innerText = 'Post a question';
			askBtn.removeAttribute('disabled')
		});
};

