
import { 
	questionTitle, questionBodyTemplate,
	answerHeader, answerBody 
} from '../../Templates';

let parentNode = document.getElementById('questions_body');
let headerNode = document.getElementById('question_header');
let answersHeaderNode = document.getElementById('answers_header');
let answerContentNode = document.getElementById('answer_content');

export const renderAnswerContent = data => {
	data.forEach((dataRecord) => {
		let markUp = answerBody(dataRecord);
		let container = document.createElement('div');
		container.innerHTML = markUp;
		answerContentNode.appendChild(container);
	});
};

export const renderAnswerHeader = data => {
	let markUp = answerHeader(data);
	let container = document.createElement('div');
	container.innerHTML = markUp;
	answersHeaderNode.appendChild(container);
};

export const renderQuestionTitle = data => {
	let markUp = questionTitle(data);	
	let container = document.createElement('div');
	container.innerHTML = markUp;
	headerNode.appendChild(container);
};

export const renderQuestionBody= data => {
	let markUp = questionBodyTemplate(data);
	let container = document.createElement('div');
	container.classList.add('questions__body');
	container.innerHTML = markUp;
	parentNode.appendChild(container);
};
