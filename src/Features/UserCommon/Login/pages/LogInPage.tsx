import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../store/actions/userActions';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Loading } from 'common/Components/Loading';
import { userLoginService } from '../services/user.login.service';
const demoUser = {
	username: 'admin',
	password: 'admin',
};
const AuthUrl: string = `https://accounts.spotify.com/authorize?client_id=42f2800f08eb405abb7ea297b337bba2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const code: string = new URLSearchParams(window.location.search).get('code');

export const LogInPage = () => {
	const dispatch: any = useDispatch();

	const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);

	
	const { isLoading } = useAuth(code);

	const handleLogin = async () => {
		
		//TODO: use getMe function to get the user information;
		// spotifyApi?.getMe().then(res => {
		// 	console.log(res)
		// });

		dispatch(login({ ...demoUser }));
	};

	return (
		<>
			{!isLoading ? (
				<Loading />
			) : (
				<Link to={`${AuthUrl}`} onClick={() => handleLogin()}>
					Login With Spotify
				</Link>
			)}
		</>
	);
};
