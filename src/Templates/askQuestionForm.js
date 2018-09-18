export const askQuestionForm = () => {
	return `
    <form class="form-ask" name="ask">
        <div class="error" id="server_errors"></div>
        <div class="">
            <label>Title</label>
            <input 
            class="stretchRight input-control" 
            type='text'
            name="title" 
            placeholder="What's your programming question? Be specific">
            <div class="error" id="title_error"></div>
        </div>

        <div class="">
            <label>Body</label>
            <textarea 
            name="body"
            class="stretchRight input-control" 
            placeholder="Please enter question body here...">
            </textarea>
            <div class="error" id="body_error"></div>                                        
        </div>

        <div class="text-center">
            <button id="askBtn" class="floating btn btn-primary bg-orange p-15 btn-block">
                Edit Question
            </button>
        </div> 
    </form>
    `;
};