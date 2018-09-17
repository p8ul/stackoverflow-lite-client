export const confirmAction = ({message}) => {
	return `
    <div class="panel fade">
      <div class="panel__body">
        ${message}
      </div>
      <div class="panel__footer">
        <button class="btn btn-primary cancel">cancel</button>
        <button class="btn bg-red floating" id="confirm-delete" data-id="">Delete</button>
      </div>
    </div>
    `;
};