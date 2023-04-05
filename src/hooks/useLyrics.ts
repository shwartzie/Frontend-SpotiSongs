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

	const lyricsData: any | null = useMemo(async () => {
		console.log('currentSongPlaying', currentSongPlaying);
		if (!currentSongPlaying) return;
		const { data, status }: LyricsPayload = await lyricsService.getLyrics({
			track: currentSongPlaying.name,
			artist: currentSongPlaying.artists[0].name,
		});
		if (status !== 200) {
			// TODO: Handle Error
			return;
		}
		return data.lyrics;
	}, [lyrics]);

	useEffect(() => {
		if (lyrics) {
			setClosed(false);
			return;
		} else if (!lyricsData) {
			return;
		}

		console.info(lyricsData);
		lyricsData.then((lyrics: string) => {
			setLyrics(lyrics);
			setClosed(false);
		});
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
