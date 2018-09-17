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
        <img class="table__td__img pull-right hatch" src="assets/img/clipboards.svg" />
        <img title="Delete question" class="table__td__img cursor-pointer pull-right hatch delete" data-id="${data.question_id}" src="assets/img/trash.svg" />
        </td>
    </tr>
    `);
};