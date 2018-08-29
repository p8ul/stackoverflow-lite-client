export  const createQuestions = (data) => {
	return `
      <div class="question-list-item">
            <div class="col-6">
                <h2>
                    <a class="text-primary" href="question_answers.html">
                        ${data.title}
                    </a>
                </h2>                
                <h5 class="text-grey">${data.created_at} <span class="text-primary"> by ${data.username}</span></h5>
            </div> 
        <!-- right icons  -->
        <div class="col-2">
            <table class="text-center stats-box">
                <tr>
                    <td>
                        ${data.answers_count}
                    </td>
                </tr>
                <tr>
                    <td>Answers</td>
                </tr>
                <tr>
                    <td>
                        <img class="icon fadeIn" src="./assets/img/se.png" />
                    </td>
                </tr>
            </table>
        </div>
        <!-- ./right icons -->
        <div class="bb clearfix"></div>
    </div>
    `;
};