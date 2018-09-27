/* eslint no-console: 0 */

import { getTokenDetails } from '../store';
import { TOKEN_KEY } from '../Constants';

/**
 * Checks whether logged in user is author of a question or an answer
 * @param {!String} username user name to check against token payload
 * @param {!String} key token key name
 */
export const canAcceptAnswer = (username, key=TOKEN_KEY) => {
	try {
		if (getTokenDetails(key).username === username) {            
			return true;
		}
		return false;
	} catch(err){
		console.error(err);
		return false;
	}
	
};