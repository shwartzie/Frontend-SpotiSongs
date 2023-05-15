import { AxiosResponse } from 'axios';
import { axiosInstance } from 'common/services/Server/axios';
const axios = axiosInstance.axiosWithAuth.create();

export const likedSongsService = {
	query,
};

async function query(accessToken: string) {
	try {
		const response: AxiosResponse<any, any> = await axios.get('https://api.spotify.com/v1/me/tracks', {
			headers: {
				Authorization: 'Bearer ' + accessToken,
				Accept: 'application/json',
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return error;
	}
}
