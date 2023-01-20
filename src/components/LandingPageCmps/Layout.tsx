import React, { useState } from 'react';

import { Home } from '../../pages/Aside/NavPages/Home.tsx';
import { Search } from '../../pages/Aside/NavPages/Search.tsx';
import { Library } from '../../pages/Aside/NavPages/Library.tsx';

import { Header } from '../GlobalCmps/Header.tsx';
import { Aside } from '../GlobalCmps/Aside.tsx';
import { LikedSongs } from '../../pages/Aside/NavPages/LikedSongs.tsx';
import { CreatePlaylist } from '../../pages/Aside/NavPages/CreatePlaylist.tsx';

export const Layout = () => {

    const [activePage, setActivePage] = useState<string>('home');
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
            <Aside setActivePage={setActivePage} options={options} />
            <div className='landing-page-component-container'>
                <Header />
                {Components[activePage]}
            </div>
            {/* <Footer /> */}
        </div>
    );
}

