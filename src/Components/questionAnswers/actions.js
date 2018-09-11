import api from '../../utils/api';
import { getToken } from '../../store';
import { $on, 
	formValidator, 
	processListErrors,
	resetQuestionAndAnswersDom 
} from '../../utils';
/** Renders */
import {
	renderAnswerContent, renderAnswerHeader, 
	renderQuestionBody,
	renderQuestionTitle
} from './TemplateRenders';

const HandleCommentEvents = () => {
	const commentBtns = document.querySelectorAll('.commentBtn');
	const commentTextArea = document.querySelectorAll('.comment-box');
	Object.values(commentBtns).map((el, index) => {		
		$on(commentBtns[index], 'click',(e)=>{sendComment(e, commentBtns[index]);});
		$on(commentTextArea[index], 'input',(e)=>{showCommentButton(e, commentBtns[index]);});
	});
};

const showCommentButton = (e, el) => {
	let id = el.getAttribute('data-id');
	let commentBtn = document.getElementById(`commentBtn${id}`);
	commentBtn.classList.remove('hidden');
};

const resetInnerText = (el, oldText, newText) => {
	el.innerText = newText;
	el.classList.add('bg-red');
	el.classList.add('stretchLeft');
	setTimeout(()=> {
		el.innerText = oldText;
		el.classList.remove('bg-red');
		el.classList.remove('stretchLeft');
	}, 2000);
};
const sendComment = (e, el) => {
	let id = el.getAttribute('data-id');
	let commentText = document.getElementById(`commentBody${id}`).value;	
	console.error(id, commentText);
	console.log(el.innerText);
	if (!commentText) {
		resetInnerText(el, el.innerText, 'Please add a comment');
	} else {
		el.innerText = 'Sending ....';
		el.classList.add('floating');
		resetInnerText(el, el.innerText, 'Ok');
        
		postComment({
			url: `questions/answers/comment/${id}`,
			data: {'comment_body': commentText}
		});
	}
};

export const getQuestion = (url) => {
	api.get(url)
		.then(res => res.json())
		.then(data => data.results)
		.then(data => {
			console.log(data.comments);
			renderQuestionBody(data.question[0]);
			renderQuestionTitle(data.question[0]);
			renderAnswerHeader(data.question[0]);
			renderAnswerContent(data.answers, data.comments);
			setTimeout(HandleCommentEvents(),3000);
			resetQuestionAndAnswersDom();
		})
		.catch(error => console.error(error));
};

const postComment = ({url, data}) => {
	api
		.post(url, data, getToken())
		.then(res => res.json())
		.then(data => {
			window.location.reload();
		})
		.catch(error => {console.error(error);});
};

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
			callBackFunc();
			window.location.reload();
		});
};