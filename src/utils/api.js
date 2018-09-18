class Api {
	constructor() {
		// this.baseUrl = 'http://127.0.0.1:5000/api/v1/';
		this.baseUrl = 'https://stackoverflow-paul.herokuapp.com/api/v1/';
	}

	post(endPoint, data, jwtToken = null, method='POST') {
		return fetch(`${this.baseUrl}${endPoint}`, {
			method: method,
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
