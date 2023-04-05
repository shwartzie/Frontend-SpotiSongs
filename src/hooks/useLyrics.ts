import { lyricsService } from 'Features/Lyrics/services/lyrics.service';
import { useMemo, useState, useEffect } from 'react';
import { LyricsPayload } from 'types/Lyrics';

interface useLyrics {
	currentSongPlaying: any;
}

export const useLyrics = ({ currentSongPlaying }: useLyrics) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [lyrics, setLyrics] = useState<string>(null);
	const [isClosed, setClosed] = useState<boolean>(true);
	const [songName, setCurrentSongName] = useState<any>();
	// const lyricsData: any | null = useMemo(async () => {
	// 	console.log('currentSongPlaying', currentSongPlaying);
	// 	if (!currentSongPlaying) return;
	// 	const { data, status }: LyricsPayload = await lyricsService.getLyrics({
	// 		track: currentSongPlaying.name,
	// 		artist: currentSongPlaying.artists[0].name,
	// 	});
	// 	if (status !== 200) {
	// 		// TODO: Handle Error
	// 		return;
	// 	}
	// 	return data.lyrics;
	// }, [lyrics]);

	useEffect(() => {
		if (lyrics && songName !== currentSongPlaying.name) {
			setClosed(false);
			return;
		}

		const _handleLyrics = async () => {
			const { data, status }: LyricsPayload = await lyricsService.getLyrics({
				track: currentSongPlaying.name,
				artist: currentSongPlaying.artists[0].name,
			});
			if (status !== 200) {
				return;
			}
			console.info('getData useEffect', data.lyrics.substring(0, 20));
			setLyrics(data.lyrics);
			setClosed(false);
			setCurrentSongName(currentSongPlaying.name);
		};
		_handleLyrics();
	}, [isClicked]);

	return {
		isClicked,
		setIsClicked,
		isClosed,
		setClosed,
		lyrics,
		setLyrics,
	};
};
