import { Title } from 'common/Components/Title';
import { FavouriteTitle } from 'Features/Home/components/FavouriteTitle';
import React, { useState } from 'react';
import { GenreLayoutPreview } from '../components/GenreLayoutPreview';

type Genre = {
	id: string;
	name: string;
	imageUrl: string;
	backgroundColor: string;
};

interface GenresProps {
	title: string;
	genres: any;
}
export const Genres = ({ genres, title }: GenresProps) => {
	return (
		<>
			<Title title={title} className={'search-container-layout-title'} />
			<div className='search-container-overflow scroll'>
				<article className="search-container-layout">
					{genres && genres.map((genre: Genre) => <GenreLayoutPreview genre={genre} key={genre.id} />)}
				</article>
			</div>
		</>
	);
};
