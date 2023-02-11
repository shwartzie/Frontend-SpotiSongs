import React from 'react';

interface Input {
    setVolume: (volume: number) => void;
    volume: number;
}
export const VolumeInput = ({ setVolume, volume }: Input) => {
	return (
		<>
			<input
				type="range"
				min={0}
				max={100}
				step={0.05}
				value={volume}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setVolume(event.target.valueAsNumber);
				}}
				style={{"backgroundSize":volume +'100%'}}
			/>
		</>
	);
};
