import { axiosService } from '../Server/axios';
import { utilService } from '../util.service';

const axios = axiosService.axios;

export const imageService = {
	addAlbumImages,
	add,
};

async function add(tracks: any[], isAlbumRelated: boolean = false) {
	try {
		console.log(`adding images...`);
		const images = _getAlbumsImagesToAdd(tracks, isAlbumRelated);
		const response = await axios.post(`/add`, { images });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function addAlbumImages(tracks: any[], isAlbumRelated: boolean = true) {
	try {
		console.log(`adding album images...`);
		const images = _getAlbumsImagesToAdd(tracks, isAlbumRelated);
		const response = await axios.post(`albums/add/images`, { images });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

function _getAlbumsImagesToAdd(tracks: any[], isAlbumRelated: boolean): any {
	return tracks.map((track: any): any[] => {
		return track.album.images.map(({ url, width, height }) => {
			return isAlbumRelated
				? {
						url,
						width,
						height,
						album_id: track.album.id,
						external_id: utilService.makeId(),
				  }
				: {
						url,
						width,
						height,
						external_id: utilService.makeId(),
				  };
		});
	});
}
