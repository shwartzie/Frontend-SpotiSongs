import React, { useState } from 'react';
import { NavOptionsName } from './NavOptionName.tsx';
import { useNavigate } from 'react-router-dom';

export const NavOptionsPreview = ({ option, setActivePage }) => {

    const homeSvg = <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" fill="#fff" />;
    const searchSvg = <path d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM17 10C17 13.866 13.866 17 10 17V19C14.9706 19 19 14.9706 19 10H17ZM10 17C6.13401 17 3 13.866 3 10H1C1 14.9706 5.02944 19 10 19V17ZM3 10C3 6.13401 6.13401 3 10 3V1C5.02944 1 1 5.02944 1 10H3ZM10 3C13.866 3 17 6.13401 17 10H19C19 5.02944 14.9706 1 10 1V3ZM14.7929 16.2071L21.2929 22.7071L22.7071 21.2929L16.2071 14.7929L14.7929 16.2071Z" fill="#fff" />;
    const librarySvg = <path fill="#fff" d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z" />;
    const likedSongsSvg = <path fill="#fff" d="M24.046,10h-7.124C15.86,10,15,9.29,15,8.229V1.104C15,0.577,14.572,0,14.046,0H2.965C1.328,0,0,1.478,0,3.114v26.071
    C0,30.823,1.328,32,2.965,32h19.07C23.672,32,25,30.823,25,29.186V11.104C25,10.577,24.572,10,24.046,10z M12.5,25.684
    c0,0-5.814-2.582-5.814-7.293c0-1.672,1.355-3.027,3.029-3.027c1.25,0,2.322,0.758,2.785,1.839
    c0.462-1.081,1.534-1.839,2.785-1.839c1.673,0,3.029,1.355,3.029,3.027C18.314,23.102,12.5,25.684,12.5,25.684z"/>;
    const createPlaylistSvg = <path d="M12 8V16M16 12H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#fff" />;

    const svg = {
        "home": homeSvg,
        "search": searchSvg,
        "library": librarySvg,
        "likedSongs": likedSongsSvg,
        "createPlaylist": createPlaylistSvg
    };

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

