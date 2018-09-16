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
        <img class="table__td__img pull-right hatch" src="assets/img/unlocked.svg" />
        </td>
    </tr>
    `);
};