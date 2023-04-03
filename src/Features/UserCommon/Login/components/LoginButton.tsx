import React from 'react';
import { Link } from 'react-router-dom';
const AuthUrl: string = `https://accounts.spotify.com/authorize?client_id=42f2800f08eb405abb7ea297b337bba2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

interface LoginButtonProps {
	handleLogin: () => void;
}
export const LoginButton = ({ handleLogin }: LoginButtonProps) => {
    
	return (
		<div className="spotify-login-container">
			<div className="spotify-login">
				<h1 className="spotify-login__title">Spotify Login</h1>
				<Link to={`${AuthUrl}`} onClick={() => handleLogin()}>
					<button className="spotify-login__button">Login with Spotify</button>
				</Link>
			</div>
		</div>
	);
};
