const INITIAL_STATE = {
	tracks: null,
};

export const songReducer = (state = INITIAL_STATE, action: any) => {
	const { tracks } = state;
	switch (action.type) {
		case 'SET_SONGS_QUERY':
			return {
				...state,
				tracks: action.tracks || tracks,
			};

		default:
			return state;
	}
};
