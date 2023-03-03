const INITIAL_STATE = {
	tracks: null,
	tracksData: null,
};

export const songReducer = (state = INITIAL_STATE, action: any) => {
	const { tracks, tracksData } = state;
	switch (action.type) {
		case 'SET_SONGS_QUERY':
			return {
				...state,
				tracks: action.tracks,
				tracksData: action.tracksData,
			};
		default:
			return state;
	}
};
