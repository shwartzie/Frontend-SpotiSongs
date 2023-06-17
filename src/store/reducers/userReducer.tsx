import { userLoginService } from 'Features/UserCommon/Login/services/user.login.service';
import { userService } from 'Features/UserCommon/services/user.service';

const INITIAL_STATE = {
	loggedInUser: null,
	tokenData: null,
	spotifyApi: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { loggedInUser , tokenData, spotifyApi} = state;
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
			return {
				...state,
				tokenData: { ...action.tokenData } || tokenData || userService.getLocalEntity('tokenData'),
				spotifyApi: action.spotifyApi || spotifyApi,
			};
		default:
			return state;
	}
};
