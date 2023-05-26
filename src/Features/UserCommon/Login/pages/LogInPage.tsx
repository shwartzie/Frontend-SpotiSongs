import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, setSpotifyToken } from '../../../../store/actions/userActions';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Loading } from 'common/Components/Loading';
import { userLoginService } from '../services/user.login.service';
import { LoginButton } from '../components/LoginButton';
import { userService } from 'Features/UserCommon/services/user.service';
import SpotifyWebApi from 'spotify-web-api-node';
// const demoUser = {
// 	username: 'admin',
// 	password: 'admin',
// };

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_CLIENT_ID,
});

const code: string = new URLSearchParams(window.location.search).get('code');

export const LogInPage = () => {
	const [refreshToken, setRefreshToken] = useState<string>(null);
	const [expiresIn, setExpiresIn] = useState<number>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const { tokenData }: any = useSelector((state: any): any => state.userModule);

	useEffect(() => {
		if (!code || code === '' || tokenData || userService.getLocalEntity('tokenData')) return;
		dispatch(setSpotifyToken({ code, spotifyApi }));
	}, [code]);

	useEffect(() => {
		if (!tokenData) return;
		// navigate('/home');
		spotifyApi.setAccessToken(tokenData.accessToken);
		spotifyApi
			.getMe()
			.then(async ({ body }) => {
				// console.log('getting body', { ...body });
				let user: any = await userService.getUserById(body.id);
				if (!user) user = await userService.signup(body);
				console.log('before dispatch',user);
				await dispatch(login({ userId: user.external_id }));
				// console.log('getting user', { ...user });
				setRefreshToken(tokenData.refreshToken);
				setExpiresIn(tokenData.expiresIn);
				setIsLoading(false);
				navigate('/home');
			})
			.catch((error) => {
				navigate('/');
				console.error(error);
			});
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

	// const { isLoading } = useAuth(code);

	const handleLogin: () => void = async () => {
		// dispatch(login({ ...demoUser }));
	};

	return <>{!isLoading ? <Loading /> : <LoginButton handleLogin={handleLogin} />}</>;
};
