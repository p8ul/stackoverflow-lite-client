import { isLoggedIn, logOut } from '../store';

export const resetQuestionAndAnswersDom = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');		
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
		} catch(e) {}
			
	}
};

export const resetQuestionDom = () => {
	if (isLoggedIn()) {
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');
		// reset token onclick listener
		logOut();
	}
};

export const resetSignupDom = () => {
	if (isLoggedIn()) {
		document.getElementById('signup-form').innerHTML = 'You are logged in';
		document.getElementById('login-link').classList.add('hidden');
		document.getElementById('logout-link').classList.remove('hidden');
		// reset token on click listener
		logOut();
	}
};