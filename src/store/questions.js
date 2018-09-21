let initialState = {
	questions: []
};

/**
 * Mutate questions state
 * @param {!Object} action type and payload
 */
export const questions = (action={}) => {
	switch (action.type) {
	case 'SET':
		initialState.questions = action.payload;
		return initialState;    
	default:
		return initialState;
	}
};

/**
 * Search and returns a question from state
 * @param {!int} id question id
 */
export const getQuestion = (id) => {
	let found = initialState.questions.find((element) => {
		return element.question_id === id;
	});
	return found;
};

