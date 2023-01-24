import React, { useEffect, useMemo, useState } from 'react';
import { Home } from '../../Home/pages/Home';
import { Logo } from '../components/Logo';
import { NavOptionsPreview } from '../components/NavOptionsPreview';

export const Aside = ({ setActivePage, options }) => {

    return (
        <aside className='landing-page-aside-layout'>
            <Logo />
            <nav>
                <ul className='nav-options-preview-ul'>
                    {options.map(option => (
                        <NavOptionsPreview option={option} setActivePage={setActivePage} key={option}/>
                    ))}
                </ul>
            </nav>
        </aside >
    );
}

