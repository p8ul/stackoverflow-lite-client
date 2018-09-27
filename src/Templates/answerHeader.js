export const answerHeader = data => {
	return `
    <div class="answer">
        <h2 class="text-primary" id="answers__count">${data.answers}. Answer(s)</h6>
        <div class="clearfix bb"></div>
    </div>
    `;
};