import api from './api';
import { getToken } from '../store';

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
