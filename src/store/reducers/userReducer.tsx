import { userLoginService } from 'Features/UserCommon/Login/services/user.login.service';

const INITIAL_STATE = {
	loggedInUser: null,
	tokenData: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { loggedInUser } = state;
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				loggedInUser: { ...action.loggedInUser } || loggedInUser,
			};

		case 'UPDATE_USER':
			return {
				...state,
				loggedInUser: { ...action.loggedInUser } || loggedInUser,
			};

		case 'ADD_TOKEN':
			console.log('ADD_TOKEN', action.spotifyApi);
			return {
				...state,
				tokenData: { ...action.tokenData },
				spotifyApi: action.spotifyApi || state.tokenData?.spotifyApi,
			};
		default:
			return state;
	}
};
