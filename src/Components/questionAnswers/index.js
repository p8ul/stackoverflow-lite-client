import { $on } from '../../utils';
import api from '../../utils/api';
import { isLoggedIn, logOut } from '../../store';
/**
 * Renders
 */
import {
	renderAnswerContent, renderAnswerHeader, 
	renderQuestionBody,
	renderQuestionTitle
} from './TemplateRenders';
if (isLoggedIn()) {
	document.getElementById('login-link').classList.add('hidden');
	document.getElementById('logout-link').classList.remove('hidden');
	// reset token onclick listener
	logOut();
}

let data = {};

const setState = (e, el) => {
	data[e.target.name] = e.target.value;
	console.log(data);
	let id = el.getAttribute('data-id');
	let commentText = document.getElementById('commentBody'+id).value;
	console.error(commentText)
};

const handleEvents = () => {
	const commentBoxes = document.querySelectorAll('.comment-box');
	console.error(typeof commentBoxes)
	Object.values(commentBoxes).map((el, index) => {		
		$on(commentBoxes[index], 'keyup',(e)=>{setState(e, commentBoxes[index]);});
		$on(commentBoxes[index], 'change',(e)=>{setState(e, commentBoxes[index]);});
	});
};

const HandleCommentEvents = () => {
	const commentBtns = document.querySelectorAll('.commentBtn');
	Object.values(commentBtns).map((el, index) => {		
		$on(commentBtns[index], 'click',(e)=>{setState(e, commentBtns[index]);});
	});
};

let id = window.location.search.substr(1).split('=',2)[1];

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
	})
	.catch(error => console.error(error));
    

