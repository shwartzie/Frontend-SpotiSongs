import React, { useEffect, useState } from 'react';

import { FavouritesTitle } from '../components/FavouritesTitle';
import { Favourites } from '../components/Favourites';
import { useAuth } from '../../../hooks/useAuth';
import { userService } from 'Features/UserCommon/services/user.service';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../../common/Components/Loading';
import { useSelector } from 'react-redux';

// const code: string = new URLSearchParams(window.location.search).get('code');
export const Home = () => {
	const { tokenData } = useSelector((state: any): any => state.userModule);

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
