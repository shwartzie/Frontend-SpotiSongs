import axios from 'common/services/Server/axios';

export const userService = {
    login,
    loginWithSpotify,
    getRefreshToken
};

type User = {

};

async function login(user) {
    try {
        const result = await axios.post('auth/login', { ...user });
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function getRefreshToken(refreshToken: string) {
    try {
        const result = await axios.post('auth/login/spotify/refresh', { refreshToken });
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function loginWithSpotify(code) {
    try {
        const result = await axios.post('auth/login/spotify', { code });
        return result;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}