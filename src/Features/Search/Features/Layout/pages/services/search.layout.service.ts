import { utilService } from 'common/services/util.service'

import axios from 'common/services/Server/axios'

export const searchLayoutService = {
	query,
	queryDemo,
}

async function query() {}

async function queryDemo() {
	try {
		const { data:{ query } } = await axios.get('api/genres/query')
		return query
	} catch (err) {
		console.log(err)
	}
}
