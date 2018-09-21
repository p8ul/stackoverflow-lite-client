import { SET_ANSWERS, SET_COMMENTS, SET_QUESTION} from '../Constants';

let initialState = {
	question: [],
	answers: [],
	comments: []
};

/**
 * Store question, answers and comments locally 
 * @param {!object} action 
 */
export const selectedQuestion = (action={}) => {
	switch (action.type) {
	case SET_QUESTION:
		initialState.question = action.payload;
		return initialState; 
	case SET_ANSWERS:
		initialState.answers = action.payload;
		return initialState; 
	case SET_COMMENTS:
		initialState.comments = action.payload;
		return initialState;   
	default:
		return initialState;
	}
};

/**
 * Search and returns a answer from state
 * @param {!int} id answer id
 */
export const getAnswer = (id) => {
	let found = initialState.answers.find((element) => {
		return element.answer_id === id;
	});
	return found;
};
