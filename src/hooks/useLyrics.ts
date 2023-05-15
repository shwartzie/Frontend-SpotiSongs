import { lyricsService } from 'Features/Lyrics/services/lyrics.service';
import { useEffect, useMemo, useState } from 'react';
import { LyricsPayload } from 'types/Lyrics';

interface useLyrics {
	currentSongPlaying: any;
}

export const useLyrics = ({ currentSongPlaying }: useLyrics) => {
	const [lyrics, setLyrics] = useState<string>(null);
	const [songName, setCurrentSongName] = useState<string>('');

	const isSongNameEqual = () => {
		return songName === currentSongPlaying?.name;
	};

	useEffect(() => {
		if (isSongNameEqual()) setLyrics(null);
	}, [currentSongPlaying]);

	useEffect(() => {
		(async () => {
			try {
				const { data, status }: LyricsPayload = await lyricsService.getLyrics({
					track: currentSongPlaying.name,
					artist: currentSongPlaying.artists[0].name,
				});

				setLyrics(data.lyrics);
				setCurrentSongName(currentSongPlaying.name);
			} catch (error) {
				console.error(error);
			}
		})();

		return () => {
			// setLyrics("Could not find lyrics for this song")
			return;
		};
	}, [currentSongPlaying]);

	return {
		lyrics,
		setLyrics,
	};
};
