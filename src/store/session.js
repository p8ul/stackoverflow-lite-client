export const  setToken = (token, key='token') => {
	localStorage.setItem(key, token);
};

export const getToken = (key='token') => {
	return localStorage.getItem(key);
};

export const removeToken = (key='token') => {
	localStorage.removeItem(key);
};

export const isLoggedIn = () => {
	var token = getToken();
	if (token === null || token === 'undefined')
		return false;   
	return true;
};

export const logOut = () => {
	let el = document.getElementById('logout-link');
	el.addEventListener('click', e => {
		removeToken();
		window.location.reload();  
	});	
};
