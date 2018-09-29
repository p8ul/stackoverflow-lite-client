/**
 * Test session functions
 */
import { 
	setToken, getToken, removeToken, getTokenDetails,
} from '../../store';
import {
	TEST_TOKEN, TEST_TOKEN_KEY
} from '../../Constants';
import { isLoggedIn } from '../session';

test('Should set and get token', () => {
	setToken(TEST_TOKEN, TEST_TOKEN_KEY);
	expect(getToken(TEST_TOKEN_KEY)).toEqual(TEST_TOKEN);
});

test('Should TOKEN payload details', () => {
	let payload = getTokenDetails(TEST_TOKEN_KEY);
	expect(payload.username).toEqual('sky@sky.com');
});

test('Should remove token', () => {
	removeToken(TEST_TOKEN_KEY);
	expect(getToken(TEST_TOKEN_KEY)).toEqual(null);
});

test('should return true if logged in', () => {
	expect(isLoggedIn()).toEqual(false);
});

