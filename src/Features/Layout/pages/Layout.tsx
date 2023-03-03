import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


import { Aside } from '../../AsideNavbar/pages/Aside';
import { Header } from '../components/Header';
import { Footer } from '../Features/Footer/pages/Footer';

export const Layout = ({ children }: any) => {

    const [activePage, setActivePage] = useState<string>('home');
    const [onPagination, setPage] = useState<any>(activePage);

    const options: string[] = ['home', 'search', 'library', 'likedSongs', "createPlaylist"];


    return (
        <>
            <main className="main-landing-page">
                <div className='landing-page-layout'>
                    <div className='landing-page-layout-main-container'>
                        <Aside setActivePage={setActivePage} options={options} activePage={activePage} />
                        <div className='landing-page-component-container'>
                            <Header activePage={activePage} setPage={setPage} />
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

