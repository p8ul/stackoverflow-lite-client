let initialState = {
	questions: []
};

export const questions = (action={}) => {
	switch (action.type) {
	case 'SET':
		initialState.questions = action.payload;
		return initialState;    
	default:
		return initialState;
	}
};

export const getQuestion = (id) => {
	let found = initialState.questions.find((element) => {
		return element.question_id === id;
	});
	return found;
};

