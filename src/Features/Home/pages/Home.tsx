import React from 'react';

import { FavouritesTitle } from '../components/FavouritesTitle';
import { Favourites } from '../components/Favourites';

export const Home = () => {
    console.log("Home");
    return (
        <main>
            <div>
                <div className='landing-page-header-and-favourites-container'>
                    <section className='landing-page-header-and-favourites-section'>
                        <FavouritesTitle />
                        <Favourites />
                    </section>
                </div>
            </div>
        </main>
    );
}

