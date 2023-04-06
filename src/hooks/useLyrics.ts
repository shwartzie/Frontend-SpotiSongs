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
	const [songName, setCurrentSongName] = useState<string>();

	useEffect(() => {
		if (lyrics?.length > 0 || songName === currentSongPlaying?.name) {
			setClosed(false);
			return;
		}
		const _handleLyrics = async () => {
			const { data, status }: LyricsPayload = await lyricsService.getLyrics({
				track: currentSongPlaying.name,
				artist: currentSongPlaying.artists[0].name,
			});
			// TODO: Handle Error
			// if (status !== 200) {
			// 	return;
			// }

			setLyrics(data.lyrics);
			setClosed(false);
			setCurrentSongName(currentSongPlaying.name);
		};
		_handleLyrics();

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
