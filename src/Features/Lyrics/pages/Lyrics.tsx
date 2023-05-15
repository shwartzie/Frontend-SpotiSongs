import { useLyrics } from 'hooks/useLyrics';
import React, { useEffect, useState } from 'react';
import { LyricsButton } from '../components/LyricsButton';
import { LyricsModal } from '../components/LyricsModal';
import { UseLyrics } from 'types/Lyrics';

interface LyricsProps {
	currentSongPlaying: any;
}
export const Lyrics = ({ currentSongPlaying }: LyricsProps) => {
	const { lyrics, setLyrics }: UseLyrics = useLyrics({
		currentSongPlaying,
	});
	const [isClosed, setClosed] = useState<boolean>(true);
	const [isClicked, setIsClicked] = useState<boolean>(false);

	console.log(isClicked);

	return (
		<>
			<LyricsButton setIsClicked={setIsClicked} />
			{isClicked && (
				<LyricsModal
					lyrics={lyrics}
					setClosed={setClosed}
					isClosed={isClosed}
					setIsClicked={setIsClicked}
					setLyrics={setLyrics}
					isClicked={isClicked}
				/>
			)}
		</>
	);
};
