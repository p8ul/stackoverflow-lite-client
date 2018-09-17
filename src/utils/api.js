class Api {
	constructor() {
		this.baseUrl = 'https://stackoverflow-paul.herokuapp.com/api/v1/';
	}

	post(endPoint, data, jwtToken = null) {
		return fetch(`${this.baseUrl}${endPoint}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				Authorization: `JWT ${jwtToken}`,
				'content-type': 'application/json'
			}
		});
	}

	delete(endPoint, data, jwtToken = null) {
		return fetch(`${this.baseUrl}${endPoint}`, {
			method: 'DELETE',
			body: JSON.stringify(data),
			headers: {
				Authorization: `JWT ${jwtToken}`,
				'content-type': 'application/json'
			}
		});
	}
  
	get(endPoint, jwtToken) {
		return fetch(`${this.baseUrl}${endPoint}`, {
			method: 'GET',
			headers: {
				Authorization: `JWT ${jwtToken}`,
				'content-type': 'application/json'
			}
		});
	}
}

const api = new Api();
export default api;
