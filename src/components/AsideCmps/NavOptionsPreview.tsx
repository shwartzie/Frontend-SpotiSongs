import React, { useState } from 'react';
import { NavOptionsName } from './NavOptionName.tsx';
// import homeSvg from '../../assets/svg/home-svgrepo-com.svg';

export const NavOptionsPreview = ({ option, setActivePage }) => {

    const homeSvg = <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" fill="#fff" />;
    const searchSvg = <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" fill="#fff" />;
    const librarySvg = <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" fill="#fff" />;
    const svg = { "home": homeSvg, "search": searchSvg, "library": librarySvg };



    return (
        <li>

            <a href="#" onClick={() => setActivePage(option)}>
                <svg role="img" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" width="24" height="24">
                    {svg[option]}
                </svg>
                <NavOptionsName option={option} />
            </a>
        </li>
    );
}

