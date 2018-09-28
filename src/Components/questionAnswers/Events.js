/* eslint no-undef: 0 */
import { 
	$on, 
	postAndRedirect, 
	toggleInnerText, 
	removeErrors,
	formValidator,
	render,
	toggleElement,
	editPopupNode,
	dismissNode
} from '../../utils';
import { selectedQuestion, getAnswer } from '../../store';
import { updateAnswer } from './actions';
import { loaderSmall } from '../../Templates';
/**
 * Set comment event listeners
 *
 */
export const HandleCommentEvents = () => {
	const commentBtns = document.querySelectorAll('.commentBtn');
	const commentTextArea = document.querySelectorAll('.comment-box');
	Object.values(commentBtns).map((el, index) => {		
		$on(commentBtns[index], 'click',()=>{sendComment(commentBtns[index]);});
		$on(commentTextArea[index], 'input',()=>{showCommentButton(commentBtns[index]);});
	});
};


/**
 * Set upvote & downvote event listeners
 *
 */
export const HandleVotesEvents = () => {
	const upVotesBtns = document.querySelectorAll('.arrow-up');
	const downvotesBtns = document.querySelectorAll('.arrow-down');
	Object.values(upVotesBtns).map((el, index) => {		
		$on(upVotesBtns[index], 'click',()=>{sendVote(upVotesBtns[index], true);});
		$on(downvotesBtns[index], 'click',()=>{sendVote(downvotesBtns[index], false);});
	});
};

export const HandleEditDeleteAnswerEvents = () => {
	const editAnswerBtns = document.querySelectorAll('.edit-answer');
	const deleteAnswerBtns = document.querySelectorAll('.delete-answer');
	const confirmDeleteAnswerBtns = document.querySelectorAll('.confirm-delete-answer');

	Object.values(editAnswerBtns).map((el,index) => {
		$on(editAnswerBtns[index], 'click', ()=>{sendUpdateAnswer(editAnswerBtns[index], true);});
		$on(deleteAnswerBtns[index], 'click', ()=>{showDelete(deleteAnswerBtns[index], true);});
		$on(confirmDeleteAnswerBtns[index], 'click', ()=>{deleteAnswer(confirmDeleteAnswerBtns[index], true);});
	});
	$on(dismissNode, 'click', () => toggleElement(editPopupNode));
};

const deleteAnswer = (el) => {
	let id = el.getAttribute('data-id');
	let question_id = selectedQuestion().question.question_id;
	postAndRedirect({
		url: `questions/${question_id}/answers/${id}`,
		data: {},
		method: 'DELETE'
	});
};

const showDelete = (el) => {
	let id = el.getAttribute('data-id');
	let node = document.getElementById('confirm-delete'+id);
	toggleElement(el);
	setTimeout(() => {
		toggleElement(node);	
	}, 1000);
	
	setTimeout(()=> {
		toggleElement(node);
		setTimeout(() => {
			toggleElement(el);	
		}, 1000);		
	},5000);
	
};

/**
 * Get answer id and call update answer function
 * 
 * @param {!Element|Window} el Target Element 
 */
let askForm;
let data = {};
const sendUpdateAnswer = (el) => {	
	let id = el.getAttribute('data-id');
	toggleElement(editPopupNode);
	let question_id = selectedQuestion().question.question_id;
	let answer = getAnswer(parseInt(id));
	askForm = document.forms.ask;

	const setState = (e) => {
		data[e.target.name] = e.target.value;
		removeErrors(data);
	};
	Object.values(askForm.elements).map(el => {
		if (el.name) {
			data[el.name] = '';
			el.value = '';
		}			
	});

	Object.values(askForm.elements).map(el => {		
		$on(el, 'keyup',(e)=>{setState(e);});
		$on(el, 'input',(e)=>{setState(e);});
	});

	Object.values(askForm.elements).map(el => {
		if (el.name) {
			data[el.name] = answer[el.name];
			el.value = answer[el.name];
		}
	});
	$on(editAnswerBtn, 'click', event => updateAns({		
		url: `questions/${question_id}/answers/${id}`,
		data: data,
		event
	}));
};

const updateAns = ({url, data, event}) => {
	event.preventDefault();
	let errors = formValidator(data);	
	
	var isValid = Object.keys(errors).length === 0;
	if (!isValid) {
		return false;
	}
	editAnswerBtn.innerText = '';
	render('div', loaderSmall(), editAnswerBtn);
	postAndRedirect({		
		url,
		data,
		method: 'PUT'
	});

};


/** Accept an answer */
export const HandleAcceptAnswerEvents = () => {
	const acceptBtns = document.querySelectorAll('.accepted');
	Object.values(acceptBtns).map((el, index) => {		
		$on(acceptBtns[index], 'click',()=>{setAnswerAccepted(acceptBtns[index], true);});	
	});
};

/**
 * Get answer id and call update answer function
 * 
 * @param {!Element|Window} el Target Element 
 */

const setAnswerAccepted = (el) => {	
	let id = el.getAttribute('data-id');
	let question_id = selectedQuestion().question.question_id;
	updateAnswer({
		url: `questions/${question_id}/answers/${id}`,
		data: {accepted: el.checked},
		el,
	});
};

/**
 * Get answer id and comment text then call post comment function.
 *
 * @param {Element|Window} el Target Element
 */
const sendComment = (el) => {
	let id = el.getAttribute('data-id');
	let commentText = document.getElementById(`commentBody${id}`).value;	
	if (!commentText.trim()) {
		toggleInnerText(el, el.innerText, 'Please add a comment');
	} else {
		el.innerText = 'Sending ....';
		el.classList.add('floating');
		toggleInnerText(el, el.innerText, 'Ok');
        
		postAndRedirect({
			url: `questions/answers/comment/${id}`,
			data: {'comment_body': commentText}
		});
	}
};

/**
 * Get answer upvote/downvote id and call post vote function.
 *
 * @param {Element|Window} el Target Element
 * @param {!boolean} value true to upvote / false to downvote
 */
const sendVote = (el, value) => {
	let id = el.getAttribute('data-id'); 
	postAndRedirect({
		url: `questions/answers/vote/${id}`,
		data: {'vote': value}
	});
};


/**
 * Toggle comment button
 *
 *  @param {Element|Window} el Target Element
 */
const showCommentButton = (el) => {
	let id = el.getAttribute('data-id');
	let commentBtn = document.getElementById(`commentBtn${id}`);
	commentBtn.classList.remove('hidden');
};
