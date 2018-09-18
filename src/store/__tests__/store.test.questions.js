import { 
	questions, getQuestion,
} from '../../store';

const qstns = [{name: 'test question', question_id: 30}];

test('Test questions initial state', () => {
	expect(questions().questions).toEqual([]);
});

test('Test set questions', () => {
	questions({type: 'SET', payload: qstns});
	expect(questions().questions).toEqual(qstns);
});

test('Test get a question by id', () => {
	questions({type: 'SET', payload: qstns});
	expect(getQuestion(30)).toEqual(qstns[0]);
});