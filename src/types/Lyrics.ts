import { AxiosResponse } from 'axios';

export interface GetLyrics {
	track: string;
	artist: string;
}

export interface LyricsPayload {
	data: {
		lyrics: string;
	};
	status: number;
	error?: string;
}

export type UseLyrics = {
	lyrics: string;
	setLyrics: (lyrics: string) => void;
	isClicked: boolean;
	setIsClicked: (isClicked: boolean) => void;
	isClosed: boolean;
	setClosed: (isClosed: boolean) => void;
};
