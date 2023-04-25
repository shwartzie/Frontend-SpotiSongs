import { lyricsService } from 'Features/Lyrics/services/lyrics.service';
import { useEffect, useState } from 'react';
import { LyricsPayload } from 'types/Lyrics';

interface useLyrics {
	currentSongPlaying: any;
}

export const useLyrics = ({ currentSongPlaying }: useLyrics) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [lyrics, setLyrics] = useState<string>(null);
	const [isClosed, setClosed] = useState<boolean>(true);
	const [songName, setCurrentSongName] = useState<string>('');

	useEffect(() => {
		if (songName !== currentSongPlaying?.name) setLyrics(null);
	}, [currentSongPlaying]);

	useEffect(() => {
		if (lyrics && songName === currentSongPlaying?.name) {
			setClosed(false);
			return;
		}
		// console.log(lyrics, '\n', songName, '\n', currentSongPlaying?.name);
		(async () => {
			const { data, status }: LyricsPayload = await lyricsService.getLyrics({
				track: currentSongPlaying?.name,
				artist: currentSongPlaying.artists[0].name,
			});
			// TODO: Handle Error
			// if (status !== 200) {
			// 	return;
			// }

			setLyrics(data.lyrics);
			setClosed(false);
			setCurrentSongName(currentSongPlaying.name);
		})();

		return () => {
			setClosed(false);
			return;
		};
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
