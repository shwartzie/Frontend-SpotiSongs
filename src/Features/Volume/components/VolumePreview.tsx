import React from 'react';
import { VolumeInput } from './VolumeInput';
import { VolumeButton } from './VolumeButton';

interface Volume {
	setMute: (mute: boolean) => void;
	mute: boolean;
	setVolume: (volume: number) => void;
	volume: number;
}

export const VolumePreview = ({ mute, setMute, volume, setVolume }: Volume) => {
	return (
		<>
			<VolumeButton mute={mute} setMute={setMute} />
			<VolumeInput volume={volume} setVolume={setVolume} />
		</>
	);
};
