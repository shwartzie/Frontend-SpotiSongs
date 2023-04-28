import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Favourites } from '../components/Favourites';
import { FavouritesTitle } from '../components/FavouritesTitle';


export const Home = () => {
	// const dispatch: any = useDispatch();
	// const { tokenData, spotifyApi } = useSelector((state: any) => state.userModule);

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
