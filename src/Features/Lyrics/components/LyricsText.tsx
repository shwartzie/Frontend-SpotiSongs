import React from 'react';

interface LyricsTextProps {
	lyrics: string;
}
export const LyricsText = ({ lyrics }: LyricsTextProps) => {
	return (
		<div className="LyricsModal__body">
			<div className="LyricsModal__lyrics">{!lyrics.length ? 'No Lyrics Found' : lyrics}</div>
		</div>
	);
};
