import { utilService } from 'common/services/util.service';

import { axiosInstance } from 'common/services/Server/axios';

const axios = axiosInstance.axios.create();

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
