export const answerForm = () => {
	return `
    <form class="form-ask" name="ask">
        <div class="error" id="server_errors"></div>
        <div class="">
            <label>Answer Body</label>
            <textarea 
            name="answer_body"
            class="stretchRight input-control" 
            placeholder="Please enter question body here...">
            </textarea>
            <div class="error" id="answer_body_error"></div>                                        
        </div>

        <div class="text-center">
            <button id="editAnswerBtn" class="btn btn-primary bg-orange p-15 btn-block">
                Edit answer
            </button>
        </div> 
    </form>
    `;
};