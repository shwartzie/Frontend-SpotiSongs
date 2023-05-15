import { axiosService } from 'common/services/Server/axios';

const axios = axiosService.axiosWithAuth;

export const songService = {
	get,
	query,
};

async function query(filterBy = {}) {
	try {
		return await axios.get('songs/');
	} catch (error) {
		console.log(error);
		return error.response;
	}
}

async function get() {
	try {
		return getDemoSongs();
	} catch (error) {
		console.log(error);
	}
}

function getDemoSongs() {
	return [
		{
			title: 'Linking Park - In the end',
			url: 'https://myfreemp3.to/share?key=ODvrbCbppgt',
			progress: 0,
			length: 0,
		},
		{
			title: 'Drake - Forever',
			url: 'https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse',
			progress: 0,
			length: 0,
		},
		{
			title: 'Travis Scott - Stop trina be God',
			url: 'https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse',
			progress: 0,
			length: 0,
		},
	];
}
