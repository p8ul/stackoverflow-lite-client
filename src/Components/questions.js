import api from '../utils/api';
import { resetQuestionDom } from '../utils';
import { createQuestions } from '../Templates';

resetQuestionDom(); 

let parentNode = document.getElementById('questions_list');

const processQuestionList = data => {
	document.getElementById('loader').innerHTML = '';
	data.results.forEach((dataRecord, id) => {
		let markUp = createQuestions(dataRecord, id);
		let container = document.createElement('div');
		container.classList.add('questions__node');
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
    

