import { LikedSongs } from '../Songs';
export type User = {
	country: string;
	display_name: string;
	email: string;
	explicit_content: { filter_enabled: boolean; filter_locked: boolean };
	external_urls: { spotify: string };
	followers: { href: string | null; total: number };
	href: string | null;
	id: string;
	images: [
		{
			height: string | number | null;
			url: string;
			width: string | number | null;
		}
	];
	product: string;
	type: string;
	uri: string;
};

// country
// :
// "IL"
// display_name
// :
// "Roni Shwarzman"
// email
// :
// "roni.ponik@gmail.com"
// explicit_content
// :
// {filter_enabled: false, filter_locked: false}
// external_urls
// :
// {spotify: 'https://open.spotify.com/user/ronishwarzman'}
// followers
// :
// {href: null, total: 4}
// href
// :
// "https://api.spotify.com/v1/users/ronishwarzman"
// id
// :
// "ronishwarzman"
// images
// :
// [{…}]
// product
// :
// "premium"
// type
// :
// "user"
// uri
// :
// "spotify:user:ronishwarzman"
