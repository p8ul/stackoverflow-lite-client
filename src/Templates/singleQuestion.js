import { dateFormatter } from '../utils';

export  const questionBodyTemplate = (data) => {
	return `
    <div class="question-list-item">
            <div class="col-10">
                <p class="question-body">${data.body}</p>                
                <h5 class="text-grey">${dateFormatter(data.date)} <span class="text-primary"> by ${data.username}</span></h5>
                
            </div> 
            <!-- right icons  -->
            <div class="col-3">
                <h4>&nbsp;</h4>
                <table class="text-center stats-box">
                        <tr>
                           <td>
                                ${data.answers}
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
        </div>

    `;
};