import axios from './axios.ts';

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