import { $on } from '../../utils';
import api from '../../utils/api';
import { isLoggedIn, logOut, getToken } from '../../store';
/** Form Validations */
import { formValidator, processListErrors, removeErrors } from '../../utils';
/** Renders */
import {
	renderAnswerContent, renderAnswerHeader, 
	renderQuestionBody,
	renderQuestionTitle
} from './TemplateRenders';

const restDom = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');		
		// reset token onclick listener
		logOut();
	} else {
		try {
			document.getElementById('answerBtn').classList.add('hidden');
			document.getElementById('answerBtnLogin').classList.remove('hidden');
			const commentBoxes = document.querySelectorAll('.comment-box');
			const commentBtnz = document.querySelectorAll('.commentBtn');
			Object.values(commentBoxes).map((el, index) => {		
				commentBoxes[index].classList.add('hidden');
				commentBtnz[index].classList.add('hidden');
			});
		} catch(e) {}
			
	}
};

restDom();


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


const handleEvents = () => {
	Object.values(answerFormElement.elements).map(el => {		
		$on(el, 'keyup',(e)=>{setState(e);});
		$on(el, 'input',(e)=>{setState(e);});
	});
};

handleEvents();

const sendComment = (e, el) => {
	data[e.target.name] = e.target.value;
	let id = el.getAttribute('data-id');
	let commentText = document.getElementById('commentBody'+id).value;
};

const HandleCommentEvents = () => {
	const commentBtns = document.querySelectorAll('.commentBtn');
	Object.values(commentBtns).map((el, index) => {		
		$on(commentBtns[index], 'click',(e)=>{sendComment(e, commentBtns[index]);});
	});
};

let id = window.location.search.substr(1).split('=',2)[1];

const getQuestion = () => {
	api.get(`questions/${id}`)
		.then(res => res.json())
		.then(data => data.results)
		.then(data => {
			console.log(data.comments);
			renderQuestionBody(data.question[0]);
			renderQuestionTitle(data.question[0]);
			renderAnswerHeader(data.question[0]);
			renderAnswerContent(data.answers, data.comments);
			setTimeout(HandleCommentEvents(),3000);
			restDom();
		})
		.catch(error => console.error(error));
};
getQuestion();

try {
	answerBtn.addEventListener('click', event => {
		event.preventDefault();
		let errors = formValidator(data);		
		
		var isValid = Object.keys(errors).length === 0;
		if (!isValid) {
			console.log(isValid);
			return false;
		}
		api
			.post(`questions/${id}/answers`, data, getToken())
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.errors) {
					processListErrors(data.message, 'loginErrors');
					return false;
				}
				resetData();
				window.location.reload();
			});
	});
} catch(error) {}
    

