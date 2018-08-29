import api from '../utils/api';
import { isLoggedIn, logOut } from '../store';
import { createQuestions } from '../Templates';

if (isLoggedIn()) {
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
	// reset token onclick listener
	logOut();
}

let parentNode = document.getElementById('questions_list');

const processQuestionList = data => {
	data.results.forEach((dataRecord, id) => {
		let markUp = createQuestions(dataRecord, id);
		let container = document.createElement('div');
		container.classList.add('as-Series');
		container.innerHTML = markUp;
		parentNode.appendChild(container);
	});
};

api.get('questions/')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		processQuestionList(data);
	})
	.catch(error => console.error(error));
    

