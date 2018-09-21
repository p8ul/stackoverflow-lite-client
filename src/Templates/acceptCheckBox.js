export const acceptCheckBox = (data) => {
	let checked = data.accepted ? 'checked': 'unchecked';
	return `
      <div class="answer__checkbox" title="Mark as Preferred">
        <input type="checkbox" class="accepted" data-id="${data.answer_id}" ${checked}="checked" name="accept">
      </div>
    `;
};