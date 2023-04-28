import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../store/actions/userActions';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Loading } from 'common/Components/Loading';
import { userLoginService } from '../services/user.login.service';
import { LoginButton } from '../components/LoginButton';
import { userService } from 'Features/UserCommon/services/user.service';
const demoUser = {
	username: 'admin',
	password: 'admin',
};

const code: string = new URLSearchParams(window.location.search).get('code');

export const LogInPage = () => {
	const dispatch: any = useDispatch();

	const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);

	const { isLoading } = useAuth(code);

	const handleLogin:() => void = async () => {
		
		// dispatch(login({ ...demoUser }));
	};

	return <>{!isLoading ? <Loading /> : <LoginButton handleLogin={handleLogin} />}</>;
};
