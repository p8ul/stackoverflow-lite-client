import moment from 'moment';

/**
 * 
 * @param {!String} date date string in DD-MM-YY h:mm:ss format
 */
export const dateFormatter = (date=moment()) => {
	return moment(date, 'DD-MM-YY h:mm:ss').fromNow();
};