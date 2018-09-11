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
