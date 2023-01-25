import React, { useEffect, useState } from 'react';

import { Home } from '../../Home/pages/Home';
import { Search } from '../../Search/pages/Search';
import { Library } from '../../Library/pages/Library';

import { Header } from './Header';
import { Aside } from '../../AsideNavbar/pages/Aside';
import { LikedSongs } from '../../LikedSongs/pages/LikedSongs';
import { CreatePlaylist } from '../../CreatePlaylist/pages/CreatePlaylist';

export const Layout = () => {

    const [activePage, setActivePage] = useState<string>('home');
    const [onPagination, setPage] = useState<any>(activePage);

    useEffect(() => {
        console.log(onPagination);
        setActivePage(onPagination);
        
    }, [setPage]);

    const options: string[] = ['home', 'search', 'library', 'likedSongs', "createPlaylist"];

    const Components = {
        home: <Home />,
        search: <Search />,
        library: <Library />,
        likedSongs: <LikedSongs />,
        createPlaylist: <CreatePlaylist />
    };

    return (
        <div className='landing-page-layout'>
            <Aside setActivePage={setActivePage} options={options} activePage={activePage} />
            <div className='landing-page-component-container'>
                <Header activePage={activePage} setPage={setPage} />
                {Components[activePage]}
            </div>
            {/* <Footer /> */}
        </div>
    );
}

