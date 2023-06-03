import { axiosService } from '../Server/axios';

const axios = axiosService.axios;

export const albumService = {
	addUserAlbums,
	add,
};

add;

async function add(tracks: any[]) {
	try {
		const albums = _getAlbumsToAdd(tracks, null);
		const response = await axios.post(`albums/add`, { albums });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function addUserAlbums(tracks: any[], userId: string) {
	try {
		console.log(`adding albums...`);
		const albums = _getAlbumsToAdd(tracks, userId, true);
		console.log(albums);
		const response = await axios.post(`albums/${userId}/add`, { albums });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

function _getAlbumsToAdd(tracks: any[], userId: string | null = null, isUser: boolean = false): any {
	const albums = _mappedAlbums(tracks, userId, isUser);
	const payload = [];
	albums.forEach((album) => {
		payload.push(album);
	});
	return payload;
}

function _mappedAlbums(tracks: any[], userId: string | null = null, isUser: boolean = false) {
	const map = new Map();
	tracks.forEach((track) => {
		const { id, name } = track.album;
		if (isUser) {
			map.set(id, {
				external_id: id,
				name,
				user_id: userId,
			});
		} else {
			map.set(id, {
				external_id: id,
				name,
			});
		}
	});
	console.log(map);
	return map;
}
