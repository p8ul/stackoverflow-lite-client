export const isAccepted = (data) => {
	return `
     <div class="answer__checkbox">
     ${data.accepted ? 
		'<input class="accept-box" checked type="checkbox"><label title="Accepted" ></label>'
		: ''
} 
     
     </div>
    `;
};