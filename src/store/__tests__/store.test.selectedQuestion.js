import { 
	SET_ANSWERS, 
	SET_COMMENTS, 
	SET_QUESTION,
	TEST_SELETED_QUESTION_PAYLOAD    
} from '../../Constants';
import { selectedQuestion } from '../selectedQuestion';

const initialState = TEST_SELETED_QUESTION_PAYLOAD;

test('Should return selected question question initial state', () => {
	expect(selectedQuestion().question).toEqual([]);
});

test('Should set selected question', () => {
	selectedQuestion({type: SET_QUESTION, payload: initialState.question});
	expect(selectedQuestion().question).toEqual(initialState.question);
});

test('Should set selected question answers', () => {
	selectedQuestion({type: SET_ANSWERS, payload: initialState.answers});
	expect(selectedQuestion().answers).toEqual(initialState.answers);
});

test('Should set selected question comments', () => {
	selectedQuestion({type: SET_COMMENTS, payload: initialState.comments});
	expect(selectedQuestion().comments).toEqual(initialState.comments);
});
