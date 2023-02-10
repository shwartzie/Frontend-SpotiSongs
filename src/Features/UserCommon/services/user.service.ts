import axios from 'common/services/Server/axios';

export const userService = {
    test,
    login
};

async function test() {
    try {
        return axios.get('test');
    } catch (error) {
        console.log(error);
    }
}

async function login() {
    try {
        const res = await axios.get('/', {
            params: {
                hi: "hello"
            },
        });
        console.log(res);
        return await res;
        // return await axios.post('users/login')
    } catch (error) {
        console.log(error);
    }
}