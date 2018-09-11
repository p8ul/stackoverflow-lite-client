export const answerBody = (data, comments) => {
	return `
    <div class="answer__item">
        <div class="answer__item_vote pull-left">
            <div class="arrow-up"></div>
            <div class="text-center answer__item_vote__count text-bold">${parseInt(data.upvotes) - parseInt(data.downvotes)}</div>
            <div class="arrow-down"></div>
        </div>
        <!-- answer body -->
        <div class="answer__item_body pull-left">
            <p>
                <p>
                    ${data.answer_body}
                </p>
            </p>
        </div>
        <!-- ./body -->
        <div class="question__comments ml-40 mt--5">
                <div class="clearfix bb"></div>
                <h4 class="text-bold">Comments</h4>
                <div class="clearfix bb"></div>

                ${comments.map(comment => {if(data.answer_id === comment.answer_id) {
		return(`
        <p class="">${comment.comment_body}</p>
        <div class="text-mute">Answerd ${comment.created_at}<br/> <span class="text-primary"> by ${comment.username}</span></div>
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