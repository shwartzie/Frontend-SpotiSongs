import React, { useEffect, useState } from 'react';

import { FavouritesTitle } from '../components/FavouritesTitle';
import { Favourites } from '../components/Favourites';
import { useAuth } from '../../../hooks/useAuth';
import { userService } from 'Features/UserCommon/services/user.service';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../common/Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'store/actions/userActions';
import { Dispatch } from 'redux';

// const code: string = new URLSearchParams(window.location.search).get('code');
export const Home = () => {
	const { tokenData, spotifyApi } = useSelector((state: any): any => state.userModule);
	const dispatch: Dispatch = useDispatch();
	const navigate = useNavigate();
	console.log('dispatch', spotifyApi);
	spotifyApi.getMe().then((res) => {
		const { body, statusCode } = res;
		if (statusCode !== 200) {
			navigate('/');
			return;
		}
		// const {
		// 	country,
		// 	display_name: fullName,
		// 	email,
		// 	followers,
		// 	href: userProfileLink,
		// 	id: uid,
		// 	images,
		// 	type,
		// 	uri,
		// } = body;
		// dispatch(login({ ...body }));
		console.log(res);
	});
	return (
		<main>
			(
			<div>
				<div className="landing-page-header-and-favourites-container">
					<section className="landing-page-header-and-favourites-section">
						<FavouritesTitle />
						<Favourites />
					</section>
				</div>
			</div>
			)
		</main>
	);
};
