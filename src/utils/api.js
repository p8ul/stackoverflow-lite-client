class Api {
	constructor() {
		this.baseUrl = 'http://localhost:5000/api/v1/';
	}

	post(endpoint, data, token = null) {
		return fetch(`${this.baseUrl}${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				Authorization: `JWT ${token}`,
				'content-type': 'application/json'
			}
		});
	}
}

const api = new Api();
export default api;
