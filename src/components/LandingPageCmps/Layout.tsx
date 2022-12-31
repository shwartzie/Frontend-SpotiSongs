import React from 'react';
import { Header } from '../GlobalCmps/Header.tsx';
import { Favourites } from './Favourites/Favourites.tsx';
import { FavouritesTitle } from './Favourites/FavouritesTitle.tsx';
export const Layout = () => {
    return (
        <div className='landing-page-layout'>
            <Header />
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
        </div>
    );
}

