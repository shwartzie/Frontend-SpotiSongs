import React, { useState } from 'react';
import { Home } from '../../pages/Aside/NavPages/Home.tsx';
import { Library } from '../../pages/Aside/NavPages/Library.tsx';
import { Search } from '../../pages/Aside/NavPages/Search.tsx';
import { NavOptionsPreview } from '../AsideCmps/NavOptionsPreview.tsx';

export const Aside = () => {

    const [activePage, setActivePage] = useState<string>('home');


    const Components = {
        home: <Home />,
        search: <Search />,
        library: <Library />
    };

    const options: string[] = ['home', 'search', 'library'];

    return (
        <aside className='landing-page-aside-layout'>
            <nav>
                <ul className='nav-options-preview-ul'>
                    {options.map(option => (
                        <NavOptionsPreview key={option} option={option} setActivePage={setActivePage} />
                    ))}
                </ul>
            </nav>
            {Components[activePage]}
        </aside >
    );
}

