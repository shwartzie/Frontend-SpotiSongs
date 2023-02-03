import React from 'react';
import { FunctionsPreview } from '../../../../Functions/pages/FunctionsPreview';
import { PlayerControlsPreview } from '../../../../PlayerControls/pages/PlayerControlsPreview';
import { SongDetailsPreview } from '../../../../SongDetails/pages/SongDetailsPreview';
export const Footer = () => {

    return (
        <footer className='footer-main-container'>
            <div className='footer-container'>
                <main className='footer-layout'>
                    <SongDetailsPreview />
                    <PlayerControlsPreview />
                    <FunctionsPreview />
                </main>
            </div>
        </footer>
    );
};