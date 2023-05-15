import axios, { AxiosInstance } from 'axios';

class Axios {
	axios: AxiosInstance | null | any;
	constructor() {
		this.axios = null;
	}
	create() {
		if (!this.axios) {
			this.axios = axios.create({
				baseURL: 'http://localhost:3030/api/',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
				},
			});
		}
		return this.axios;
	}

	get() {
		if (!this.axios) return this.create();
		return this.axios;
	}
}

class AxiosWithAuth extends Axios {
	constructor() {
		super();
		if (!this.axios) return
		console.log('REACT_APP_SECRET_TOKEN', process.env.REACT_APP_SECRET_TOKEN);
		this.axios.Authorazation = `Bearer ${process.env.REACT_APP_SECRET_TOKEN}`;
	}
}

export const axiosInstance = {
	axios: new Axios(),
	axiosWithAuth: new AxiosWithAuth(),
};
