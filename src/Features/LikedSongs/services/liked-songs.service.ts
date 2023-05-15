import { AxiosResponse } from 'axios';
import { axiosService } from 'common/services/Server/axios';
const axios = axiosService.axiosWithAuth;

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
