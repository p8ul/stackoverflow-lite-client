/**
 * Test session functions
 */
import { 
	setToken, getToken, removeToken,
} from '../../store';

const key = 'test_token';
const test_token = 'xsdfe423/23rwe/35234234/';

test('Test set and get token', () => {
	setToken(test_token, key);
	expect(getToken(key)).toEqual(test_token);
});

test('Test remove token', () => {
	removeToken(key);
	expect(getToken(key)).toEqual(null);
});

