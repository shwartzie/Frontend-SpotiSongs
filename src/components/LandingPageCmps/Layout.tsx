import React from 'react';
import { Header } from '../GlobalCmps/Header.tsx';
import { Favourites } from './Favourites.tsx';
export const Layout = () => {
    return (
        <div className='landing-page-layout'>
            <article>
                <Header />
                <section>
                    <Favourites />
                </section>
            </article>
        </div>
    );
}

