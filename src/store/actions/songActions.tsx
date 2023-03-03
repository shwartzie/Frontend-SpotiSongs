interface setSongsQueryPayload {
	tracks: any[] | null;
	tracksData: any | null;
}

export const setSongsQuery = ({ tracks, tracksData }: setSongsQueryPayload): any => {
	return async (dispatch: any) => {
		try {
			if (!tracks) {
				dispatch({ type: 'SET_SONGS_QUERY', tracks: null, tracksData: null });
				return;
			}
			dispatch({
				type: 'SET_SONGS_QUERY',
				tracks: [...tracks],
				tracksData: { ...tracksData },
			});
		} catch (error) {
			console.error(error);
		}
	};
};
