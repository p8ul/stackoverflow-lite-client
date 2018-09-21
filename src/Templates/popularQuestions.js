export const popularQuestions = (data) => {
	return (`
    <tr>
        <td>
            <div class="table__tag">${data.answers_count}</div>
        </td>
        <td>
            ${data.title}
        </td>
        <td>
            ${data.date}
        </td>
        <td>
        <img title="Edit question" class="table__td__img pull-right hatch edit cursor-pointer" data-id="${data.question_id}" src="assets/img/clipboards.svg" />
        
        <img title="Delete question" class="table__td__img cursor-pointer pull-right hatch delete" data-id="${data.question_id}" src="assets/img/trash.svg" />
        </td>
    </tr>
    `);
};