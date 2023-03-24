import axios from 'common/services/Server/axios';
import { TokenData, TokenApiData } from '../../../types/Token';

export const userService = {
	login,
	loginWithSpotify,
	getRefreshToken,
	saveLocalEntity,
	getLocalEntity,
	removeLocalEntity,
};

type User = {};

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

async function loginWithSpotify(code: string, spotifyApi: string): Promise<TokenApiData> {
	try {
		const result: TokenApiData = await axios.post('auth/login/spotify', { code });
		saveLocalEntity('tokenData', { ...result.data });
		saveLocalEntity('spotifyApi', spotifyApi);
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
