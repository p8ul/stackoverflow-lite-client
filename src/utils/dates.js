import moment from 'moment';

export const dateFormatter = (date=moment()) => {
	return moment(date, 'DD-MM-YY h:mm:ss').fromNow();
};