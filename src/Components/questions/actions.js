import api from '../../utils/api';

export const searchQuestions = ({query, callBackFnc}) => {
	api.get(`questions/?q=${query}`)
		.then(res => res.json())
		// .then(data => data.results)
		.then(data => {
			callBackFnc(data);
		})
		.catch(error => console.log(error));	
};