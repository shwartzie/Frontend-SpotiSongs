import { axiosService } from '../Server/axios';

const axios = axiosService.axios;

export const trackService = {
	add,
};

async function add(tracks: any[]) {
	try {
		try {
			const payload = await axios.post(`songs/tracks/add`, { tracks });
			return payload;
		} catch (error) {
			console.error(error);
		}
	} catch (error) {}
}
