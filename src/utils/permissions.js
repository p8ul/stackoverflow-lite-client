import { getTokenDetails } from '../store';
import { TOKEN_KEY } from '../Constants';
/**
 * Checks whether logged in user is the question author
 * Only a question author can accept an answer
 */
export const canAcceptAnswer = (username, key=TOKEN_KEY) => {
	console.error(getTokenDetails(key).username, username)
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