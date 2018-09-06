import { testEmail, formValidator } from '../utils/validations';

const data = {};


test('Validate email', () => {
	expect(testEmail.test('email@example.com')).toBe(true);
});

test('Test form validator', () => {
	expect(typeof formValidator(data)).toBe(typeof {});
});