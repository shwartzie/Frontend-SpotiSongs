import { TokenData, TokenApiData } from '../../types/Token';
import { userService } from '../../Features/UserCommon/services/user.service';
import SpotifyWebApi from 'spotify-web-api-node';
type UserToLogIn = {
	userId: string;
	// username: string;
	// password: string;
};
export const login = ({ userId }: UserToLogIn) => {
	
	return async (dispatch) => {
		try {
			const user = await userService.login(userId);
			// console.log('after dispatch', user);
			dispatch({ type: 'LOGIN', loggedInUser: { ...user.data } });
		} catch (error) {
			console.error(error);
			throw new Error(`User was not found, following error: ${error}`);
		}
	};
};

export const signup = (userToSignup) => {
	return async (dispatch) => {
		try {
			const user = await userService.signup(userToSignup);
			dispatch({ type: 'LOGIN', loggedInUser: user });
		} catch (error) {
			console.error(error);
		}
	};
};

export const setSpotifyToken = ({ code, spotifyApi, tokenData, isRefreshing }: any) => {
	return async (dispatch: any) => {
		try {
			if (tokenData && !isRefreshing) {
				dispatch({ type: 'ADD_TOKEN', tokenData });
				return;
			}

			const { data, status }: TokenApiData = await userService.loginWithSpotify(
				code,
				spotifyApi._credentials.clientId
			);

			dispatch({ type: 'ADD_TOKEN', tokenData: { ...data }, spotifyApi });

			if (status !== 200) {
				dispatch({ type: 'ADD_TOKEN', tokenData: null });
				throw new Error('unexpected error with ADD_TOKEN');
			}
		} catch (error) {
			console.error(error);
		}
	};
};

export const setLocalToken = () => {
	return async (dispatch: any) => {
		const tokenData: TokenData = userService.getLocalEntity('tokenData');
		const spotifyApiClientId = userService.getLocalEntity('spotfiyApi');
		if (!tokenData) return;
		const spotifyApi = new SpotifyWebApi({
			clientId: spotifyApiClientId,
		});
		console.dir('setLocalToken', spotifyApi);
		spotifyApi.setAccessToken(tokenData.accessToken);
		dispatch({ type: 'ADD_TOKEN', tokenData: { ...tokenData }, spotifyApi });
	};
};
export const logout = (loggedInUser) => {
	return async (dispatch) => {
		// const user = await userService.logout()
		// dispatch({ type: 'LOGOUT', loggedInUser: user })
	};
};
