export const rootTemplate = () => {
	return `
    <div id='root' class="hidden">
        <div class="popup hidden" id="popup">
            <div class="popup__card popup__card horizontal z-depth-4">
                <div class="card-stacked">
                    <span class="dismiss-btn cursor-pointer" title="close" id="dismiss-btn">x</span>
                    <div class="card-content" id="card-content">
                        
                    </div>
                </div>
            </div>
        </div>
        <button id="testBtn" class=""></button>
    </div>

	`;
};

export const testTemplate = () => {
	return `
    <div id='test' data-id="2"></div>
	`;
};

export const testForm = () => {
	return `
     <form name="testForm">
        <input type="password" name="password" value="123" id="password" />
        <div id="strength"></div>
     </form>
    `;
};