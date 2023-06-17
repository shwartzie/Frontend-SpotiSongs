import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../store/actions/userActions';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Loading } from 'common/Components/Loading';
import { userLoginService } from '../services/user.login.service';
import { LoginButton } from '../components/LoginButton';
const demoUser = {
	username: 'admin',
	password: 'admin',
};

const code: string = new URLSearchParams(window.location.search).get('code');

export const LogInPage = () => {
	const dispatch: any = useDispatch();

	const { isLoading, spotifyApi } = useAuth(code);
	const handleLogin: () => void = async () => {
		//TODO: use getMe function to get the user information;
		// spotifyApi?.getMe().then(res => {
		// 	console.log(res)
		// });

		dispatch(login({ ...demoUser }));
	};

	return <>{!isLoading ? <Loading /> : <LoginButton handleLogin={handleLogin} />}</>;
};
