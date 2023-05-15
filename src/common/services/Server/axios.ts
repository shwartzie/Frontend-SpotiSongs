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
  private axiosInstance: AxiosInstance;
  private authToken: string;

  constructor(axiosInstance: AxiosInstance, authToken: string) {
    this.axiosInstance = axiosInstance;
    this.authToken = authToken;
  }

  public get(): AxiosInstance {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${this.authToken}`;
    return this.axiosInstance;
  }
}

const axiosInstance = Axios.getInstance();
const axiosWithAuthInstance = new AxiosWithAuth(axiosInstance, process.env.REACT_APP_SECRET_TOKEN);

export const axiosService = {
  axios: axiosInstance,
  axiosWithAuth: axiosWithAuthInstance.get(),
};
