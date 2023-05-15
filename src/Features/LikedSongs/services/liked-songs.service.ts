import { AxiosResponse } from 'axios';
import { axiosService } from 'common/services/Server/axios';
import { tokenService } from 'common/services/Server/token';
const axios: any = axiosService.axiosWithAuth;

export const likedSongsService = {
	query,
};

async function query(accessToken: string) {
	try {
		console.log('query')
		const isTokenValid: any = await tokenService.isTokenValid();
		if (isTokenValid.status !== 200) throw new Error(isTokenValid.message);

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
