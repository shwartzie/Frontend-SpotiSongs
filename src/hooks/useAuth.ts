import { userService } from 'Features/UserCommon/services/user.service';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { signup, login, setSpotifyToken } from 'store/actions/userActions';

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_CLIENT_ID,
});

export const useAuth = (code: string = '') => {
	const [refreshToken, setRefreshToken] = useState<string>(null);
	const [expiresIn, setExpiresIn] = useState<number>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const { tokenData }: any = useSelector((state: any): any => state.userModule);

	useEffect(() => {
		if (!code || code === '' || tokenData || userService.getLocalEntity('tokenData')) return;
		dispatch(setSpotifyToken({ code, spotifyApi }));
	}, [code]);

	useEffect(() => {
		if (!tokenData) return;
		spotifyApi.setAccessToken(tokenData.accessToken);
		// navigate('/home');
		setRefreshToken(tokenData.refreshToken);
		setExpiresIn(tokenData.expiresIn);
		setIsLoading(false);
		spotifyApi
			.getMe()
			.then(({ body }) => {
				console.log('getting body', { ...body });
				// const user: any = userService.getUserById(body.id);
				// console.log('getting user', { ...user });
				// if (user) {
				// 	dispatch(login({ ...user }));
				// } else {
				// 	dispatch(signup({ ...body }));
				// }
			})
		// 	.catch((error) => {
		// 		// navigate('/');
		// 		console.error(error);
		// 	});
	}, [tokenData]);

	const handleRefreshToken = async (refreshToken: string) => {
		const interval = setInterval(async () => {
			setIsLoading(true);
			try {
				const { data, status } = await userService.getRefreshToken(refreshToken);
				if (status !== 200) {
					navigate('/login');
					throw new Error('Failed to refresh token');
				}
				dispatch(setSpotifyToken({ tokenData: { ...data }, spotifyApi, isRefreshing: true }));
				setIsLoading(false);
				setRefreshToken(data.newRefreshToken);
				setExpiresIn(data.expiresIn);
			} catch (error) {
				console.error(`Failed to get refreshToken: ${error}`);
			}
		}, (expiresIn - 60) * 1000);
		return () => clearInterval(interval);
	};

	useEffect(() => {
		if (!refreshToken || !expiresIn) return;
		handleRefreshToken(refreshToken);
	}, [refreshToken, expiresIn]);

	return {
		refreshToken,
		expiresIn,
		setRefreshToken,
		setExpiresIn,
		isLoading,
		spotifyApi,
		tokenData,
	};
};
