/* eslint no-console: 0 */

import { isLoggedIn, logOut } from '../store';
import { toggleElement, preLoader} from '../utils';

/** 
 *  Logged in user
 *  	:Hide login link if user is logged in
 *  	:Show logout link if user is logged in
 *  Guest User
 * 		: Replace answer form with login button
 * 		: Hide comment form
 * 
 */
export const resetQuestionAndAnswersDom = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');		
		toggleElement(preLoader);
		// reset token onclick listener
		logOut();
	} else {
		try {
			document.getElementById('answerBtn').classList.add('hidden');
			document.getElementById('answerBtnLogin').classList.remove('hidden');
			const commentBoxes = document.querySelectorAll('.comment-box');
			const commentBtnz = document.querySelectorAll('.commentBtn');
			Object.values(commentBoxes).map((el, index) => {		
				commentBoxes[index].classList.add('hidden');
				commentBtnz[index].classList.add('hidden');
			});
		} catch(e) {console.error(e);}
		toggleElement(preLoader);
			
	}
};

/** 
 *  Hide login link if user is logged in
 *  Show logout link if user is logged in
 */
export const resetQuestionDom = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');
		toggleElement(preLoader);
		// reset token onclick listener
		logOut();
	}
};

/** Hide login link if user is logged in
 *  Remove sign up form if user is logged in
 *  Show logout link if user is logged in
 */
export const resetSignupDom = () => {
	if (isLoggedIn()) {
		document.getElementById('signup-form').innerHTML = 'You are logged in';
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');
		toggleElement(preLoader);
		// reset token on click listener
		logOut();
	} else {
		toggleElement(preLoader);
	}

};


/**
 * Redirect to login page user if not logged in
 */
export const accessController = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');
		toggleElement(preLoader);
		// reset token onclick listener
		logOut();
	} else {
		window.location.href = '/login.html';
	}
};
