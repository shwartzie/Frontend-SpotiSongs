import axios from '../../../common/services/Server/axios';

export const userService = {
    test
}

async function test() {
    try {
        return axios.get('test')
    } catch (error) {
        console.log(error)
    }
}