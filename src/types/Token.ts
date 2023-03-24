export interface TokenApiData {
	data: TokenData;
	status: number | null;
};

export interface TokenData {
	accessToken: string;
	refreshToken: string;
	expires_in: number;
}
