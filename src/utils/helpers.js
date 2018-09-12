import api from './api';
import { getToken } from '../store';

export const $on = (target, type, callback) => {
	target.addEventListener(type, callback);
};

/**
 * Post and redirect
 *
 * @param {!string} url url endpoint
 * @param {!object} data post object data
 */
export const postAndRedirect = ({url, data}) => {
	api
		.post(url, data, getToken())
		.then(res => res.json())
		.then(() => {
			window.location.reload();
		})
		.catch(error => {console.error(error);});
};

/**
 * Toggle an element innerHtml content.
 *
 * @param {!string} el Html Element clicked (up or down arrow )
 * @param {!string} oldText Current element innerHtml content
 * @param {!string} newText new innerHtml Content
 */
export const toggleInnerText = (el, oldText, newText) => {
	el.innerText = newText;
	el.classList.add('bg-red');
	el.classList.add('stretchLeft');
	setTimeout(()=> {
		el.innerText = oldText;
		el.classList.remove('bg-red');
		el.classList.remove('stretchLeft');
	}, 2000);
};

export const changeInnerText = (el, newText) => {
	el.innerText = newText;
	el.classList.add('bg-red');
	el.classList.add('stretchLeft');
	return el;
};
