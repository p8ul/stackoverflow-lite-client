import api from './api';
import { getToken } from '../store';
import { render } from './render';
import { successTemplate } from '../Templates';
import { popupContent, popupNode } from './Nodes';

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 */
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
 * @param {Element|Window} target Target Element
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

export const toggleElement = (el) => {
	if (el.classList.contains('hidden')) {
		el.classList.remove('hidden');
		return;
	}
	el.classList.add('hidden');
};

export const popUp = (message) => {
	popupContent.innerHTML = '';
	render('div', successTemplate(message), popupContent);
	setTimeout(() => toggleElement(popupNode), 4000);
};
