
export const  setToken = token => {
	localStorage.setItem('token', token);
};

export const getToken = () => {
	return localStorage.getItem('token');
};

export const removeToken = () => {
	localStorage.removeItem('token');
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
