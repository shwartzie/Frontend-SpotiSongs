import axios from 'common/services/Server/axios';
import { GetLyrics, LyricsPayload } from 'types/Lyrics';
export const lyricsService = {
	getLyrics,
};

const PARENT_ROUTE: string = 'songs';
async function getLyrics({ track, artist }: GetLyrics): Promise<LyricsPayload> {
	try {
		const payload: LyricsPayload = await axios.get(`${PARENT_ROUTE}/lyrics`, { params: { track, artist } });

		// if (status = 1231) {
		// 	throw new Error(payload.error);
		// }
		// console.log(payload);
		return payload;
	} catch (error) {
		console.error(error);
		// throw error;
		return error.message;
	}
}

