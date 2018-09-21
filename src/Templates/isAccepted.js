export const isAccepted = (data) => {
	return `
     <div class="answer__checkbox">
     ${data.accepted ? 
		'<img title="Accepted" class="table__td__img cursor-pointer hatch" src="assets/img/check.svg" />'
		: ''}
     
     </div>
    `;
};