export const acceptCheckBox = (data) => {
	let checked = data.accepted ? 'checked': 'unchecked';
	return `
      <div class="answer__checkbox form-group" title="Mark as Preferred">
        <input id="${data.answer_id}" type="checkbox" class="accepted" data-id="${data.answer_id}" ${checked}="checked" name="accept">
        <label for="${data.answer_id}"></label>
      </div>
    `;
};