import { useLyrics } from 'hooks/useLyrics';
import React from 'react';
import { LyricsButton } from '../components/LyricsButton';
import { LyricsModal } from '../components/LyricsModal';
import { UseLyrics } from 'types/Lyrics';

interface LyricsProps {
	currentSongPlaying: any;
}
export const Lyrics = ({ currentSongPlaying }: LyricsProps) => {
	const { setIsClicked, isClicked, lyrics, setClosed, isClosed }: UseLyrics = useLyrics({ currentSongPlaying });

	return (
		<>
			<LyricsButton setIsClicked={setIsClicked} />
			{isClicked && (
				<LyricsModal lyrics={lyrics} setClosed={setClosed} isClosed={isClosed} setIsClicked={setIsClicked} />
			)}
		</>
	);
};
