import React, { useEffect, useMemo, useState } from 'react';
import { Home } from '../../Home/pages/Home';
import { Logo } from '../components/Logo';
import { NavOptionsPreview } from '../components/NavOptionsPreview';

type AsideProps = {
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
    options: string[],
    activePage: string;
};
export const Aside = ({ setActivePage, options, activePage }: AsideProps) => {
    const px = activePage == "search" ? "384px" : "241px";

    return (
        <aside className='landing-page-aside-layout' style={{width: px}}>
            <Logo />
            <nav>
                <ul className='nav-options-preview-ul'>
                    {options.map(option => (
                        <NavOptionsPreview option={option} setActivePage={setActivePage} key={option} activePage={activePage} />
                    ))}
                </ul>
            </nav>
        </aside >
    );
}

