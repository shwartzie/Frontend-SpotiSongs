import { axiosService } from './axios';

const axios = axiosService.axiosWithAuth;

export const tokenService = {
	isTokenValid,
};

const PATH = 'token';

async function isTokenValid() {
	try {
		const response = await axios.get(PATH);
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
