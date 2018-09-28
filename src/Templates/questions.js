import { dateFormatter } from '../utils';

export  const createQuestions = (data, id) => {
	return `
      <div class="question-list-item fade" data-key="${id}">
            <div class="col-6">
                <h2>
                    <a class="text-primary" href="question_answers.html?id=${data.question_id}">${data.title}</a>
                </h2>                
                <h5 class="text-grey">${dateFormatter(data.date)} <span class="text-primary"> by ${data.username}</span></h5>
            </div> 
        <!-- right icons  -->
        <div class="col-2">
            <table class="text-center stats-box">
                <tr>
                    <td>
                        ${data.votes_count}
                    </td>
                    <td>
                        ${data.answers_count}
                    </td>
                </tr>
                <tr>
                    <td>Votes</td>
                    <td>Answers</td>
                </tr>
                <tr>
                    <td>
                        <img class="icon hatch floating vote_thumb" src="./assets/img/thumbs-up.svg" />
                    </td>
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