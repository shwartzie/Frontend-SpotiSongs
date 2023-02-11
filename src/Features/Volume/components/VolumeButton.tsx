import React from 'react';

interface VolumeButtonProps {
	setMute: (mute: boolean) => void;
	mute: boolean;
}
export const VolumeButton = ({ setMute, mute }: VolumeButtonProps) => {
	const handleSound = () => {
		setMute(!mute);
	};

	return (
		<>
			<button className="volume-btn" onClick={() => handleSound()}>
				<svg className={'volume-display'}></svg>
				{mute && <svg className={'volume-display ' + 'muted'}></svg>}
			</button>
		</>
	);
};
