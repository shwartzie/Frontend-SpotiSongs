import React from 'react';
import { Aside } from '../../components/GlobalCmps/Aside.tsx';
import { Footer } from '../../components/GlobalCmps/Footer.tsx';
import { Header } from '../../components/GlobalCmps/Header.tsx';
import { Layout } from '../../components/LandingPageCmps/Layout.tsx';

export const LandingPage = () => {
    return (
        <>
            <main className="main-landing-page">
                <div className="main-landing-page-container">
                    <Aside />
                    <Layout />
                    {/* <Footer /> */}
                </div>
            </main>
        </>
    );
}

