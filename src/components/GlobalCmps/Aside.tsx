import React, { useEffect, useMemo, useState } from 'react';
import { Home } from '../../pages/Aside/NavPages/Home.tsx';
import { CreatePlaylist } from '../AsideCmps/CreatePlaylist.tsx';
import { Logo } from '../AsideCmps/Logo.tsx';
import { NavOptionsPreview } from '../AsideCmps/NavOptionsPreview.tsx';

export const Aside = ({ setActivePage, options }) => {

    return (
        <aside className='landing-page-aside-layout'>
            <Logo />
            <nav>
                <ul className='nav-options-preview-ul'>
                    {options.map(option => (
                        <NavOptionsPreview key={option} option={option} setActivePage={setActivePage} />
                    ))}
                    {/* <CreatePlaylist /> */}
                </ul>
            </nav>
        </aside >
    );
}

