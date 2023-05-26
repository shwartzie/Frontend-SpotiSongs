import { axiosService } from '../Server/axios';

const axios = axiosService.axios;

export const albumService = {
	add,
	addImages,
};

async function add(tracks: any[], userId: string) {
	try {
		console.log(`adding albums...`);
		const albums = _getAlbumsToAdd(tracks, userId);
		console.log(albums);
		const response = await axios.post(`albums/${userId}/add`, { albums });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function addImages(tracks: any[], userId: string) {
	try {
		console.log(`adding album images...`);
		const images = _getAlbumsImagesToAdd(tracks, userId);
		const response = await axios.post(`albums/${userId}/add/images`, { images });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

function _getAlbumsToAdd(tracks: any, userId: string): any {
	const albums = _mappedAlbums(tracks, userId);
	const payload = [];
	albums.forEach((album) => {
		payload.push(album);
	});
	return payload;
}

function _mappedAlbums(tracks, userId: string) {
	const map = new Map();
	tracks.forEach((track) => {
		const { id, name } = track.album;
		map.set(id, {
			external_id: id,
			name,
			user_id: userId,
		});
	});
	console.log(map);
	return map;
}

function _getAlbumsImagesToAdd(tracks, userId): any {
	return tracks.map((track: any): any[] => {
		return track.album.images.map(({ url, width, height }) => {
			return {
				external_id: track.album.id,
				url,
				width,
				height,
			};
		});
	});
}
