import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { setSongsQuery } from '../../../store/actions/songActions';

type SearchInputProps = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput = ({ setQuery, query }: SearchInputProps) => {
	const navigate: NavigateFunction = useNavigate();

	const dispatch = useDispatch();

	const { tokenData, spotifyApi }: any = useSelector((state: any) => state.userModule);
	useEffect(() => {
		if (!query || query == '') return;
		if (!tokenData?.accessToken) {
			navigate('/login');
			return;
		}

		spotifyApi
			.searchTracks(query)
			.then((result) => {
				const { body } = result;
				const { tracks } = body;
				const { items } = tracks;

				const data = { ...items[0] };
				const tracksData = {
					id: data.id,
					name: data.name,
					artist: data.artists[0],
					albumImage: data.album.images,
					album: data.album,
					preview_url: data.preview_url,
					popularity: data.popularity,
					track_number: data.track_number,
					duration_ms: data.duration_ms,
					type: data.type,
					uri: data.uri,
					is_local: data.is_local,
				};
				dispatch(setSongsQuery({ tracks: [...items], tracksData: { ...tracksData } }));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [query]);

	const handleRemove = (): void => {
		setQuery('');
	};

	const handleQuery = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const filterBy = event.target.value;
		setQuery(filterBy);
		// const res = utilService.debounce(() => setQuery(filterBy), 1000)
		if (filterBy === '') {
			dispatch(setSongsQuery({ tracks: null, tracksData: null }));
		}
		// console.log("trying to debounce", filterBy);
		// console.log('res',res)
	};

	return (
		<div className="search-input-container">
			<form role="search">
				<span></span>
				<input
					maxLength={800}
					autoCorrect="off"
					placeholder="What do you want to listen to?"
					value={query}
					onChange={(event) => handleQuery(event)}
				/>
				<button onClick={() => handleRemove()}></button>
			</form>
		</div>
	);
};
