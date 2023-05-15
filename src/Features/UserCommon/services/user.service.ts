import { axiosInstance } from 'common/services/Server/axios';
import { TokenData, TokenApiData } from '../../../types/Token';

const axios = axiosInstance.axios.create();

export const userService = {
	login,
	signup,
	getUserById,
	loginWithSpotify,
	getRefreshToken,
	saveLocalEntity,
	getLocalEntity,
	removeLocalEntity,
};

type User = {};

const USER_BASE = 'user';

async function login(userId: string) {
	console.log('userId-----------', userId);
	try {
		const result: any = await axios.get(`${USER_BASE}/login/${userId}`, {
			params: {
				isSchema: true,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function signup(user: any) {
	try {
		const result = await axios.post(`${USER_BASE}/signup`, { ...user });
		console.log('signup successful', result);
		return result;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function getUserById(userId: string) {
	try {
		const result = await axios.get(`${USER_BASE}/${userId}`);
		console.log('getUserById result', result);
		return result;
	} catch (error) {
		console.log(error);
		// throw error;
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

async function loginWithSpotify(code: string, spotifyApi: string): Promise<TokenApiData> {
	try {
		const result: TokenApiData = await axios.post('auth/login/spotify', { code });
		// saveLocalEntity('tokenData', { ...result.data });
		// saveLocalEntity('spotifyApi', spotifyApi);
		return result;
	} catch (error) {
		console.log(error);
		return error.message;
	}
}

function saveLocalEntity<T>(entityType: string, entities: T): void {
	localStorage.setItem(entityType, JSON.stringify(entities));
}

function getLocalEntity<T extends object>(entityType: string): T {
	return JSON.parse(localStorage.getItem(entityType));
}

function removeLocalEntity(entityType: string): void {
	localStorage.removeItem(entityType);
}

// const obj = getLocalEntity<User>('');
