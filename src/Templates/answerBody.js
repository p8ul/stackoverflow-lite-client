import { dateFormatter, canAcceptAnswer } from '../utils';
import { acceptCheckBox } from './acceptCheckBox';
import { actionButtons } from './actionButtons';
import { isAccepted } from './isAccepted';
import { selectedQuestion } from '../store';

export const answerBody = (data, comments) => {
	let username = selectedQuestion().question.username;
	return `
    <div class="answer__item">
        <div class="answer__item_vote pull-left">
            <div class="cursor-pointer arrow-up" title="Upvote" id="upvote${data.answer_id}" data-id="${data.answer_id}"></div>
            <div class="fade text-center answer__item_vote__count text-bold">${parseInt(data.upvotes) - parseInt(data.downvotes)}</div>
            <div class="cursor-pointer arrow-down" title="Down vote" id="downvote${data.answer_id}" data-id="${data.answer_id}"></div>
            ${canAcceptAnswer(username) ?  acceptCheckBox(data): isAccepted(data)}
        </div>
        <!-- answer body -->
        <div class="answer__item_body pull-left">
            <div class="col-10">
                <p>                
                    ${data.answer_body}
                    ${canAcceptAnswer(username) ? actionButtons(data): ''}
                </p>
            </div>
            <div class="col-2 float-right">
                <div class="text-mute">Answered ${dateFormatter(data.date)}<br/> <span class="text-primary"> by ${data.username}</span></div>
            </div>            
        </div>
        <!-- ./body -->
        <div class="question__comments ml-40 mt--5">
                <div class="clearfix bb"></div>
                <h4 class="text-bold">Comments</h4>
                <div class="clearfix bb"></div>

                ${comments.map(comment => {if(data.answer_id === comment.answer_id) {
		return(`
        <div class="col-10 comment">
            <p class="comment__body">${comment.comment_body}</p>
            <div class="comment__editor hidden">
                <textarea 
                    name="comment_body"
                    class="stretchRight input-control" 
                    placeholder="Please enter comment here...">
                </textarea>
            </div>
        </div>
        <div class="col-2">
            <div class="text-mute">Commented ${dateFormatter(comment.date)}<br/> <span class="text-primary"> by ${comment.username}</span></div>
        </div>
        <div class="clearfix bb"></div>
        `);
	}}).join('')}
                
                <span class="text-grey">Add a comment</span>
                <textarea id="commentBody${data.answer_id}" class="comment${data.answer_id} comment-box" placeholder="Comment here..."></textarea>
                <button data-id="${data.answer_id}" id="commentBtn${data.answer_id}" class="hidden commentBtn cursor-pointer pull-right bg-orange">Send comment</button>
        </div>
</div>  
    `;
};