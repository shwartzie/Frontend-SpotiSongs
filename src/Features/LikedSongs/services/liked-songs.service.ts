import { AxiosResponse } from 'axios';
import { axiosService } from 'common/services/Server/axios';
import { tokenService } from 'common/services/Server/token';
const axios: any = axiosService.axios;

export const likedSongsService = {
	query,
	getTracks,
	add,
	loadSongs,
	getTracksToAdd,
};

async function query(accessToken: string) {
	try {
		console.log('query');
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

async function getTracks(userId: string) {
	try {
		console.log('getTracks', userId);
		const payload = await axios.get(`songs/${userId}/tracks`);
		return payload;
	} catch (error) {
		console.error(error);
	}
}

async function add(tracks: unknown, userId: string) {
	try {
		// console.log('adding tracks', userId, tracks);
		const payload = await axios.post(`songs/${userId}/tracks/add`, { tracks });
		return payload;
	} catch (error) {
		console.error(error);
	}
}

async function loadSongs(spotifyApi) {
	const promises: Promise<any>[] = [];
	let offset: number = 0;
	const initialPayload = await spotifyApi.getMySavedTracks({
		limit: 50,
		offset,
	});
	if (!initialPayload.body.total) {
		return [];
	}

	const load = (offset: number = 0, limit: number) => {
		if (offset > limit) return;
		const payload: any = spotifyApi.getMySavedTracks({
			limit: 50,
			offset,
		});
		promises.push(payload);
		load(offset + 50, limit);
	};
	load(offset + 50, initialPayload.body.total);

	const tracks = await Promise.all(promises);
	const flattendTracks = tracks
		.map((payload) => {
			return payload.body.items;
		})
		.flatMap((item) => item)
		.map((item) => item.track);

	return flattendTracks;
}

function getTracksToAdd(tracks: any[], userId: string): any[] {
	return tracks.map(
		({
			album,
			artists,
			href,
			uri,
			type,
			track_number,
			preview_url,
			name,
			is_local,
			id,
			disc_number,
			duration_ms,
			explicit,
		}) => {
			return {
				album_id: album.id,
				artists_ids: artists.map((artist: any) => artist.id),
				href,
				uri,
				type,
				track_number,
				preview_url,
				name,
				is_local,
				external_id: id,
				disc_number,
				duration_ms,
				explicit,
				user_id: userId,
			};
		}
	);
}
