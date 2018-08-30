export const answerBody = data => {
	return `
    <div class="answer__item">
        <div class="answer__item_vote pull-left">
            <div class="arrow-up"></div>
            <div class="text-center text-bold">${parseInt(data.upvotes) - parseInt(data.downvotes)}</div>
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

                I can't explain it so i don't post an answer, but the way to solve it is to <br/>change
                <code>class D(B,C):</code> to <code>class D(C)</code>
                
                <div class="clearfix bb"></div>
                <span class="text-grey">Add a comment</span>
                <textarea class="comment-box" placeholder="Comment here..."></textarea>
        </div>
</div>  
    `;
};