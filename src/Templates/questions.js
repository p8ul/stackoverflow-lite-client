export  const createQuestions = (data) => {
	return `
      <div class="question-list-item">
                                <div class="col-6">
                                    <h2>
                                        <a class="text-primary" href="question_answers.html">
                                            ${data.title}
                                        </a>
                                    </h2>
                                    <button class="btn btn-badge btn-link">
                                        JQuery
                                    </button>
                                    <button class="btn btn-badge btn-link">
                                        Rust
                                    </button>
                                    <h5 class="text-grey">Modified 1 min ago <span class="text-primary"> P8ul</span></h5>
                                </div> 
                                <!-- right icons  -->
                                <div class="col-6">
                                    <h4>&nbsp;</h4>
                                    <table class="text-center stats-box">
                                        <tr>
                                            <td>
                                                <span class="votes fadeIn">7</span>
                                            </td>
                                            <td>
                                                ${data.answers_count}
                                            </td>
                                            <td>13</td>
                                        </tr>
                                        <tr>
                                            <td>Votes</td>
                                            <td>Answers</td>
                                            <td>Views</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img class="icon hatch floating vote_thumb cursor-pointer" src="./assets/img/thumbs-up.svg" />
                                            </td>
                                            <td>
                                                <img class="icon fadeIn" src="./assets/img/se.png" />
                                            </td>
                                            <td>
                                                <img class="icon hatch" src="./assets/img/eye-open.svg" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <!-- ./right icons -->
                            </div>
    `;
};