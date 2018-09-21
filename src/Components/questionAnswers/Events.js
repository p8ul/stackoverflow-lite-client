import { $on, postAndRedirect, toggleInnerText } from '../../utils';
import { selectedQuestion } from '../../store';
import { updateAnswer } from './actions';
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
}

/**
 * Get answer id and comment text then call post comment function.
 *
 * @param {Element|Window} el Target Element
 */
const sendComment = (el) => {
	let id = el.getAttribute('data-id');
	let commentText = document.getElementById(`commentBody${id}`).value;	
	if (!commentText) {
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
