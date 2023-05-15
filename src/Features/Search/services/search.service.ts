import { utilService } from 'common/services/util.service';

import { axiosService } from 'common/services/Server/axios';

const axios = axiosService.axiosWithAuth;

export const searchService = {
	query,
	queryDemo,
};

async function query() {}

async function queryDemo() {
	try {
		const {
			data: { query },
		} = await axios.get('genres/query');
		return query;
	} catch (err) {
		console.log(err);
	}
}
