export type LikedSongs = {};

export interface FilteredProps {
	songs: any[];
	songsData: any | null;
	onSong: (song: any) => void;
}
