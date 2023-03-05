import { userService } from '../../Features/UserCommon/services/user.service';

type UserToLogIn = {
	username: string;
	password: string;
};
export const login = (userToLogIn: UserToLogIn) => {
	return async (dispatch) => {
		try {
			const { data, status } = await userService.login(userToLogIn);
			if (status !== 200) {
				throw new Error(`User was not found, following error: ${data.error}`);
			}
			dispatch({ type: 'LOGIN', loggedInUser: data });
		} catch (error) {
			console.error(error);
		}
	};
};

type Token = {
	data: { accessToken: string; refreshToken: string; expiresIn: number };
	status: number;
};
export const setSpotifyToken = ({ code, spotifyApi, tokenData }: any) => {
	return async (dispatch: any) => {
		try {
			if (tokenData) {
				dispatch({ type: 'ADD_TOKEN', tokenData });
				return;
			}

			const { data, status }: Token = await userService.loginWithSpotify(code);
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

export const logout = (loggedInUser) => {
	return async (dispatch) => {
		// const user = await userService.logout()
		// dispatch({ type: 'LOGOUT', loggedInUser: user })
	};
};
