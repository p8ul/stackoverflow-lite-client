export const actionButtons = (data={}) => {
	return `
      <div class="action__links" >
        <div class="pull-left text-mute cursor-pointer edit-answer" data-id="${data.answer_id}">Edit&nbsp;</div>
        <div class="pull-left text-mute cursor-pointer delete-answer" data-id="${data.answer_id}">&nbsp;Delete</div>
        <div class="pull-left hatch text-mute cursor-pointer p-4 hidden confirm-delete-answer text-white bg-red" id="confirm-delete${data.answer_id}" data-id="${data.answer_id}">&nbsp;Confirm Delete</div>
      </div>
    `;
};