import {
	TEST_TOKEN_KEY, SET_QUESTION,
	TEST_TOKEN, TEST_SELETED_QUESTION_PAYLOAD
} from '../../Constants';
import {setToken, selectedQuestion} from '../../store';
import { canAcceptAnswer } from '../permissions';

const initialState = TEST_SELETED_QUESTION_PAYLOAD;

test('Test if logged in user can accept question ', () => {
	setToken(TEST_TOKEN, TEST_TOKEN_KEY);
	selectedQuestion({type: SET_QUESTION, payload: initialState.question});
	let username = selectedQuestion().question.username;
	expect(canAcceptAnswer(username, TEST_TOKEN_KEY)).toEqual(true);
});
