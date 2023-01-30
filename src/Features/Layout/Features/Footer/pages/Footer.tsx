import React from 'react';
import { FunctionsPreview } from '../Features/Functions/pages/FunctionsPreview';
import { PlayerControlsPreview } from '../Features/PlayerControls/pages/PlayerControlsPreview';
import { SongDetailsPreview } from '../Features/SongDetails/pages/SongDetailsPreview';
export const Footer = () => {

    return (
        <footer className='layout-footer'>
            <div className='footer-container'>
                <SongDetailsPreview />
                <PlayerControlsPreview />
                <FunctionsPreview />
            </div>
        </footer>
    );
};