export const setSongsQuery = (tracks: any): any => {
	return async (dispatch: any) => {
		try {
			dispatch({ type: 'SET_SONGS_QUERY', tracks: [...tracks] });
		} catch (error) {
			console.error(error);
		}
	};
};
