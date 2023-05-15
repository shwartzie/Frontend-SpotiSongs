import axios, { AxiosInstance } from 'axios';

class Axios {
	private static instance: AxiosInstance | null = null;

	private constructor() {}

	public static getInstance(): AxiosInstance {
		if (!this.instance) {
			this.instance = this.create();
		}
		return this.instance;
	}

	public static create(): AxiosInstance {
		return axios.create({
			baseURL: 'http://localhost:3030/api/',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			},
		});
	}
}

class AxiosWithAuth {
	private axiosInstance: any | AxiosInstance;
	private authToken: string;
	private secondAuthToken: string;

	constructor(axiosInstance: any | AxiosInstance, authToken: string, secondAuthToken: string | null) {
		this.axiosInstance = axiosInstance;
		this.axiosInstance.baseURL = 'http://localhost:3030/api/auth/';
		this.authToken = authToken;
		this.secondAuthToken = secondAuthToken;
	}

	public updateTokens(authToken: string, secondAuthToken: string): void {
		this.authToken = authToken;
		this.secondAuthToken = secondAuthToken;
	}

	public updateSecondToken(secondAuthToken: string): void {
		this.secondAuthToken = secondAuthToken;
	}

	public get(): any | AxiosInstance {
		const combinedToken = `Bearer ${this.authToken} ${this.secondAuthToken}`;
		this.axiosInstance.defaults.headers.common['Authorization'] = combinedToken;
		return this.axiosInstance;
	}

	public updateBaseUrl(instance: any, baseURL: string) {
		instance.baseURL = baseURL;
	}
}

const axiosInstance = Axios.getInstance();
const axiosWithAuthInstance = new AxiosWithAuth(axiosInstance, process.env.REACT_APP_SECRET_TOKEN, null);

export const axiosService = {
	axios: axiosInstance,
	axiosWithAuth: axiosWithAuthInstance.get(),
};
