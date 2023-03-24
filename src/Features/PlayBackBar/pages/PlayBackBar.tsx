import React, { useMemo, useRef, useEffect } from 'react';
import 'react-h5-audio-player/src/styles.scss';
import { AudioElement } from '../../../types';
import { Bar } from '../components/Bar';

type PlayBackBarProps = {
	currentSong: any;
	isPlaying: boolean;
	setCurrentSongData: (currentSongData: any) => void;
};

// type CurrentSong = {
//     title: string;
//     url: string;
//     progress: number;
//     length: number;
// };

export const PlayBackBar = ({ isPlaying, currentSong, setCurrentSongData }: PlayBackBarProps) => {
	const audioElement: AudioElement = useRef();

	useEffect(() => {
		if (isPlaying) {
			audioElement.current.play();
		} else {
			audioElement.current.pause();
		}
	}, [isPlaying]);

	const checkWidth = (event: React.MouseEvent<HTMLElement>, clientWidth) => {
		const offset = event.nativeEvent.offsetX;
		const divProgress: number = (offset / clientWidth) * 100;
		audioElement.current.currentTime = (divProgress / 100) * currentSong.length;
	};

	const onPlaying = (event) => {
		const duration = audioElement.current?.duration;
		const currentTime = audioElement.current?.currentTime;

		setCurrentSongData({
			...currentSong,
			progress: (currentTime / duration) * 100,
			length: duration,
		});
	};
	return (	
		<article className="play-back-bar">
			<>
				{currentSong && <audio ref={audioElement} onTimeUpdate={onPlaying} src={currentSong.href} /> }

				<Bar currentSong={currentSong} checkWidth={checkWidth} />
			</>
		</article>
	);
};
